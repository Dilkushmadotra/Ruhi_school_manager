import { ActivePage } from "../types";
import { 
  Users, GraduationCap, CheckCircle, BookOpen, Award, 
  Calendar, BarChart4, Bell, Layers, Check, Sparkles 
} from "lucide-react";

interface FeaturesPageProps {
  setActivePage: (page: ActivePage) => void;
}

export default function FeaturesPage({ setActivePage }: FeaturesPageProps) {
  const sections = [
    {
      id: "student",
      title: "Student Management System",
      icon: <Users className="h-8 w-8 text-blue-600" />,
      tagline: "Unify complete digital records securely",
      desc: "Bid farewell to manual register files. Our robust module tracks pupil profiles from admission details to terminal archives, health sheets, and visual metrics.",
      points: [
        "Unique Admission Register generation matching board guidelines",
        "Guardian phone numbers, addresses, and emergency contacts linked directly",
        "Automated student status toggling (Active, Discharged, Graduated)",
        "Search profiles instantly by admission ID, phone number, name or class",
        "Store historical grades, discipline records and tuition fee statuses safely"
      ],
      color: "bg-blue-50 border-blue-100",
      accent: "blue"
    },
    {
      id: "teacher",
      title: "Teacher Management Board",
      icon: <GraduationCap className="h-8 w-8 text-indigo-600" />,
      tagline: "Empower school educators on daily schedules",
      desc: "Simplify teacher workloads, assigning classrooms and subjects under 1 minute. Principals can monitor schedules, leaves, and subject allocations transparently.",
      points: [
        "Assign and monitor class teacher duties clearly across branches",
        "Digitize payroll metadata and professional educational qualifications",
        "Seamlessly adjust teacher-subject mapping rosters during leaves",
        "Direct interface for teachers to publish homework and input grades",
        "Secure profile logins with custom credential controls"
      ],
      color: "bg-indigo-50 border-indigo-100",
      accent: "indigo"
    },
    {
      id: "attendance",
      title: "Smart Attendance System",
      icon: <CheckCircle className="h-8 w-8 text-emerald-600" />,
      tagline: "Take classroom lists inside 30 seconds",
      desc: "Teachers can easily capture class attendance on any generic mobile screen. Automated warnings dispatch to absolute absent profiles immediately.",
      points: [
        "Interactive mobile roll call lists matching classroom seating",
        "Instantly dispatch auto-warning alerts to parent portals or emails",
        "Review daily, weekly, monthly and yearly school attendance scores",
        "Print professional term attendance summaries for board reviews",
        "Track individual student attendance rates on custom graphs"
      ],
      color: "bg-emerald-50 border-emerald-100",
      accent: "emerald"
    },
    {
      id: "homework",
      title: "Homework Management Module",
      icon: <BookOpen className="h-8 w-8 text-violet-600" />,
      tagline: "Bridge study from classroom directly to home",
      desc: "Create learning continuity effortlessly. Teachers publish daily assignments with attachments. Pupils and parents view chores straight from their home page.",
      points: [
        "Publish homework with rich file attachments, images and guidelines",
        "Categorize assignments by subject, chapter, class and dead-line date",
        "Instant delivery notification to linked pupil dashboards",
        "Enable parents to monitor home homework progress easily",
        "Saves money otherwise spent writing paper notebooks daily"
      ],
      color: "bg-violet-50 border-violet-100",
      accent: "violet"
    },
    {
      id: "exams",
      title: "Exam & Marks Hub",
      icon: <Award className="h-8 w-8 text-amber-600" />,
      tagline: "Ditch manual grade average calculation books",
      desc: "Enter raw test scores in a central grid. Ruhi automatically calculates final averages, rank standing, and exports beautiful report sheets instantly.",
      points: [
        "Create quarterly, mid-term, annual and custom subject assessments",
        "Instant grade average formulas calculated without math margin errors",
        "Print-ready report card templates with customized grading keys",
        "Track toppers and subject scores instantly inside analytics tables",
        "Private grading dashboards ensuring marks integrity"
      ],
      color: "bg-amber-50 border-amber-100",
      accent: "amber"
    },
    {
      id: "timetable",
      title: "Timetable Management Engine",
      icon: <Calendar className="h-8 w-8 text-rose-600" />,
      tagline: "Generate conflict-free weekly timetables",
      desc: "Say goodbye to complex timetable puzzles. Allocate slots for class subjects and teachers, and let our engine flag overlaps or double bookings immediately.",
      points: [
        "Design visual class timetables in a beautiful spreadsheet format",
        "Automatic validation prevents teacher double-bookings instantly",
        "Track laboratory and athletic field slots fairly without overlaps",
        "Export printable timetables for classroom notice walls",
        "Enable quick schedule updates in case of emergency staff leaves"
      ],
      color: "bg-rose-50 border-rose-100",
      accent: "rose"
    },
    {
      id: "reports",
      title: "Reports & Analytics Console",
      icon: <BarChart4 className="h-8 w-8 text-teal-600" />,
      tagline: "Actionable intelligence on school rosters",
      desc: "Get deep administrative insights with custom dashboards mapping school parameters, attendance metrics, and tuition payment tracking.",
      points: [
        "One-click reports showing male vs female student counts per grade",
        "View historical tuition collection, payments, and dues pending",
        "Verify school attendance percentage charts for state compliance",
        "Generate student registry files corresponding to local government formats",
        "Export and download CSV records securely"
      ],
      color: "bg-teal-50 border-teal-100",
      accent: "teal"
    },
    {
      id: "notifications",
      title: "Board Notifications & Broadcasts",
      icon: <Bell className="h-8 w-8 text-amber-500" />,
      tagline: "Keep parents informed inside seconds",
      desc: "No more paper circulars. Push notices directly to parents regarding fee milestones, administrative updates, parents-teachers events or weather warnings.",
      points: [
        "Easily draft and dispatch urgent school notices digitally",
        "Broadcast alerts to specific grades, branches, or full school bases",
        "Real-time update stream on pupil dashboards",
        "Eco-friendly notice delivery saving papers and printing cost",
        "Instant parent awareness of unexpected closures or activities"
      ],
      color: "bg-amber-50/60 border-amber-100/80",
      accent: "amber"
    },
    {
      id: "multischool",
      title: "Multi-School Support ERP",
      icon: <Layers className="h-8 w-8 text-sky-600" />,
      tagline: "One centralized hub for all campus networks",
      desc: "Perfect for education society managers running multiple branches. Monitor across properties and administrative structures from one account.",
      points: [
        "Track multiple school branches with a single set of logins",
        "Compare admissions, grades, fee statistics across different properties",
        "Standardize policies, timetables, and notification standards easily",
        "Central management control while delegating work to local principals",
        "Cost-effective license coverage scaling with school growth"
      ],
      color: "bg-sky-50 border-sky-100",
      accent: "sky"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-32 pb-24" id="features-page-root">
      
      {/* HEADER HERO */}
      <section className="relative overflow-hidden py-16 bg-gradient-to-b from-blue-50/50 to-slate-50 border-b border-slate-200/40">
        <div className="absolute inset-x-0 top-0 bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.7))] h-full" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold uppercase tracking-wider shadow-sm border border-blue-200">
            <Sparkles className="h-3.5 w-3.5 text-blue-600" />
            Complete Feature Matrix
          </div>
          <h1 className="font-display font-black text-4xl sm:text-5xl text-slate-950 tracking-tight">
            POWERFUL SCHOOL ERP. NO BLOAT.
          </h1>
          <p className="text-slate-600 text-base max-w-2xl mx-auto leading-relaxed">
            Every screen is engineered with a simple mission: remove administrative friction so you can focus 100% on educating students.
          </p>
        </div>
      </section>

      {/* DETAILED CARDS IN A BEAUTIFUL STAGGERED LIST */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {sections.map((section, idx) => (
            <div 
              key={section.id}
              id={`feature-card-${section.id}`}
              className="bg-white rounded-3xl border border-slate-150 shadow-sm overflow-hidden grid grid-cols-1 md:grid-cols-12 hover:shadow-lg transition-all"
            >
              {/* Sidebar color accent banner */}
              <div className={`md:col-span-4 p-8 flex flex-col justify-between ${section.color} border-r border-slate-100`}>
                <div className="space-y-4">
                  <div className="p-3 bg-white rounded-2xl shadow-sm inline-block">
                    {section.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 block">
                      Feature Spotlight
                    </span>
                    <h3 className="font-display font-extrabold text-slate-950 text-xl tracking-tight leading-snug mt-1">
                      {section.title}
                    </h3>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-slate-200/50 hidden md:block">
                  <p className="text-xs text-slate-500 italic">
                    "{section.tagline}"
                  </p>
                </div>
              </div>

              {/* Points grid */}
              <div className="md:col-span-8 p-8 md:p-10 space-y-6">
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {section.desc}
                </p>
                
                <div className="space-y-3">
                  <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                    Core Capabilities:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700 text-sm">
                    {section.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5">
                        <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-tight">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* CTA FOOTER */}
      <section className="py-12 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="font-display font-bold text-2xl text-slate-950">
            Want to see these modules in action with live mock data?
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto">
            Book a 15-minute quick virtual walkthrough. We will demonstrate students dashboards, examination hubs and fee collection settings live.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <button
              onClick={() => setActivePage("demo")}
              id="feature-book-demo-btn"
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/10 cursor-pointer"
            >
              Book Free Demo Roster
            </button>
            <button
              onClick={() => setActivePage("contact")}
              id="feature-contact-btn"
              className="px-6 py-3 bg-white text-slate-800 border border-slate-200 font-semibold rounded-xl hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Contact Developer
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
