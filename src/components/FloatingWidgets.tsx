import { useState, useEffect } from "react";
import { MessageCircle, Phone, ArrowUp } from "lucide-react";

export default function FloatingWidgets() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const whatsappUrl = "https://wa.me/919588732288";
  const telUrl = "tel:+919588732288";

  return (
    <div className="fixed bottom-6 right-6 z-45 flex flex-col gap-3 items-end" id="floating-actions-container">
      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        className="flex items-center justify-center p-3.5 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white rounded-full shadow-lg hover:shadow-emerald-500/20 hover:-translate-y-1 active:translate-y-0 transition-all duration-200 group relative"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="absolute right-14 bg-emerald-600 text-white text-xs font-semibold px-2.5 py-1 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md">
          WhatsApp: Support Chat
        </span>
        <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400"></span>
        </span>
      </a>

      {/* Call Button */}
      <a
        href={telUrl}
        id="floating-call-btn"
        className="flex items-center justify-center p-3.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white rounded-full shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1 active:translate-y-0 transition-all duration-200 group relative"
        title="Call Hotline"
      >
        <Phone className="h-6 w-6" />
        <span className="absolute right-14 bg-slate-900 text-white text-xs font-semibold px-2.5 py-1 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md">
          Call: +91 9588732288
        </span>
      </a>

      {/* Back To Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          id="floating-scrolltop-btn"
          className="flex items-center justify-center p-3 bg-white hover:bg-slate-50 text-slate-800 rounded-full border border-slate-200 shadow-md hover:-translate-y-1 active:translate-y-0 transition-all duration-200 cursor-pointer group"
          title="Back to Top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}
