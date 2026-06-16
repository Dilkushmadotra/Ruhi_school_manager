/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingWidgets from "./components/FloatingWidgets";
import Home from "./pages/Home";
import FeaturesPage from "./pages/Features";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import RequestDemoPage from "./pages/RequestDemo";
import { ActivePage } from "./types";
import { GraduationCap, Loader2 } from "lucide-react";

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>("home");
  const [isInitializing, setIsInitializing] = useState(true);

  // Small delay for luxury startup feel
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitializing(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Sync scroll to top on page navigation changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  // Determine which page component to display
  const renderPage = () => {
    switch (activePage) {
      case "home":
        return <Home setActivePage={setActivePage} />;
      case "features":
        return <FeaturesPage setActivePage={setActivePage} />;
      case "about":
        return <AboutPage setActivePage={setActivePage} />;
      case "contact":
        return <ContactPage />;
      case "demo":
        return <RequestDemoPage />;
      default:
        return <Home setActivePage={setActivePage} />;
    }
  };

  if (isInitializing) {
    return (
      <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
        <div className="flex flex-col items-center gap-4 text-center animate-pulse">
          <div className="p-3 bg-blue-600 rounded-2xl text-white shadow-lg shadow-blue-500/25">
            <GraduationCap className="h-10 w-10 animate-bounce" />
          </div>
          <div>
            <h2 className="font-display font-black text-2xl tracking-tight text-slate-950">
              RUHI
            </h2>
            <p className="font-sans text-[11px] font-bold text-blue-600 tracking-widest uppercase -mt-0.5">
              School Manager
            </p>
          </div>
          <div className="flex items-center gap-1.5 text-slate-400 text-xs font-medium font-sans mt-2">
            <Loader2 className="h-3.5 w-3.5 animate-spin text-blue-500" />
            Connecting digital registers...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans selection:bg-blue-100 selection:text-blue-800 antialiased">
      {/* Header component */}
      <Header activePage={activePage} setActivePage={setActivePage} />

      {/* Main content viewport with fade-in animation */}
      <main className="flex-grow animate-fade-in">
        {renderPage()}
      </main>

      {/* Footer component */}
      <Footer setActivePage={setActivePage} />

      {/* Floating widgets collection */}
      <FloatingWidgets />
    </div>
  );
}

