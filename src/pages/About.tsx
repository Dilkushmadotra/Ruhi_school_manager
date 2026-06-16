import { ActivePage } from "../types";
import { GraduationCap, Heart, Milestone, Eye, Award, CheckCircle, Sparkles } from "lucide-react";

interface AboutProps {
  setActivePage: (page: ActivePage) => void;
}

export default function AboutPage({ setActivePage }: AboutProps) {
  return (
    <div className="bg-slate-50 min-h-screen pt-32 pb-24" id="about-page-root">
      
      {/* PAGE HEADER */}
      <section className="relative overflow-hidden py-16 bg-gradient-to-b from-blue-50/50 to-slate-50 border-b border-slate-200/40">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <div className="inline-flex items-center gap-1 bg-blue-100 text-blue-700 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider shadow-sm border border-blue-200">
            <Sparkles className="h-3.5 w-3.5 text-blue-600" />
            Our Backstory
          </div>
          <h1 className="font-display font-black text-4xl sm:text-5xl text-slate-950 tracking-tight">
            ABOUT RUHI SCHOOL MANAGER
          </h1>
          <p className="text-slate-600 text-base max-w-2xl mx-auto leading-relaxed">
            Eliminating administrative overheads so local schools and educators can concentrate on the pure mission of teaching.
          </p>
        </div>
      </section>

      {/* CORE STATEMENTS (MISSION & VISION) */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mission Card */}
            <div className="bg-white p-8 rounded-3xl border border-slate-150 shadow-sm space-y-4 hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-xl" />
              <div className="p-3 bg-blue-50 text-blue-600 rounded-xl inline-block">
                <Milestone className="h-6 w-6" />
              </div>
              <h2 className="font-display font-bold text-slate-950 text-xl tracking-tight">
                Our Mission
              </h2>
              <p className="text-blue-700 font-semibold text-sm font-sans tracking-wide uppercase">
                To simplify school management through modern technology.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                By designing intuitive databases, speedy mobile rosters, and automatic report calculations, we aim to save school administrators valuable time and resources.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-white p-8 rounded-3xl border border-slate-150 shadow-sm space-y-4 hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-xl" />
              <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl inline-block">
                <Eye className="h-6 w-6" />
              </div>
              <h2 className="font-display font-bold text-slate-950 text-xl tracking-tight">
                Our Vision
              </h2>
              <p className="text-emerald-700 font-semibold text-sm font-sans tracking-wide uppercase">
                To help schools become smarter and more organized.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                We envision a future where 100% of schools, regardless of size or budget, transition away from tedious paper archives into secure cloud ecosystems.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* THE CREATOR STORY */}
      <section className="py-12 bg-white border-y border-slate-200/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Avatar Side */}
          <div className="col-span-1 md:col-span-4 flex flex-col items-center">
            <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-slate-100 border-4 border-blue-500/20 shadow-inner flex items-center justify-center font-display font-extrabold text-blue-600 text-4xl select-none">
              DR
            </div>
            <div className="mt-4 text-center">
              <h3 className="font-display font-bold text-slate-900 text-lg leading-tight">Dilkush Ror</h3>
              <p className="text-xs text-blue-600 font-mono tracking-wider uppercase mt-1">Founder & Developer</p>
            </div>
          </div>

          {/* Text Story Side */}
          <div className="col-span-1 md:col-span-8 space-y-5 text-center md:text-left">
            <h2 className="font-display font-bold text-slate-950 text-2xl tracking-tight">
              A Personal Journey to Digitalize Education
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Ruhi School Manager was conceived by software engineer <strong>Dilkush Ror</strong> after researching local school operations. Dilkush identified that many institutions lost countless hours manually recording attendance, drafting spreadsheets, and handwriting progress reports.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              To solve this, Dilkush built <strong>Ruhi School Manager</strong> — a lightweight, lightning-fast school ERP system that charges no premium pricing on local schools and scales beautifully on parent smartphones.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-xs font-mono text-slate-500 pt-2 border-t border-slate-100">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-emerald-500" /> Founded 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Award className="h-4 w-4 text-blue-500" /> Verified Support
              </span>
              <span className="flex items-center gap-1.5">
                <Heart className="h-4 w-4 text-rose-500" /> Loved by local teachers
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* CORE VALUE PILLARS */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="font-display font-bold text-slate-950 text-2xl tracking-tight">
              Our Core Design Standards
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              We guide every module we code based on three simple, strict philosophies.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6" id="standards-bento-grid">
            <div className="sm:col-span-2 bg-gradient-to-br from-white to-blue-50/40 p-8 rounded-3xl border border-slate-200/80 space-y-3 relative overflow-hidden group hover:shadow-lg transition-all">
              <div className="absolute -right-6 -top-6 w-16 h-16 bg-blue-100/50 rounded-full blur-xl group-hover:scale-125 transition-transform" />
              <span className="text-3xl font-black font-display text-blue-600 block">01</span>
              <h4 className="font-bold text-slate-950 text-base uppercase font-display tracking-wide block">Extreme Simplicity</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                If software is complex, users reject it. We make our panels clean, intuitive and fully translation-ready so teachers can adapt without manuals.
              </p>
            </div>
            
            <div className="sm:col-span-1 bg-white p-8 rounded-3xl border border-slate-200/80 space-y-3 relative overflow-hidden group hover:shadow-lg transition-all">
              <div className="absolute -right-6 -top-6 w-16 h-16 bg-indigo-100/30 rounded-full blur-xl group-hover:scale-125 transition-transform" />
              <span className="text-3xl font-black font-display text-indigo-500 block">02</span>
              <h4 className="font-bold text-slate-950 text-sm uppercase font-display tracking-wide block">Economic Access</h4>
              <p className="text-slate-500 text-xs leading-relaxed">
                Empowering tier-2 and rural schools, our pricing plans match school budgets without mandatory onboarding fees.
              </p>
            </div>

            <div className="sm:col-span-1 bg-white p-8 rounded-3xl border border-slate-200/80 space-y-3 relative overflow-hidden group hover:shadow-lg transition-all">
              <div className="absolute -right-6 -top-6 w-16 h-16 bg-emerald-100/30 rounded-full blur-xl group-hover:scale-125 transition-transform" />
              <span className="text-3xl font-black font-display text-emerald-500 block">03</span>
              <h4 className="font-bold text-slate-950 text-sm uppercase font-display tracking-wide block">High Availability</h4>
              <p className="text-slate-500 text-xs leading-relaxed">
                Our ERP operates flawlessly on slower 3G cellular internet, ensuring rural teachers input data without any database timeouts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="font-display font-bold text-xl text-slate-950">
            Let's modernise your school registers today.
          </h2>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setActivePage("demo")}
              id="about-demo-route-cta"
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-md shadow-blue-500/10 cursor-pointer"
            >
              Request Free Mock Roster
            </button>
            <button
              onClick={() => setActivePage("contact")}
              id="about-contact-route-cta"
              className="px-6 py-3 bg-slate-50 text-slate-800 border border-slate-200 font-semibold rounded-xl hover:bg-slate-100 transition-all cursor-pointer"
            >
              Contact Developer
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
