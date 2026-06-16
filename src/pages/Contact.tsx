import React, { useState, useEffect } from "react";
import { Mail, Phone, MessageSquare, AlertCircle, CheckCircle, Send, Loader2, RefreshCw } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    schoolName: "",
    phone: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ success?: boolean; message?: string } | null>(null);
  
  // To fetch latest submissions for instant preview verification
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [fetchingSubmissions, setFetchingSubmissions] = useState(false);

  const fetchLatestSubmissions = async () => {
    try {
      setFetchingSubmissions(true);
      const res = await fetch("/api/submissions");
      if (res.ok) {
        const data = await res.json();
        setSubmissions(data.inquiries || []);
      }
    } catch (e) {
      console.warn("Failed to fetch submissions preview", e);
    } finally {
      setFetchingSubmissions(false);
    }
  };

  useEffect(() => {
    fetchLatestSubmissions();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    if (!formData.name || !formData.schoolName || !formData.phone || !formData.email || !formData.message) {
      setStatus({ success: false, message: "Please fill out all contact fields before submitting." });
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus({ success: true, message: "Thank you! We will contact you shortly." });
        setFormData({
          name: "",
          schoolName: "",
          phone: "",
          email: "",
          message: ""
        });
        // Refresh live submissions in preview
        fetchLatestSubmissions();
      } else {
        setStatus({ success: false, message: data.error || "Failed to submit. Please try again." });
      }
    } catch {
      setStatus({ success: false, message: "A server connection error occurred. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen pt-32 pb-24" id="contact-page-root">
      
      {/* HEADER HERO */}
      <section className="relative overflow-hidden py-16 bg-gradient-to-b from-blue-50/50 to-slate-50 border-b border-slate-200/40 text-center space-y-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold uppercase tracking-wider shadow-sm border border-blue-200">
            <Mail className="h-3.5 w-3.5 text-blue-600" />
            Connect With Ruhi Sales
          </span>
          <h1 className="font-display font-black text-4xl sm:text-5xl text-slate-950 tracking-tight">
            GET IN TOUCH WITH US
          </h1>
          <p className="text-slate-600 text-base max-w-2xl mx-auto leading-relaxed">
            Have questions about student databases, multi-school pricing plans, or on-premises server sync support? Let's connect instantly.
          </p>
        </div>
      </section>

      {/* WORK CONTENT */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left direct details cards */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="font-display font-extrabold text-2xl text-slate-900 tracking-tight">
                Developer Contact Info
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Connect directly with our founder and chief developer, <strong>Dilkush Ror</strong>. We offer immediate diagnostic and deployment support.
              </p>

              <div className="space-y-4 pt-2">
                {/* Email Card */}
                <div className="bg-white p-5 rounded-2xl border border-slate-150 shadow-sm flex items-start gap-4">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-xl shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-slate-950 text-sm">Direct Email address</h4>
                    <a 
                      href="mailto:ror28dilkush@gmail.com"
                      className="text-blue-600 font-semibold hover:underline text-sm font-mono mt-1 block"
                    >
                      ror28dilkush@gmail.com
                    </a>
                  </div>
                </div>

                {/* Call Support Card */}
                <div className="bg-white p-5 rounded-2xl border border-slate-150 shadow-sm flex items-start gap-4">
                  <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-slate-950 text-sm">Direct Phone Inquiry</h4>
                    <a 
                      href="tel:+919588732288"
                      className="text-emerald-700 font-semibold hover:underline text-sm font-mono mt-1 block"
                    >
                      +91 9588732288
                    </a>
                  </div>
                </div>

                {/* WhatsApp Chat Card */}
                <div className="bg-white p-5 rounded-2xl border border-slate-150 shadow-sm flex items-start gap-4">
                  <div className="p-3 bg-green-50 text-green-600 rounded-xl shrink-0">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-slate-950 text-sm">WhatsApp Chat Support</h4>
                    <a 
                      href="https://wa.me/919588732288"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 font-semibold hover:underline text-sm font-mono mt-1 block"
                    >
                      +91 9588732288
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Contact Form panel */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 rounded-3xl border border-slate-150 shadow-sm space-y-6">
                <div>
                  <h3 className="font-display font-extrabold text-xl text-slate-950">
                    Send An Inquiry Message
                  </h3>
                  <p className="text-slate-500 text-xs mt-1">
                    Fill out this form and our support manager will connect with your principal's desk.
                  </p>
                </div>

                {status && (
                  <div 
                    className={`p-4 rounded-xl flex items-start gap-3 text-sm ${
                      status.success 
                        ? "bg-emerald-50 text-emerald-800 border border-emerald-100" 
                        : "bg-rose-50 text-rose-800 border border-rose-100"
                    }`}
                  >
                    {status.success ? (
                      <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="h-5 w-5 text-rose-600 shrink-0 mt-0.5" />
                    )}
                    <span>{status.message}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4" id="contact-inquiry-form">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 tracking-wide block">
                        Your Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Dilkush Ror"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 tracking-wide block">
                        Official School Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="schoolName"
                        value={formData.schoolName}
                        onChange={handleChange}
                        required
                        placeholder="Springdales Academy"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 tracking-wide block">
                        Mobile Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 9588732288"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-mono"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 tracking-wide block">
                        Official Email address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="ror28dilkush@gmail.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 tracking-wide block">
                      Inquiry Message Detail <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Please tell us about your school requirements, branches count, and any features you need."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    id="submit-contact-form-btn"
                    className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl text-sm hover:bg-blue-700 disabled:bg-blue-400 active:bg-blue-800 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Submitting Inquiry...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Submit Secure Inquiry
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* DB PREVIEW WIDGET FOR VERIFYING PERSISTENCE */}
      <section className="py-8 bg-slate-100 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-4">
            <div className="flex justify-between items-center flex-wrap gap-2">
              <div>
                <h4 className="font-display font-bold text-slate-950 text-sm flex items-center gap-2">
                  <span>🗳️ Sandbox Live Ledger Preview</span>
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded font-bold">
                    Connected to Back-End
                  </span>
                </h4>
                <p className="text-slate-500 text-xs mt-0.5">
                  Your submissions write to MongoDB/local-files in real-time. Verify your inquiry list update here!
                </p>
              </div>
              <button
                onClick={fetchLatestSubmissions}
                disabled={fetchingSubmissions}
                id="refresh-leads-btn"
                className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg text-slate-700 text-xs font-semibold transition-all cursor-pointer"
              >
                <RefreshCw className={`h-3 w-3 ${fetchingSubmissions ? "animate-spin" : ""}`} />
                Reload Entries
              </button>
            </div>

            {fetchingSubmissions ? (
              <div className="text-center py-6 text-slate-400 text-xs flex justify-center items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin text-blue-500" />
                Reading entries...
              </div>
            ) : submissions.length === 0 ? (
              <div className="text-center py-8 text-slate-400 text-xs border border-dashed border-slate-200 rounded-xl">
                No inquiries logged in database yet. Fill out the form above to record your first real-time entry!
              </div>
            ) : (
              <div className="max-h-[250px] overflow-y-auto border border-slate-100 rounded-xl divide-y divide-slate-100">
                {submissions.map((lead: any, idx: number) => (
                  <div key={lead._id || lead.id || idx} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <strong className="text-slate-800 text-sm">{lead.name}</strong>
                        <span className="text-[10px] bg-blue-50 text-blue-600 px-2 py-0.2 rounded font-semibold">
                          {lead.schoolName}
                        </span>
                      </div>
                      <p className="text-slate-550 leading-normal">{lead.message}</p>
                    </div>
                    <div className="text-right whitespace-nowrap shrink-0 text-[10px] text-slate-400 font-mono">
                      <p>{lead.phone} • {lead.email}</p>
                      <p className="mt-0.5">{new Date(lead.createdAt).toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}
