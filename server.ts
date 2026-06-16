import express from "express";
import path from "path";
import fs from "fs";
import mongoose from "mongoose";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

// Enable JSON parse body
app.use(express.json());

// MongoDB connection setup
let isMongoConnected = false;
if (process.env.MONGODB_URI) {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("Connected to MongoDB successfully!");
      isMongoConnected = true;
    })
    .catch((err) => {
      console.error("Failed to connect to MongoDB:", err);
    });
} else {
  console.log("Note: MONGODB_URI environment variable is not defined. Falling back to local JSON persistence (data/inquiries.json, data/demos.json).");
}

// Mongoose schemas
const InquirySchema = new mongoose.Schema({
  name: { type: String, required: true },
  schoolName: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const DemoRequestSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  schoolName: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  studentCount: { type: Number, required: true },
  city: { type: String, required: true },
  preferredDate: { type: String, required: true },
  message: { type: String },
  createdAt: { type: Date, default: Date.now }
});

const InquiryModel = mongoose.models.Inquiry || mongoose.model("Inquiry", InquirySchema);
const DemoRequestModel = mongoose.models.DemoRequest || mongoose.model("DemoRequest", DemoRequestSchema);

// Local JSON file database fallbacks
const DATA_DIR = path.join(process.cwd(), "data");

function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

function saveInquiryLocal(data: any) {
  ensureDataDir();
  const filePath = path.join(DATA_DIR, "inquiries.json");
  let list = [];
  if (fs.existsSync(filePath)) {
    try {
      list = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    } catch {
      list = [];
    }
  }
  const item = { ...data, id: Date.now().toString(), createdAt: new Date() };
  list.push(item);
  fs.writeFileSync(filePath, JSON.stringify(list, null, 2), "utf-8");
  return item;
}

function saveDemoLocal(data: any) {
  ensureDataDir();
  const filePath = path.join(DATA_DIR, "demos.json");
  let list = [];
  if (fs.existsSync(filePath)) {
    try {
      list = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    } catch {
      list = [];
    }
  }
  const item = { ...data, id: Date.now().toString(), createdAt: new Date() };
  list.push(item);
  fs.writeFileSync(filePath, JSON.stringify(list, null, 2), "utf-8");
  return item;
}

function getLocalInquiries() {
  ensureDataDir();
  const filePath = path.join(DATA_DIR, "inquiries.json");
  if (!fs.existsSync(filePath)) return [];
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf-8"));
  } catch {
    return [];
  }
}

function getLocalDemos() {
  ensureDataDir();
  const filePath = path.join(DATA_DIR, "demos.json");
  if (!fs.existsSync(filePath)) return [];
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf-8"));
  } catch {
    return [];
  }
}

// API ROUTE: Get marketing app health/status
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    database: isMongoConnected ? "mongodb" : "local-json",
    time: new Date()
  });
});

// API ROUTE: Store Contact/Inquiry request
app.post("/api/inquiry", async (req, res) => {
  try {
    const { name, schoolName, phone, email, message } = req.body;
    
    if (!name || !schoolName || !phone || !email || !message) {
      return res.status(400).json({ error: "All contact form fields are required" });
    }

    const docData = { name, schoolName, phone, email, message };

    if (isMongoConnected) {
      const doc = new InquiryModel(docData);
      await doc.save();
    } else {
      saveInquiryLocal(docData);
    }

    res.json({ success: true, message: "Thank you! We will contact you shortly." });
  } catch (error: any) {
    console.error("Error saving contact inquiry:", error);
    res.status(500).json({ error: "Failed to submit inquiry. Please try again later." });
  }
});

// API ROUTE: Store Demo Request
app.post("/api/demo-request", async (req, res) => {
  try {
    const { fullName, schoolName, phone, email, studentCount, city, preferredDate, message } = req.body;

    if (!fullName || !schoolName || !phone || !email || !studentCount || !city || !preferredDate) {
      return res.status(400).json({ error: "All required fields must be filled" });
    }

    const docData = {
      fullName,
      schoolName,
      phone,
      email,
      studentCount: Number(studentCount),
      city,
      preferredDate,
      message: message || ""
    };

    if (isMongoConnected) {
      const doc = new DemoRequestModel(docData);
      await doc.save();
    } else {
      saveDemoLocal(docData);
    }

    res.json({ success: true, message: "Thank you! We will contact you shortly." });
  } catch (error: any) {
    console.error("Error saving demo request:", error);
    res.status(500).json({ error: "Failed to submit demo request. Please try again later." });
  }
});

// API ROUTE: Read-only debug panel view of inquiries & demos
app.get("/api/submissions", async (req, res) => {
  try {
    let inquiries = [];
    let demos = [];

    if (isMongoConnected) {
      inquiries = await InquiryModel.find().sort({ createdAt: -1 });
      demos = await DemoRequestModel.find().sort({ createdAt: -1 });
    } else {
      inquiries = getLocalInquiries().reverse();
      demos = getLocalDemos().reverse();
    }

    res.json({
      database: isMongoConnected ? "mongodb" : "local-json",
      inquiries,
      demos
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// Serve frontend assets via Vite middleware in dev or static public dir in prod
async function setupViteOrStatic() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Ruhi School Manager server running on http://0.0.0.0:${PORT}`);
  });
}

setupViteOrStatic();
