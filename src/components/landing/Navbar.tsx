import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logoMark from "@/assets/brand/ring-mark-dark.svg";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Compare", href: "#compare" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container max-w-6xl mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="flex items-start gap-2 text-xl font-bold text-foreground tracking-tight">
          <img src={logoMark} alt="The Exam Path logo" className="h-7 w-7 rounded-md mt-0.5" />
          <span className="flex flex-col leading-tight">
            <span>The Exam<span className="text-primary"> Path</span></span>
            <span className="text-[10px] font-normal italic text-muted-foreground">Formerly TheCounselorExam.com</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Link
            to="/login"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Log In
          </Link>
          <Link
            to="/signup"
            className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            Sign Up
          </Link>
          <Link
            to="/free-diagnostic-case"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Take Free Case
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border px-4 pb-4 animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Link
            to="/free-diagnostic-case"
            onClick={() => setMobileOpen(false)}
            className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground"
          >
            Take the Free Diagnostic Case
          </Link>
          <Link
            to="/signup"
            onClick={() => setMobileOpen(false)}
            className="mt-3 inline-flex w-full items-center justify-center rounded-lg border border-primary/30 px-4 py-2.5 text-sm font-medium text-primary"
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
