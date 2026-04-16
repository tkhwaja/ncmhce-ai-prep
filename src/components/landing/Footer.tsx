const Footer = () => (
  <footer className="border-t border-border py-12 px-4">
    <div className="container max-w-6xl mx-auto">
      <div className="grid md:grid-cols-3 gap-8 items-start">
        <div>
          <p className="text-lg font-bold text-foreground tracking-tight">
            TheCounselorExam<span className="text-primary">.com</span>
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            AI-powered NCMHCE exam prep, built for clinical reasoning.
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          <a href="#compare" className="hover:text-foreground transition-colors">Compare</a>
          <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
          <a href="#waitlist" className="hover:text-foreground transition-colors">Join Waitlist</a>
        </div>

        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
          <a href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</a>
          <a href="/terms" className="hover:text-foreground transition-colors">Terms of Service</a>
          <a href="mailto:support@thecounselorexam.com" className="hover:text-foreground transition-colors">Contact</a>
        </div>
      </div>

      <div className="border-t border-border mt-8 pt-6 text-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} TheCounselorExam.com. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
