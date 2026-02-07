import { useMemo, useState } from "react";
import { clsx } from "clsx";

const sampleHighlights = [
  {
    label: "AI-like phrasing",
    text: "This study unequivocally demonstrates that the findings are unprecedented",
  },
  {
    label: "Potential source overlap",
    text: "The methodology aligns with previously published frameworks in the field",
  },
];

const rewriteVersions = [
  {
    title: "Simple academic rewrite",
    description: "Clarifies structure and simplifies wording while keeping citations intact.",
  },
  {
    title: "Advanced human-like rewrite",
    description: "Varies sentence cadence with nuanced phrasing and improved transitions.",
  },
  {
    title: "Formal research style rewrite",
    description: "Maintains formal tone with discipline-specific vocabulary and rigor.",
  },
];

const history = [
  { id: "RC-2048", name: "Neural Networks Draft", date: "Apr 18, 2025" },
  { id: "RC-2049", name: "Quantum Systems Review", date: "Apr 14, 2025" },
  { id: "RC-2050", name: "Behavioral Study Notes", date: "Apr 10, 2025" },
];

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [progress, setProgress] = useState(62);

  const themeClass = useMemo(() => (isDark ? "dark" : ""), [isDark]);

  return (
    <div className={clsx(themeClass)}>
      <div className="min-h-screen bg-night-900 text-slate-100 dark:bg-night-900 dark:text-slate-100">
        <header className="border-b border-white/10 bg-night-800/80">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-azure-500">Research Checker</p>
              <h1 className="text-2xl font-semibold">Advanced AI Research Paper Analyzer</h1>
              <p className="text-sm text-slate-300">
                Detect AI content, plagiarism, and generate rewrites with academic integrity.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button
                className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-200"
                type="button"
              >
                Login
              </button>
              <button
                className="rounded-full bg-azure-500 px-4 py-2 text-sm font-semibold text-night-900 shadow-glow"
                type="button"
              >
                Sign up
              </button>
              <button
                className="rounded-full border border-white/10 px-3 py-2 text-xs text-slate-300"
                type="button"
                onClick={() => setIsDark((value) => !value)}
              >
                {isDark ? "Light mode" : "Dark mode"}
              </button>
            </div>
          </div>
        </header>

        <main className="mx-auto grid max-w-6xl gap-8 px-6 py-10 lg:grid-cols-[1.05fr_0.95fr]">
          <section className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-night-800 p-6 shadow-lg">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-lg font-semibold">Upload your research paper</h2>
                  <p className="text-sm text-slate-300">
                    PDF, DOCX, or TXT. Drag and drop files or browse to upload.
                  </p>
                </div>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-300">
                  Secure upload
                </span>
              </div>

              <div className="mt-6 rounded-2xl border border-dashed border-azure-500/50 bg-night-700/50 px-6 py-10 text-center">
                <p className="text-sm text-slate-200">Drop your files here</p>
                <p className="mt-2 text-xs text-slate-400">or</p>
                <button
                  className="mt-4 rounded-full bg-azure-500 px-4 py-2 text-sm font-semibold text-night-900"
                  type="button"
                >
                  Browse files
                </button>
                <p className="mt-3 text-xs text-slate-400">
                  Automatic deletion after processing · Cloud storage ready
                </p>
              </div>

              <div className="mt-6">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Scanning progress</span>
                  <span>{progress}%</span>
                </div>
                <div className="mt-2 h-2 w-full rounded-full bg-white/10">
                  <div
                    className="h-2 rounded-full bg-mint-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <div className="mt-3 flex gap-2">
                  {[40, 62, 88, 100].map((value) => (
                    <button
                      key={value}
                      className={clsx(
                        "rounded-full px-3 py-1 text-xs",
                        progress === value
                          ? "bg-mint-500 text-night-900"
                          : "border border-white/10 text-slate-300"
                      )}
                      type="button"
                      onClick={() => setProgress(value)}
                    >
                      {value === 100 ? "Complete" : `${value}%`}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
              {[
                {
                  title: "AI detection",
                  value: "18%",
                  detail: "Low AI probability with minor phrasing flags.",
                },
                {
                  title: "Plagiarism",
                  value: "6%",
                  detail: "2 matched sources (journals, preprints).",
                },
                {
                  title: "Rewrite impact",
                  value: "-12 pts",
                  detail: "Projected AI score reduction after rewrite.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-white/10 bg-night-800 p-4"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{card.title}</p>
                  <p className="mt-3 text-2xl font-semibold text-mint-500">{card.value}</p>
                  <p className="mt-2 text-xs text-slate-300">{card.detail}</p>
                </div>
              ))}
            </div>

            <div className="rounded-3xl border border-white/10 bg-night-800 p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold">Highlighted sections</h3>
                  <p className="text-sm text-slate-300">
                    Review AI-likely and matched phrases with source references.
                  </p>
                </div>
                <button
                  className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300"
                  type="button"
                >
                  View report PDF
                </button>
              </div>

              <div className="mt-6 space-y-4">
                {sampleHighlights.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-night-700/60 p-4"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase tracking-[0.2em] text-azure-500">
                        {item.label}
                      </span>
                      <span className="text-xs text-slate-400">Source: Springer 2023</span>
                    </div>
                    <p className="mt-3 text-sm text-slate-200">{item.text}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <button
                        className="rounded-full bg-mint-500/20 px-3 py-1 text-xs text-mint-500"
                        type="button"
                      >
                        Rewrite section
                      </button>
                      <button
                        className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300"
                        type="button"
                      >
                        Add citation
                      </button>
                      <button
                        className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300"
                        type="button"
                      >
                        Manual edit
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-night-800 p-6">
              <h3 className="text-lg font-semibold">Smart rewrite options</h3>
              <p className="text-sm text-slate-300">
                Select a rewrite style to reduce AI detection while preserving academic tone.
              </p>
              <div className="mt-4 space-y-4">
                {rewriteVersions.map((option) => (
                  <button
                    key={option.title}
                    className="w-full rounded-2xl border border-white/10 bg-night-700/50 p-4 text-left transition hover:border-azure-500/70"
                    type="button"
                  >
                    <p className="text-sm font-semibold text-slate-100">{option.title}</p>
                    <p className="mt-2 text-xs text-slate-400">{option.description}</p>
                  </button>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-white/10 bg-night-700/50 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Grammar polish</p>
                <p className="mt-2 text-sm text-slate-200">
                  Integrate grammar correction and style consistency checks before export.
                </p>
                <button
                  className="mt-3 rounded-full bg-azure-500 px-3 py-2 text-xs font-semibold text-night-900"
                  type="button"
                >
                  Apply grammar fixes
                </button>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-night-800 p-6">
              <h3 className="text-lg font-semibold">Comparison view</h3>
              <p className="text-sm text-slate-300">
                Compare original and rewritten text side-by-side for quick review.
              </p>
              <div className="mt-4 grid gap-4">
                <div className="rounded-2xl border border-white/10 bg-night-700/50 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Original text</p>
                  <p className="mt-2 text-sm text-slate-200">
                    The results of the study indicate a significant increase in efficiency across
                    the proposed model.
                  </p>
                </div>
                <div className="rounded-2xl border border-mint-500/40 bg-night-700/50 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-mint-500">Rewritten text</p>
                  <p className="mt-2 text-sm text-slate-200">
                    Findings show the proposed model improves operational efficiency by a
                    statistically meaningful margin.
                  </p>
                </div>
              </div>
              <button
                className="mt-4 w-full rounded-full bg-mint-500 px-4 py-2 text-sm font-semibold text-night-900"
                type="button"
              >
                Download full report (PDF)
              </button>
            </div>

            <div className="rounded-3xl border border-white/10 bg-night-800 p-6">
              <h3 className="text-lg font-semibold">Recent analyses</h3>
              <p className="text-sm text-slate-300">Access stored papers and reports.</p>
              <div className="mt-4 space-y-3">
                {history.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-night-700/50 px-4 py-3"
                  >
                    <div>
                      <p className="text-sm text-slate-100">{item.name}</p>
                      <p className="text-xs text-slate-400">{item.id} · {item.date}</p>
                    </div>
                    <button
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300"
                      type="button"
                    >
                      Open
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </main>

        <footer className="border-t border-white/10 bg-night-800/70">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-slate-200">Security & compliance</p>
              <p>Uploads are validated, encrypted, and removed after processing.</p>
            </div>
            <div>
              <p className="text-slate-200">Cost optimization</p>
              <p>Uses low-cost APIs and open-source NLP models when available.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
