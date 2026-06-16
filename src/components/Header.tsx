import { useState, useEffect } from "react";
import { ActivePage } from "../types";
import { Menu, X, GraduationCap, ArrowRight } from "lucide-react";

interface HeaderProps {
  activePage: ActivePage;
  setActivePage: (page: ActivePage) => void;
}

export default function Header({ activePage, setActivePage }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: { id: ActivePage; label: string }[] = [
    { id: "home", label: "Home" },
    { id: "features", label: "Features" },
    { id: "about", label: "About Us" },
    { id: "contact", label: "Contact Us" },
  ];

  const handleNavClick = (pageId: ActivePage) => {
    setActivePage(pageId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-blue-50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-2 cursor-pointer focus:outline-none group text-left"
            id="header-logo-btn"
          >
            <div className="p-2 bg-blue-600 rounded-xl text-white group-hover:bg-blue-700 transition-colors shadow-sm shadow-blue-500/20">
              <GraduationCap className="h-6 w-6" id="header-logo-icon" />
            </div>
            <div>
              <span className="font-display font-bold text-lg leading-tight tracking-tight text-gray-950 block">
                RUHI
              </span>
              <span className="font-sans text-[11px] font-semibold text-blue-600 tracking-wider uppercase block -mt-0.5">
                School Manager
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                id={`nav-${item.id}`}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activePage === item.id
                    ? "text-blue-600 bg-blue-50/75 font-semibold"
                    : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                } cursor-pointer`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => handleNavClick("demo")}
              id="cta-demorequest"
              className="px-5 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-semibold hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/15 transition-all text-center flex items-center gap-2 cursor-pointer group"
            >
              Request Demo
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              id="mobile-menu-toggle"
              className="p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors cursor-pointer"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-blue-50 animate-fade-in py-4 px-4 shadow-lg">
          <div className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                id={`mobile-nav-${item.id}`}
                className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all ${
                  activePage === item.id
                    ? "text-blue-600 bg-blue-50 font-semibold"
                    : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                } cursor-pointer block`}
              >
                {item.label}
              </button>
            ))}
            <hr className="my-3 border-gray-100" />
            <button
              onClick={() => handleNavClick("demo")}
              id="mobile-cta-demo"
              className="w-full px-4 py-3 bg-blue-600 text-white rounded-xl text-base font-semibold hover:bg-blue-700 transition-colors text-center flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-blue-500/10"
            >
              Request Demo
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
