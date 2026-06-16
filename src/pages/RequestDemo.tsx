import React, { useState, useEffect } from "react";
import { Calendar, Users, MapPin, Mail, Phone, Clock, AlertCircle, CheckCircle, ArrowRight, Loader2, RefreshCw } from "lucide-react";

export default function RequestDemoPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    schoolName: "",
    phone: "",
    email: "",
    studentCount: "",
    city: "",
    preferredDate: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ success?: boolean; message?: string } | null>(null);
  
  // Real-time verification preview list
  const [demoSubmissions, setDemoSubmissions] = useState<any[]>([]);
  const [fetchingDemos, setFetchingDemos] = useState(false);

  const fetchLatestDemos = async () => {
    try {
      setFetchingDemos(true);
      const res = await fetch("/api/submissions");
      if (res.ok) {
        const data = await res.json();
        setDemoSubmissions(data.demos || []);
      }
    } catch (e) {
      console.warn("Failed to retrieve demo bookings preview", e);
    } finally {
      setFetchingDemos(false);
    }
  };

  useEffect(() => {
    fetchLatestDemos();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    // Validate inputs
    if (
      !formData.fullName || 
      !formData.schoolName || 
      !formData.phone || 
      !formData.email || 
      !formData.studentCount || 
      !formData.city || 
      !formData.preferredDate
    ) {
      setStatus({ success: false, message: "Please fill out all required fields before requesting demo." });
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/demo-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus({ success: true, message: "Thank you! We will contact you shortly." });
        setFormData({
          fullName: "",
          schoolName: "",
          phone: "",
          email: "",
          studentCount: "",
          city: "",
          preferredDate: "",
          message: ""
        });
        // Reload entries
        fetchLatestDemos();
      } else {
        setStatus({ success: false, message: data.error || "Failed to submit demo request." });
      }
    } catch {
      setStatus({ success: false, message: "Server connection failed. Please verify network." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen pt-32 pb-24" id="request-demo-page-root">
      
      {/* PAGE HEADER */}
      <section className="relative overflow-hidden py-16 bg-gradient-to-b from-blue-50/50 to-slate-50 border-b border-slate-200/40 text-center space-y-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold uppercase tracking-wider shadow-sm border border-blue-200">
            <Calendar className="h-3.5 w-3.5 text-blue-600" />
            Book Free Demonstration
          </span>
          <h1 className="font-display font-black text-4xl sm:text-5xl text-slate-950 tracking-tight">
            REQUEST A FREE PERSONAL DEMO
          </h1>
          <p className="text-slate-600 text-base max-w-2xl mx-auto leading-relaxed">
            Specify a preferred calendar date, select your student capacity brackets, and our coordinator will prepare a tailored sandboxed dashboard for your team.
          </p>
        </div>
      </section>

      {/* CORE WORKFORM ROW */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left explanation notes column */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="font-display font-extrabold text-2xl text-slate-900 tracking-tight leading-snug">
                  What to expect in your 1-on-1 walkthrough
                </h2>
                <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                  We configure real environments loading features tailored exactly to answer your campus and administrative size challenges.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="p-3 bg-blue-100 text-blue-700 rounded-2xl shrink-0 h-12 w-12 flex items-center justify-center">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-slate-900 text-base">Custom Capacity Modeling</h4>
                    <p className="text-slate-650 text-sm mt-1 leading-normal">
                      We prepare test rosters scaled exactly to reflect your school range (e.g. 500 or 5,000 students), ensuring correct speed test outcomes.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-3 bg-indigo-100 text-indigo-700 rounded-2xl shrink-0 h-12 w-12 flex items-center justify-center">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-slate-900 text-base font-sans">Conflict-Free Timetable Setup</h4>
                    <p className="text-slate-650 text-sm mt-1 leading-normal">
                      Watch how our scheduling algorithms resolve multi-teacher clashes instantly. Bring your complex class calendars for live proof.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-3 bg-emerald-100 text-emerald-700 rounded-2xl shrink-0 h-12 w-12 flex items-center justify-center">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-slate-900 text-base">Instant Multi-Branch Control</h4>
                    <p className="text-slate-650 text-sm mt-1 leading-normal">
                      We configure a dual compound campus simulation showing how school directors track separate registries without swapping logins.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-blue-50 border border-blue-100 rounded-2xl space-y-2">
                <p className="text-xs text-blue-800 font-bold uppercase tracking-wider font-mono">⚡ Guaranteed support Response</p>
                <p className="text-slate-650 text-xs leading-relaxed">
                  We reply inside 2 hours of submission. Our coordinator will match your availability and setup a Google Meet link.
                </p>
              </div>
            </div>

            {/* Right booking Form column */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 rounded-3xl border border-slate-150 shadow-sm space-y-6">
                <div>
                  <h3 className="font-display font-extrabold text-xl text-slate-950">
                    Book Free ERP Walkthrough
                  </h3>
                  <p className="text-slate-500 text-xs mt-1">
                    No payment credit details required. Safe & private cloud trial generation.
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

                <form onSubmit={handleSubmit} className="space-y-4" id="request-demo-form">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 tracking-wide block">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        placeholder="Dilkush Ror"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 tracking-wide block">
                        School Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="schoolName"
                        value={formData.schoolName}
                        onChange={handleChange}
                        required
                        placeholder="Ruhi Public School"
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 tracking-wide block">
                        Number of Students <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="studentCount"
                        value={formData.studentCount}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                      >
                        <option value="">-- Select student range --</option>
                        <option value="150">Fewer than 200 Students</option>
                        <option value="350">200 to 500 Students</option>
                        <option value="750">500 to 1,000 Students</option>
                        <option value="1500">More than 1,000 Students</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 tracking-wide block">
                        City / Town Location <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        placeholder="Jaipur, Rajasthan"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 tracking-wide block">
                      Preferred Demo Date <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-mono"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 tracking-wide block">
                      Additional Message/Requirements (Optional)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="e.g. Need Hindi translation options, customized fee receipts layout, etc."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    id="submit-demo-form-btn"
                    className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl text-sm hover:bg-blue-700 disabled:bg-blue-400 active:bg-blue-800 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-blue-500/15"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Generating demo environment...
                      </>
                    ) : (
                      <>
                        Book My Consultation Walkthrough
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* DYNAMIC REGISTRY PREVIEW FOR PERSISTENT DEMOS */}
      <section className="py-8 bg-slate-100 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-4">
            <div className="flex justify-between items-center flex-wrap gap-2">
              <div>
                <h4 className="font-display font-bold text-slate-950 text-sm flex items-center gap-2">
                  <span>📅 Live Demo Board Booking Ledger</span>
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded font-bold">
                    Real-time Saved
                  </span>
                </h4>
                <p className="text-slate-500 text-xs mt-0.5">
                  Confirm your interactive demo slot saved securely in our database. Loaded in chronological order.
                </p>
              </div>
              <button
                onClick={fetchLatestDemos}
                disabled={fetchingDemos}
                id="refresh-demos-btn"
                className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg text-slate-700 text-xs font-semibold transition-all cursor-pointer"
              >
                <RefreshCw className={`h-3 w-3 ${fetchingDemos ? "animate-spin" : ""}`} />
                Refresh Registry
              </button>
            </div>

            {fetchingDemos ? (
              <div className="text-center py-6 text-slate-400 text-xs flex justify-center items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin text-blue-500" />
                Retrieving registry slots...
              </div>
            ) : demoSubmissions.length === 0 ? (
              <div className="text-center py-8 text-slate-400 text-xs border border-dashed border-slate-200 rounded-xl">
                No personalized demo sessions recorded yet. Express your slot above to see your booking slot rendered instantly!
              </div>
            ) : (
              <div className="max-h-[250px] overflow-y-auto border border-slate-100 rounded-xl divide-y divide-slate-100">
                {demoSubmissions.map((slot: any, idx: number) => (
                  <div key={slot._id || slot.id || idx} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <strong className="text-slate-800 text-sm">{slot.fullName}</strong>
                        <span className="text-[10px] bg-blue-50 text-blue-600 px-2.1 py-0.1 rounded font-semibold">
                          {slot.schoolName}
                        </span>
                        <span className="text-[10px] bg-indigo-50 text-indigo-700 px-2 py-0.2 rounded font-mono font-medium">
                          👥 {slot.studentCount} Students
                        </span>
                        <span className="text-[10px] bg-amber-50 text-amber-700 px-2/ py-0/2 rounded font-medium">
                          📍 {slot.city}
                        </span>
                      </div>
                      <p className="text-slate-500">{slot.message || "No custom customization requested."}</p>
                    </div>
                    <div className="text-right whitespace-nowrap shrink-0 text-[10px] text-slate-400">
                      <p className="font-mono text-indigo-600 font-bold">📅 Target: {slot.preferredDate}</p>
                      <p className="font-mono mt-0.5">{slot.phone} • {slot.email}</p>
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
