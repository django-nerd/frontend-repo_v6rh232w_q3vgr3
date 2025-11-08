import Hero from './components/Hero';
import PBLCTOverview from './components/PBLCTOverview';
import PolynomialSandbox from './components/PolynomialSandbox';
import ScenarioCards from './components/ScenarioCards';

function Header() {
  return (
    <header className="mx-auto max-w-6xl px-6 py-5 sm:px-10">
      <div className="flex items-center justify-between">
        <a href="#" className="text-lg font-semibold text-slate-900">PolyLab</a>
        <nav className="hidden gap-6 text-sm text-slate-700 sm:flex">
          <a href="#pbl" className="hover:text-slate-900">Approach</a>
          <a href="#sandbox" className="hover:text-slate-900">Sandbox</a>
          <a href="#" className="rounded-lg bg-slate-900 px-3 py-1.5 font-medium text-white hover:bg-slate-800">Get Started</a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mx-auto mt-16 max-w-6xl px-6 py-10 sm:px-10">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
        <p>
          Built for technology-forward, problem-based learning of polynomials. Practice computational thinking skills in an interactive environment.
        </p>
        <p className="mt-2">© {new Date().getFullYear()} PolyLab. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <Header />
      <main className="mx-auto max-w-6xl px-6 sm:px-10">
        <Hero />
        <PBLCTOverview />
        <ScenarioCards />
        <PolynomialSandbox />
      </main>
      <Footer />
    </div>
  );
}
