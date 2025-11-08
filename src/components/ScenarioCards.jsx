import { useState } from 'react';
import { BookOpen, BadgeCheck, Play } from 'lucide-react';

const scenarios = [
  {
    title: 'Drone Delivery Route',
    context:
      'Optimize a drone’s battery usage modeled by a polynomial cost function across distance segments.',
    prompt:
      'Given P(x) = 0.5x^3 - 3x^2 + 4x + 6 (energy units), investigate where energy peaks and propose a plan.',
    skills: ['Pattern recognition', 'Derivative intuition', 'Evaluation'],
  },
  {
    title: 'Eco-Filter Prototype',
    context:
      'The filtration rate varies with a polynomial response to pressure. Tune parameters to hit a target rate.',
    prompt:
      'For Q(x) = -x^3 + 6x^2 - 9x + 8, explore factorization to locate efficient operating regions.',
    skills: ['Decomposition', 'Factoring patterns', 'Testing values'],
  },
  {
    title: 'AR Signal Calibration',
    context:
      'An AR headset’s signal stability follows a polynomial curve. Calibrate to minimize jitter.',
    prompt:
      'Use synthetic division to test candidate roots and propose calibration values.',
    skills: ['Algorithms', 'Synthetic division', 'Abstraction'],
  },
];

export default function ScenarioCards() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section className="mx-auto mt-16 max-w-6xl px-6 sm:px-10">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Problem Scenarios</h2>
        <a href="#sandbox" className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-cyan-400">
          <Play size={16} /> Try in Sandbox
        </a>
      </div>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {scenarios.map((s, i) => (
          <div key={s.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{s.context}</p>
              </div>
              <BadgeCheck className="text-cyan-600" size={20} />
            </div>
            <div className="mt-3 rounded-md bg-slate-50 p-3 text-sm text-slate-700">
              <BookOpen size={16} className="mr-1 inline" /> {s.prompt}
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {s.skills.map((tag) => (
                <span key={tag} className="rounded-full bg-cyan-50 px-2 py-1 text-xs font-medium text-cyan-700 ring-1 ring-cyan-200">
                  {tag}
                </span>
              ))}
            </div>
            <button
              onClick={() => setExpanded(expanded === i ? null : i)}
              className="mt-4 w-full rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              {expanded === i ? 'Hide tips' : 'Show tips'}
            </button>
            {expanded === i && (
              <ul className="mt-2 list-inside list-disc text-sm text-slate-600">
                <li>Identify degree and leading term to understand end behavior.</li>
                <li>Test small integer roots first using synthetic division.</li>
                <li>Relate coefficients to physical constraints in the story.</li>
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
