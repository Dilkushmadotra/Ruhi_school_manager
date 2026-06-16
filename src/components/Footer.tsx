import { GraduationCap, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { ActivePage } from "../types";

interface FooterProps {
  setActivePage: (page: ActivePage) => void;
}

export default function Footer({ setActivePage }: FooterProps) {
  const handleNavClick = (pageId: ActivePage) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900 pt-16 pb-8" id="footer-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <button
              onClick={() => handleNavClick("home")}
              className="flex items-center gap-2 cursor-pointer text-left focus:outline-none group"
              id="footer-logo-btn"
            >
              <div className="p-2 bg-blue-600 rounded-lg text-white group-hover:bg-blue-500 transition-colors">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <span className="font-display font-bold text-white text-base leading-tight tracking-tight block">
                  RUHI
                </span>
                <span className="font-sans text-[10px] font-semibold text-blue-400 tracking-wider uppercase block">
                  School Manager
                </span>
              </div>
            </button>
            <p className="text-slate-400 text-sm max-w-sm mt-3 leading-relaxed">
              Ruhi School Manager is an all-in-one modern ERP platform built to simplify, automate, and digitize school administrative processes, enhancing education delivery.
            </p>
            <div className="pt-2">
              <span className="text-xs bg-slate-900 border border-slate-800 text-slate-400 font-mono px-2.5 py-1 rounded-full inline-block">
                ★ Designed by Dilkush Ror
              </span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="font-display text-white text-sm font-semibold tracking-wider uppercase">
              Quick Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { id: "home", label: "Home Base" },
                { id: "features", label: "ERP Features" },
                { id: "about", label: "About Our Mission" },
                { id: "contact", label: "Get In Touch" },
                { id: "demo", label: "Request Free Demo" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id as ActivePage)}
                    className="hover:text-blue-400 transition-colors cursor-pointer text-slate-400 text-left hover:underline"
                    id={`footer-link-${link.id}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="font-display text-white text-sm font-semibold tracking-wider uppercase">
              Developer & Support
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5 text-slate-400">
                <Mail className="h-4 w-4 text-blue-500 mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-slate-500 uppercase font-mono tracking-wider">Email Inquiry</p>
                  <a
                    href="mailto:ror28dilkush@gmail.com"
                    className="hover:text-white transition-colors hover:underline text-slate-300 font-medium"
                  >
                    ror28dilkush@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5 text-slate-400">
                <Phone className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-slate-500 uppercase font-mono tracking-wider">Hotline support</p>
                  <a
                    href="tel:+919588732288"
                    className="hover:text-white transition-colors hover:underline text-slate-300 font-medium font-mono"
                  >
                    +91 9588732288
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5 text-slate-400">
                <MessageCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-slate-500 uppercase font-mono tracking-wider">WhatsApp instant chat</p>
                  <a
                    href="https://wa.me/919588732288"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors hover:underline text-slate-300 font-medium font-mono"
                  >
                    +91 9588732288
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-slate-900 my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between text-slate-500 text-xs gap-4">
          <div>
            <p>© 2026 Ruhi School Manager. All Rights Reserved.</p>
            <p className="mt-1">
              Developed by <span className="text-slate-400 font-semibold font-mono">Dilkush Ror</span>.
            </p>
          </div>
          <div className="flex gap-4">
            <span className="text-slate-600">Enterprise Ready</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-600 font-mono">V1.0.2 Stable</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
