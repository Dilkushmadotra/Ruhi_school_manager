import { useState } from "react";
import { ActivePage } from "../types";
import { 
  Users, CheckCircle2, Award, FileSpreadsheet, KeyRound, 
  Layers, ShieldCheck, Zap, Smartphone, BadgePercent, 
  MapPin, Star, GraduationCap, Calendar, Clock, BookOpen, AlertCircle, ArrowRight,
  ChevronDown, HelpCircle, Plus, Sparkles
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HomeProps {
  setActivePage: (page: ActivePage) => void;
}

function InteractiveBenefitCard({ benefit, idx }: { benefit: any; idx: number; key?: any }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const active = isExpanded || isHovered;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.5, delay: Math.min(idx * 0.05, 0.3) }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsExpanded(!isExpanded)}
      className={`p-6 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between relative overflow-hidden select-none ${
        active 
          ? "bg-white border-blue-500/80 shadow-md shadow-blue-100/50 scale-[1.02]" 
          : "bg-slate-50 border-slate-200/80 hover:bg-slate-150 hover:border-slate-300 shadow-sm"
      }`}
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-500/[0.04] via-transparent to-transparent pointer-events-none" />
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className={`p-3 rounded-2xl transition-colors duration-300 ${active ? 'bg-blue-600' : 'bg-slate-200/60'} ${active ? 'text-white' : 'text-slate-700'}`}>
            {benefit.icon}
          </div>
          <div className="flex items-center gap-1.5 opacity-70">
            <span className="text-[9px] font-mono font-medium text-slate-500">
              {active ? "Click to lock" : "Hover or Click"}
            </span>
            <div className={`w-5 h-5 rounded-full bg-slate-200/60 flex items-center justify-center transition-transform duration-300 ${active ? 'rotate-180 bg-blue-50' : ''}`}>
              <ChevronDown className={`h-3 w-3 ${active ? 'text-blue-600' : 'text-slate-500'}`} />
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="font-display font-bold text-slate-950 text-base flex items-center gap-2">
            {benefit.title}
          </h3>
          <p className="text-[10px] text-blue-600 font-mono uppercase tracking-wider font-semibold mt-1">
            {benefit.caption}
          </p>
        </div>

        {/* Expansion Content container */}
        <div 
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            active ? "max-h-36 opacity-100 mt-2 pt-3 border-t border-slate-100" : "max-h-0 opacity-0"
          }`}
        >
          <p className="text-slate-650 text-sm leading-relaxed">
            {benefit.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Home({ setActivePage }: HomeProps) {
  // Mockup tab selector
  const [activeMockupTab, setActiveMockupTab] = useState<"admin" | "teacher" | "student" | "attendance" | "exams">("admin");

  const statItems = [
    { value: "150+", label: "Schools Managed", desc: "Active primary & secondary schools" },
    { value: "85,000+", label: "Students Managed", desc: "Daily active student portal profiles" },
    { value: "4,200+", label: "Teachers Empowered", desc: "Educators managing work digitially" },
    { value: "12M+", label: "Records Logged", desc: "Attendance, grades & notices logged" },
  ];

  const features = [
    {
      icon: <Layers className="h-6 w-6 text-blue-600" />,
      title: "Multi-School ERP Connection",
      desc: "Manage multiple school branches or locations from a single master administrative control tower."
    },
    {
      icon: <Users className="h-6 w-6 text-indigo-600" />,
      title: "Student Management System",
      desc: "Complete 360° student records from custom admission numbers to detailed physical/medical cards."
    },
    {
      icon: <GraduationCap className="h-6 w-6 text-sky-600" />,
      title: "Teacher Management Board",
      desc: "Optimally track teacher assignments, class tasks, profile credentials, and subject workload distributions."
    },
    {
      icon: <CheckCircle2 className="h-6 w-6 text-emerald-600" />,
      title: "Real-time Attendance Tracker",
      desc: "Record attendance in seconds on any smartphone, instantly pinging absent status alerts straight to parents."
    },
    {
      icon: <BookOpen className="h-6 w-6 text-violet-600" />,
      title: "Homework & Task Board",
      desc: "Assign, upload, and grade student homework digitally. Encourage structured learning beyond class boundaries."
    },
    {
      icon: <Award className="h-6 w-6 text-amber-600" />,
      title: "Exam & Marks Hub",
      desc: "Create tests, input scores, automatically calculate grade point averages, and generate print-ready progress cards."
    },
    {
      icon: <Calendar className="h-6 w-6 text-rose-600" />,
      title: "Timetable Management Engine",
      desc: "Generate smart, conflict-free daily schedules for classes, teachers, exam blocks and laboratory reservations."
    },
    {
      icon: <FileSpreadsheet className="h-6 w-6 text-teal-600" />,
      title: "Reports & Deep Analytics",
      desc: "Extract customizable intelligence metrics regarding attendance averages, exam statistics, and tuition fees due."
    },
    {
      icon: <AlertCircle className="h-6 w-6 text-amber-500" />,
      title: "School Notice Boards",
      desc: "Broadcast instant newsletters, vacation schedule delays, and emergency board alerts immediately in parent folders."
    },
    {
      icon: <KeyRound className="h-6 w-6 text-pink-600" />,
      title: "Role-Based Access Control",
      desc: "Secure separate interfaces specifically designed to serve Admins, Teachers, Students, and Parents correctly."
    }
  ];

  const benefits = [
    {
      icon: <Zap className="h-5 w-5 text-blue-600" />,
      title: "Easy to Use",
      caption: "10-Min Learning Curve",
      desc: "Zero technical training needed. Clean, responsive screens that teachers, office administrators, and staff can easily master in under 10 minutes without any manuals."
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-indigo-600" />,
      title: "Secure Data Hosting",
      caption: "AES-256 Cloud Security",
      desc: "Enterprise-grade cloud architectures & database encryption safeguarding critical, sensitive student minor records and parent contact directories fully."
    },
    {
      icon: <Smartphone className="h-5 w-5 text-emerald-600" />,
      title: "Mobile Friendly Canvas",
      caption: "Fully Responsive Access",
      desc: "Fully responsive layouts engineered carefully to work beautifully on low-spec Android smartphones, iPhones, and tablets alike."
    },
    {
      icon: <BadgePercent className="h-5 w-5 text-amber-600" />,
      title: "Affordable Flat Plans",
      caption: "Transparent & Accessible",
      desc: "Transparent price models matching local school budgets perfectly. No setup penalties, surprise maintenance overheads, or hidden onboarding fees."
    },
    {
      icon: <Layers className="h-5 w-5 text-violet-600" />,
      title: "Multi-School Support",
      caption: "All Branches Linked",
      desc: "A singular master admin panel helps principals easily manage multiple campuses simultaneously without constant logins swapping."
    },
    {
      icon: <CheckCircle2 className="h-5 w-5 text-teal-600" />,
      title: "Optimized Performance",
      caption: "Ultra-Fast Light Load",
      desc: "Powered by advanced React rendering modules loading panels at breakneck speeds, even when running over slow 3G cellular data."
    }
  ];

  const testimonials = [
    {
      rating: 5,
      quote: "Before Ruhi School Manager, generating quarterly progress cards took our faculty full days of painful manual spreadsheets. Now, report cards are ready with a literal push of a button. Essential ERP for any modern private academy.",
      author: "Dr. Sandeep Sharma",
      role: "Principal, Springdales Senior Secondary School",
      badge: "Managed over 1,200 students"
    },
    {
      rating: 5,
      quote: "Attendance takes exactly 30 seconds daily now. The parent gets an automatic SMS / notice immediately if a child misses first bell. Parent-Teacher meetings are 10 times more productive now with historical logs.",
      author: "Meera Deshmukh",
      role: "Senior Secondary Educator",
      badge: "8+ Years Teaching Experience"
    },
    {
      rating: 5,
      quote: "Managing fee receipts, scheduling conflict-free class rosters and dispatching notices across 3 different school compounds was a major headache. Ruhi School Manager connects everything under 1 master dashboard.",
      author: "Rajesh K. Ror",
      role: "Administrative Director, Heritage Global Schools",
      badge: "3 Campus Branches Connected"
    }
  ];

  return (
    <div className="bg-slate-50 text-slate-900" id="homepage-root">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32 bg-gradient-to-b from-blue-50/70 via-white to-slate-50" id="hero-section">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e0e7ff_1px,transparent_1px),linear-gradient(to_bottom,#e0e7ff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold tracking-wide uppercase shadow-sm border border-blue-200">
                <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
                Next-Gen School ERP Software
              </div>
              <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-slate-950 tracking-tight leading-[1.08] max-w-2xl mx-auto lg:mx-0">
                SMART SCHOOL MANAGEMENT <span className="text-blue-600 block sm:inline">MADE SIMPLE</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0 font-sans font-normal">
                Manage Students, Teachers, Attendance, Homework, Exams, Timetable and Reports with one powerful, affordable school ERP solution. Built for local schools, loved by principals and parents.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={() => setActivePage("demo")}
                  id="hero-request-demo-btn"
                  className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-xl text-base font-bold hover:bg-blue-700 active:bg-blue-800 shadow-lg shadow-blue-500/20 hover:shadow-xl transition-all cursor-pointer text-center"
                >
                  Request Free Demo
                </button>
                <button
                  onClick={() => setActivePage("contact")}
                  id="hero-contact-us-btn"
                  className="w-full sm:w-auto px-8 py-4 bg-white text-slate-800 border border-slate-200 hover:border-slate-300 rounded-xl text-base font-semibold hover:bg-slate-50 transition-all cursor-pointer text-center"
                >
                  Contact Us
                </button>
              </div>
              
              {/* Highlight Badges */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-100 max-w-md mx-auto lg:mx-0 text-left">
                <div>
                  <h4 className="font-display font-bold text-lg text-slate-950">100% Reliable</h4>
                  <p className="text-xs text-slate-500 font-sans">Cloud Secured Data</p>
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg text-slate-950">10 Min Setup</h4>
                  <p className="text-xs text-slate-500 font-sans">Fast onboarding</p>
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg text-slate-950">Affordable</h4>
                  <p className="text-xs text-slate-500 font-sans">Budgets matched</p>
                </div>
              </div>
            </div>

            {/* Right Interactive Mockup */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/80 border border-slate-100 overflow-hidden transform hover:-translate-y-1 transition-all">
                {/* Mockup Browser Chromes */}
                <div className="bg-slate-100 px-4 py-3 flex items-center justify-between border-b border-slate-200/60">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-400 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-green-400 inline-block" />
                  </div>
                  <div className="bg-white text-[11px] text-slate-400 px-4 py-1 rounded-md border border-slate-200/80 w-1/2 text-center font-mono truncate">
                    ruhi-schoolmanager.com/dashboard/demo
                  </div>
                  <div className="w-10" />
                </div>

                {/* Dashboard Mockup Content Tabs */}
                <div className="bg-blue-600 px-4 py-2 flex overflow-x-auto gap-2 scrollbar-none">
                  {[
                    { id: "admin", label: "Admin Panel" },
                    { id: "teacher", label: "Teacher App" },
                    { id: "student", label: "Student Portal" },
                    { id: "attendance", label: "Attendance" },
                    { id: "exams", label: "Exam Marks" }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveMockupTab(tab.id as any)}
                      id={`tab-select-${tab.id}`}
                      className={`text-[12px] font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap cursor-pointer transition-all ${
                        activeMockupTab === tab.id
                          ? "bg-white text-blue-700 shadow-sm"
                          : "text-blue-100 hover:bg-blue-500/60"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Interactive Screen Preview */}
                <div className="p-6 bg-white min-h-[300px]">
                  {activeMockupTab === "admin" && (
                    <div className="space-y-4 animate-fade-in">
                      <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                        <div>
                          <h4 className="font-display font-bold text-slate-900 text-sm">Central Admin Dashboard</h4>
                          <p className="text-[11px] text-slate-500">Master School Branch View</p>
                        </div>
                        <span className="text-xs bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.5 rounded-full inline-block">
                          Primary Compound
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-3">
                        <div className="p-3 bg-blue-50/50 rounded-xl border border-blue-100/60">
                          <p className="text-[10px] text-slate-500 font-medium">Daily Roster</p>
                          <p className="text-lg font-bold text-blue-700">1,280/1,340</p>
                          <span className="text-[9px] text-emerald-600 font-semibold">95.5% Attend</span>
                        </div>
                        <div className="p-3 bg-violet-50/50 rounded-xl border border-violet-100/60">
                          <p className="text-[10px] text-slate-500 font-medium">Total Teachers</p>
                          <p className="text-lg font-bold text-violet-700">64 Active</p>
                          <span className="text-[9px] text-slate-500">0 On Today Leave</span>
                        </div>
                        <div className="p-3 bg-teal-50/50 rounded-xl border border-teal-100/60">
                          <p className="text-[10px] text-slate-500 font-medium">Finance due</p>
                          <p className="text-lg font-bold text-teal-700">92% Collected</p>
                          <span className="text-[9px] text-teal-600 font-semibold">+4% vs last week</span>
                        </div>
                      </div>

                      <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 space-y-2">
                        <p className="text-xs font-semibold text-slate-800">Quick Tools</p>
                        <div className="grid grid-cols-2 gap-2 text-[11px]">
                          <div className="flex items-center gap-2 p-1.5 bg-white border border-slate-200/60 rounded">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Print Grade Cards
                          </div>
                          <div className="flex items-center gap-2 p-1.5 bg-white border border-slate-200/60 rounded">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Dispatch SMS Warning
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeMockupTab === "teacher" && (
                    <div className="space-y-4 animate-fade-in">
                      <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                        <div>
                          <h4 className="font-display font-bold text-slate-900 text-sm">Teacher Classroom Board</h4>
                          <p className="text-[11px] text-slate-500">Manage Grade 8B Compound</p>
                        </div>
                        <span className="text-xs bg-indigo-50 text-indigo-700 font-semibold px-2 py-0.5 rounded-full inline-block">
                          Subject: Math
                        </span>
                      </div>

                      <div className="space-y-2.5">
                        <p className="text-xs font-semibold text-slate-700">Today's Class Schedule</p>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between p-2.5 bg-slate-50 hover:bg-slate-100 rounded-lg border border-slate-100 text-xs">
                            <div className="flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-indigo-600" />
                              <span className="font-semibold text-slate-800 font-mono">09:00 - 09:45 AM</span>
                            </div>
                            <span className="text-slate-600">Algebra Essentials (Room 102)</span>
                          </div>
                          <div className="flex items-center justify-between p-2.5 bg-slate-50 hover:bg-slate-100 rounded-lg border border-slate-100 text-xs">
                            <div className="flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-emerald-500" />
                              <span className="font-semibold text-slate-800 font-mono">11:15 - 12:00 PM</span>
                            </div>
                            <span className="text-slate-600">Geometry Practical (Lab 3)</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-3 bg-sky-50 rounded-lg text-xs flex justify-between items-center text-sky-800 border border-sky-100">
                        <span>New homework posted: <strong>Chapter 4 Quadratic Equations</strong></span>
                        <span className="text-[11px] font-mono text-sky-600">Due June 18</span>
                      </div>
                    </div>
                  )}

                  {activeMockupTab === "student" && (
                    <div className="space-y-4 animate-fade-in">
                      <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                        <div>
                          <h4 className="font-display font-bold text-slate-900 text-sm">Student Personal Portal</h4>
                          <p className="text-[11px] text-slate-500">Welcome, Aditya Ror (Grade 10-A)</p>
                        </div>
                        <div className="p-1 rounded bg-slate-100 text-slate-700 font-mono text-[10px]">ID: #R2811</div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 text-xs">
                        <div className="p-3 bg-amber-50 rounded-xl border border-amber-100">
                          <p className="font-semibold text-amber-800">Pending Actions</p>
                          <ul className="mt-1 space-y-1 text-amber-700 text-[11px]">
                            <li>• Chemistry Lab Submission</li>
                            <li>• Physics Exam Fee Due</li>
                          </ul>
                        </div>
                        <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100">
                          <p className="font-semibold text-emerald-800">Latest Performance</p>
                          <div className="mt-1 text-emerald-700 text-[11px]">
                            <p>Term 1 Grade: <strong className="text-sm font-mono text-slate-900">A+ (94.2%)</strong></p>
                            <p className="text-[10px] text-emerald-600">Rank #2/45 in Class</p>
                          </div>
                        </div>
                      </div>

                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/60 font-sans text-xs">
                        <span className="font-bold text-slate-800 block mb-1">📢 Today's Board Notice:</span>
                        <span className="text-slate-600 text-[11px] block">Summer holidays starting June 20. Reopening August 1. Have an excellent active vacation!</span>
                      </div>
                    </div>
                  )}

                  {activeMockupTab === "attendance" && (
                    <div className="space-y-4 animate-fade-in">
                      <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                        <div>
                          <h4 className="font-display font-bold text-slate-900 text-sm">Mobile Speed Attendance</h4>
                          <p className="text-[11px] text-slate-500">Record via Teacher's Mobile in 30 Seconds</p>
                        </div>
                        <span className="text-xs bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.5 rounded-full">
                          Attendance Saved
                        </span>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-lg border border-slate-100 text-xs">
                          <span className="font-medium text-slate-800">1. Aaron Smith (ID: #401)</span>
                          <div className="flex gap-1.5">
                            <span className="bg-emerald-500 text-white font-bold text-[10px] px-2.5 py-1 rounded">PRESENT</span>
                            <span className="bg-slate-200 text-slate-500 hover:bg-slate-300 font-medium text-[10px] px-2.5 py-1 rounded cursor-pointer">ABSENT</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-lg border border-slate-100 text-xs">
                          <span className="font-medium text-slate-800">2. Abhishek Sharma (ID: #402)</span>
                          <div className="flex gap-1.5">
                            <span className="bg-slate-200 text-slate-500 hover:bg-slate-300 font-medium text-[10px] px-2.5 py-1 rounded cursor-pointer">PRESENT</span>
                            <span className="bg-rose-500 text-white font-bold text-[10px] px-2.5 py-1 rounded">ABSENT</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-[10px] text-rose-500 flex items-center gap-1.5 bg-rose-50 p-2 rounded">
                        <span>ℹ️ Parents of Abhishek Sharma received absency notice automatically over email and app folder.</span>
                      </p>
                    </div>
                  )}

                  {activeMockupTab === "exams" && (
                    <div className="space-y-4 animate-fade-in">
                      <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                        <div>
                          <h4 className="font-display font-bold text-slate-900 text-sm">Auto Grading & Exam Cards</h4>
                          <p className="text-[11px] text-slate-500">Terminal 1 Calculus Results</p>
                        </div>
                        <span className="text-xs bg-indigo-100 text-indigo-700 font-semibold px-2 py-0.5 rounded">
                          Class Mean: 78.4%
                        </span>
                      </div>

                      <div className="space-y-2.5 text-xs">
                        <table className="w-full text-left text-slate-700">
                          <thead>
                            <tr className="border-b border-slate-100 text-[10px] uppercase.text-slate-400">
                              <th className="pb-1">Student Name</th>
                              <th className="pb-1 text-center">Marks (100)</th>
                              <th className="pb-1 text-center">Grade</th>
                              <th className="pb-1 text-right">Result</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b border-slate-50">
                              <td className="py-2.5 font-medium text-slate-800">Anjali Singh</td>
                              <td className="py-2.5 text-center font-mono">92</td>
                              <td className="py-2.5 text-center font-bold text-emerald-600">A+</td>
                              <td className="py-2.5 text-right"><span className="bg-emerald-100 text-emerald-800 text-[10px] px-2 py-0.5 rounded font-semibold">Pass</span></td>
                            </tr>
                            <tr>
                              <td className="py-2.5 font-medium text-slate-800">Bunty Meena</td>
                              <td className="py-2.5 text-center font-mono">81</td>
                              <td className="py-2.5 text-center font-bold text-blue-600 font-mono">A</td>
                              <td className="py-2.5 text-right"><span className="bg-emerald-100 text-emerald-800 text-[10px] px-2 py-0.5 rounded font-semibold">Pass</span></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <button
                        onClick={() => setActivePage("features")}
                        className="w-full py-2 bg-blue-50 text-blue-600 font-medium hover:bg-blue-100 font-sans text-xs rounded-lg transition-colors cursor-pointer block text-center"
                      >
                        Explore Detailed Exam Roster System →
                      </button>
                    </div>
                  )}
                </div>

                {/* Foot indicators */}
                <div className="bg-slate-50 px-6 py-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 block animate-pulse" />
                    Connects directly to database (No latency)
                  </span>
                  <p className="font-mono text-[10px]">ERP BUILD V1.0.2 Stable</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="bg-blue-600 text-white py-12 relative overflow-hidden" id="statistics-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-blue-500/50">
            {statItems.map((stat, idx) => (
              <div key={idx} className={`pt-6 lg:pt-0 ${idx > 1 ? "sm:pt-6" : ""}`}>
                <h3 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight block">
                  {stat.value}
                </h3>
                <h5 className="font-sans font-bold text-sm tracking-wide text-blue-100 mt-2 block uppercase">
                  {stat.label}
                </h5>
                <p className="text-xs text-blue-200 mt-1 block">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT SCREENSHOTS/MOCKUPS GALLERY */}
      <section className="py-20 bg-white" id="product-screenshots-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-950 tracking-tight">
              INTERACTIVE ERPS FOR EVERY ROLE
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Explore custom UI screens specialized to simplify workflow management for school admins, teachers, and student profiles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6" id="bento-role-gallery">
            {[
              {
                title: "School Admin Control Hub",
                desc: "Complete command station. Oversee financials, staff tasks, notices broadcast, admissions, and student records under a single roof.",
                tag: "Admin Dashboard",
                metric: "Full Multi-School Control",
                bgColor: "text-blue-600 bg-blue-50/50 border-blue-100",
                gridClass: "md:col-span-2 lg:col-span-4 bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/30 border-blue-200/60 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group hover:shadow-lg transition-all hover:-translate-y-1",
                iconBg: "bg-blue-100 text-blue-600",
                features: ["Financial logs & receipts tracking", "Teacher duty allocations", "Urgent newsletters broadcast", "Dual register profiles sync"],
                glow: "bg-blue-300/10"
              },
              {
                title: "Teacher Portal App",
                desc: "Record rapid classroom attendance, issue homework files, track assignment replies, input examination scores, and message parents.",
                tag: "Teacher Dashboard",
                metric: "Mobile Optimized Tools",
                bgColor: "text-indigo-600 bg-indigo-50 border-indigo-100",
                gridClass: "md:col-span-1 lg:col-span-2 bg-white border-slate-200/80 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group hover:shadow-lg transition-all hover:-translate-y-1",
                iconBg: "bg-indigo-100 text-indigo-600",
                glow: "bg-indigo-300/10"
              },
              {
                title: "Student Academic Suite",
                desc: "Interactive view of timetable rosters, homework deadlines, teacher remarks, examination cards, and virtual school news.",
                tag: "Student Dashboard",
                metric: "Engaging & Lightweight",
                bgColor: "text-sky-600 bg-sky-50 border-sky-100",
                gridClass: "md:col-span-1 lg:col-span-2 bg-white border-slate-200/80 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group hover:shadow-lg transition-all hover:-translate-y-1",
                iconBg: "bg-sky-100 text-sky-600",
                glow: "bg-sky-300/10"
              },
              {
                title: "Rapid Mobile Attendance",
                desc: "Simplify roll calls. Register absentees via mobile with instantaneous email and notice notifications sent automatically.",
                tag: "Attendance Module",
                metric: "30-Second Roll Call",
                bgColor: "text-emerald-600 bg-emerald-50 border-emerald-100",
                gridClass: "md:col-span-2 lg:col-span-4 bg-gradient-to-br from-emerald-50/30 via-white to-teal-50/20 border-emerald-200/60 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group hover:shadow-lg transition-all hover:-translate-y-1",
                iconBg: "bg-emerald-100 text-emerald-600",
                features: ["Seat-map custom roll lists", "Auto parent alert dispatcher", "Absence statistics logs", "Printable term sheet records"],
                glow: "bg-emerald-300/10"
              },
              {
                title: "Examination & Grading Hub",
                desc: "Configurable grade books, simple marks sheet entry, dynamic average calculations, and elegant, print-ready grade card layouts.",
                tag: "Exam Module",
                metric: "Report Card Generator",
                bgColor: "text-violet-600 bg-violet-50/80 border-violet-100",
                gridClass: "md:col-span-1 lg:col-span-6 bg-gradient-to-r from-violet-50/20 via-white to-slate-50/50 border-slate-200 rounded-3xl p-8 lg:p-10 flex flex-col lg:flex-row gap-8 justify-between relative overflow-hidden group hover:shadow-lg transition-all hover:-translate-y-1",
                iconBg: "bg-violet-100 text-violet-600",
                features: ["Raw marks spreadsheet grid", "Auto total & median marks locator", "PDF print-ready report models", "Topper metrics visualization"],
                glow: "bg-violet-300/10"
              },
            ].map((shot, idx) => (
              <div 
                key={idx}
                className={shot.gridClass}
              >
                {/* Visual Ambient Glow and Rings */}
                <div className={`absolute -right-10 -top-10 w-32 h-32 ${shot.glow} rounded-full blur-2xl pointer-events-none`} />
                <div className="absolute top-4 right-4 w-12 h-12 border border-slate-100 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 pointer-events-none">
                  <span className="text-[10px] text-slate-400 font-mono">✦</span>
                </div>

                <div className="space-y-4 flex-1">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-mono tracking-wider uppercase bg-slate-100 text-slate-600 px-3 py-1 rounded-full font-bold">
                      {shot.tag}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="space-y-2">
                      <h3 className="font-display font-bold text-xl text-slate-950 leading-snug">
                        {shot.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed max-w-xl">
                        {shot.desc}
                      </p>
                    </div>
                  </div>

                  {/* Dynamic bullet items in high-fashion grid rows */}
                  {shot.features && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4 mt-2 border-t border-slate-100">
                      {shot.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-600 font-sans">
                          <CheckCircle2 className="h-3.5 w-3.5 text-blue-500 shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100/60 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1">
                    <span className="text-slate-400">Standard: </span>
                    <span className="text-slate-600 font-medium font-mono">Operational v1.4</span>
                  </div>
                  <span className="text-xs text-blue-600 font-bold bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100/40">
                    {shot.metric}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED FEATURES MATRIX */}
      <section className="py-20 bg-slate-50 border-y border-slate-200/40" id="features-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-950 tracking-tight">
              EVERYTHING REQUIRED TO RUN YOUR SCHOOL
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Ruhi School Manager centralizes your processes, converting tedious paperwork into automated cloud dashboards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="features-bento-grid">
            {features.map((feat, idx) => {
              const isHighlight = idx === 0 || idx === 3 || idx === 5 || idx === 8;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: Math.min(idx * 0.05, 0.35), ease: "easeOut" }}
                  className={`p-6 rounded-3xl border border-slate-200/70 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group relative overflow-hidden ${
                    isHighlight 
                      ? "md:col-span-2 bg-gradient-to-br from-white via-white to-blue-50/20" 
                      : "bg-white"
                  }`}
                >
                  <div className="absolute -right-6 -top-6 w-20 h-20 bg-slate-100/40 rounded-full blur-xl group-hover:scale-125 transition-all" />
                  
                  <div className="flex gap-4 items-start">
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl shrink-0 group-hover:scale-110 transition-transform">
                      {feat.icon}
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-display font-semibold text-slate-900 text-base">
                        {feat.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-normal">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                  
                  {isHighlight && (
                    <div className="flex items-center gap-1 mt-4 pt-3 border-t border-slate-100 text-[11px] text-blue-600 font-medium font-mono">
                      <span>✦ Enterprise Integrated ERP Module</span>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => setActivePage("features")}
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 hover:underline cursor-pointer transition-all"
              id="view-all-features-btn"
            >
              Learn more details in ERP Features Page
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE SECTION */}
      <section className="py-20 bg-white" id="why-choose-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-950 tracking-tight">
              WHY CHOOSE RUHI SCHOOL MANAGER?
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              We make transition smooth, fast, and completely risk-free. Click or hover on any benefit card below to expand details.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <InteractiveBenefitCard 
                key={idx}
                benefit={benefit}
                idx={idx}
              />
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/40" id="testimonials-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-950 tracking-tight">
              TRUSTED BY PRINCIPALS & ADMINISTRATORS
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Read real satisfaction reviews from top-rated educators who simplified their workflows using our smart ERP software.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((test, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-slate-150 shadow-sm flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex gap-1 text-amber-500">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-amber-500 stroke-amber-500" />
                    ))}
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed italic">
                    "{test.quote}"
                  </p>
                </div>
                
                <div className="border-t border-slate-100 pt-4 flex justify-between items-center">
                  <div>
                    <h4 className="font-display font-bold text-sm text-slate-950 block">{test.author}</h4>
                    <span className="text-xs text-slate-600 block">{test.role}</span>
                  </div>
                  <span className="text-[10px] bg-blue-50 text-blue-700 font-mono font-bold px-2 py-1 rounded">
                    {test.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER SECTION */}
      <section className="py-20 bg-white" id="founder-section">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-900 to-indigo-950 text-white rounded-3xl overflow-hidden shadow-xl p-8 md:p-12 relative">
            
            {/* Subtle overlay accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* Profile Avatar Mockup */}
              <div className="md:col-span-4 flex flex-col items-center text-center">
                <div className="relative">
                  <div className="w-32 h-32 md:w-36 md:h-36 rounded-full bg-slate-800 border-4 border-blue-500/30 flex items-center justify-center text-5xl font-display font-black text-blue-400 select-none shadow-lg">
                    DR
                  </div>
                  <div className="absolute -bottom-2 bg-blue-600 text-white px-3 py-0.5 rounded-full text-xs font-bold font-mono tracking-widest uppercase">
                    Creator
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="font-display font-bold text-xl text-white">Dilkush Ror</h3>
                  <p className="text-xs text-blue-300 font-medium">Founder & Developer</p>
                </div>
              </div>

              {/* Founder Statement */}
              <div className="md:col-span-8 space-y-6 text-center md:text-left">
                <div className="p-2 bg-blue-800/60 rounded-lg inline-block">
                  <span className="text-xs uppercase font-mono text-blue-200 tracking-wider font-semibold">
                    A Message from Our Founder
                  </span>
                </div>
                <blockquote className="text-base sm:text-lg md:text-xl font-normal leading-relaxed text-slate-100">
                  "Our mission is to make school management simple, digital, and affordable for every school."
                </blockquote>
                <p className="text-sm text-slate-300 leading-relaxed font-sans max-w-xl">
                  We built Ruhi School Manager after seeing educators lose valuable teaching time to repetitive registration processes and grading calculations. Technology should save you time, not create overhead. That's why our ERP carries zero manual bloat.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
                  <a
                    href="mailto:ror28dilkush@gmail.com"
                    className="text-xs font-serif text-blue-300 hover:text-white transition-all underline shrink-0 font-mono"
                  >
                    Direct Email: ror28dilkush@gmail.com
                  </a>
                  <span className="hidden sm:inline text-blue-800">•</span>
                  <a
                    href="tel:+919588732288"
                    className="text-xs font-serif text-blue-300 hover:text-white transition-all underline shrink-0 font-mono"
                  >
                    Direct Tel: +91 9588732288
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-20 bg-blue-600 text-white relative overflow-hidden" id="cta-section">
        <div className="absolute inset-0 bg-blue-700 opacity-20 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight">
            Ready to Make Your School Smart?
          </h2>
          <p className="text-blue-100 text-base max-w-xl mx-auto leading-relaxed">
            Connect with us today for a completely personalized demonstration of our ERP database. Save your staff hours of manual register work.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => setActivePage("demo")}
              id="cta-book-free-demo"
              className="w-full sm:w-auto px-8 py-4 bg-white text-blue-600 rounded-xl text-base font-bold hover:bg-slate-100 shadow-xl transition-all cursor-pointer text-center"
            >
              Book Free Demo
            </button>
            <button
              onClick={() => setActivePage("contact")}
              id="cta-contact-us"
              className="w-full sm:w-auto px-8 py-4 bg-blue-700 text-white border border-blue-500 hover:bg-blue-800 rounded-xl text-base font-semibold transition-all cursor-pointer text-center"
            >
              Contact Us
            </button>
          </div>
          <p className="text-xs text-blue-200">
            ★ No credit cards required • Personalized virtual walkthrough • Interactive walkthrough
          </p>
        </div>
      </section>

    </div>
  );
}
