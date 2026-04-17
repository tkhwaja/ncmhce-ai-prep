import TceIcon, { tceIconNames } from "@/components/icons/TceIcon";

const sizes = [16, 20, 24, 32];

const IconsPreview = () => {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        <header>
          <h1 className="text-3xl font-bold mb-2">TCE Icon Set — Phase 1</h1>
          <p className="text-muted-foreground">
            12 icons · 24×24 grid · 1.75px stroke · rounded caps · currentColor
          </p>
        </header>

        {(["dark", "light"] as const).map((theme) => (
          <section key={theme}>
            <h2 className="text-xl font-semibold mb-4 capitalize">{theme} background</h2>
            <div
              className={`rounded-xl border border-border p-6 ${
                theme === "light" ? "bg-white text-slate-900" : "bg-card"
              }`}
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {tceIconNames.map((name) => (
                  <div
                    key={name}
                    className={`flex flex-col items-center gap-3 p-4 rounded-lg border ${
                      theme === "light" ? "border-slate-200" : "border-border"
                    }`}
                  >
                    <div className="flex items-end gap-3 h-10">
                      {sizes.map((s) => (
                        <TceIcon key={s} name={name} size={s} className="text-primary" />
                      ))}
                    </div>
                    <code className="text-xs opacity-70">{name}</code>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        <section>
          <h2 className="text-xl font-semibold mb-4">Color inheritance test</h2>
          <div className="flex flex-wrap gap-6 p-6 rounded-xl border border-border bg-card">
            <TceIcon name="ai-spark" size={32} className="text-primary" />
            <TceIcon name="ai-spark" size={32} className="text-secondary" />
            <TceIcon name="ai-spark" size={32} className="text-accent" />
            <TceIcon name="ai-spark" size={32} className="text-muted-foreground" />
            <TceIcon name="check" size={32} className="text-secondary" />
            <TceIcon name="x-fail" size={32} className="text-destructive" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default IconsPreview;
