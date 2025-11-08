import Spline from '@splinetool/react-spline';
import { Rocket, GraduationCap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[75vh] w-full overflow-hidden rounded-2xl bg-slate-900">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/hGDm7Foxug7C6E8s/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay to improve text contrast without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/20 to-slate-900/70" />

      <div className="relative z-10 flex h-full items-center px-6 sm:px-10">
        <div className="max-w-3xl text-white">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs backdrop-blur">
            <Rocket size={16} />
            <span>Interactive • Technology • Education</span>
          </div>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            Problem-Based Learning + Computational Thinking for Polynomials
          </h1>
          <p className="mt-4 text-slate-200 sm:text-lg">
            Explore polynomials through real-world problems while practicing decomposition,
            pattern recognition, abstraction, and algorithms — all in one immersive space.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#sandbox" className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-5 py-3 font-medium text-slate-900 transition hover:bg-cyan-400">
              Start Exploring
            </a>
            <a href="#pbl" className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-5 py-3 font-medium text-white ring-1 ring-white/20 transition hover:bg-white/20">
              <GraduationCap size={18} /> Learn the Approach
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
