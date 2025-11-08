import Hero from './components/Hero';
import PBLSection from './components/PBLSection';
import CTSection from './components/CTSection';
import PolynomialSandbox from './components/PolynomialSandbox';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Simple top bar */}
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-cyan-500" />
            <span className="font-semibold">PBL × CT • Polinomial</span>
          </div>
          <nav className="hidden gap-6 text-sm font-medium sm:flex">
            <a href="#pbl" className="text-slate-600 hover:text-slate-900">PBL</a>
            <a href="#ct" className="text-slate-600 hover:text-slate-900">CT</a>
            <a href="#sandbox" className="text-slate-600 hover:text-slate-900">Sandbox</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl space-y-2 px-6 py-6">
        <Hero />

        {/* Context statement (from thesis background) */}
        <section className="mx-auto mt-10 max-w-3xl rounded-xl border border-slate-200 bg-white p-5 text-sm leading-relaxed text-slate-700">
          Media ini dikembangkan sebagai bagian dari penelitian tugas akhir/skripsi di Program Studi Pendidikan Matematika untuk menyediakan alternatif media pembelajaran berbasis website yang secara eksplisit mengintegrasikan pendekatan Problem Based Learning (PBL) dan kemampuan Computational Thinking (CT) pada materi Polinomial.
        </section>

        <div id="ct">
          <CTSection />
        </div>
        <PBLSection />
        <PolynomialSandbox />
      </main>

      <footer className="mt-8 border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-slate-500">
          © {new Date().getFullYear()} PBL × CT Polinomial — Dibangun untuk pembelajaran interaktif.
        </div>
      </footer>
    </div>
  );
}
