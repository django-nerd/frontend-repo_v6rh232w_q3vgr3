import { Brain, Puzzle, Workflow, Lightbulb } from 'lucide-react';

export default function PBLCTOverview() {
  const items = [
    {
      icon: Lightbulb,
      title: 'Problem-Based Learning (PBL)',
      desc:
        'Begin with a contextual challenge. Investigate, collaborate, and iterate to construct understanding of polynomial concepts.',
    },
    {
      icon: Puzzle,
      title: 'Decomposition',
      desc:
        'Break complex situations into smaller parts: identify terms, degree, and structure in polynomial expressions.',
    },
    {
      icon: Brain,
      title: 'Pattern Recognition',
      desc:
        'Detect recurring structures such as factorable forms, identities, and coefficient relationships across problems.',
    },
    {
      icon: Workflow,
      title: 'Algorithms',
      desc:
        'Design step-by-step processes: expansion, factoring, synthetic division, and polynomial evaluation using Horner’s method.',
    },
  ];

  return (
    <section id="pbl" className="mx-auto mt-16 max-w-6xl px-6 sm:px-10">
      <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">PBL + CT Skill Map</h2>
      <p className="mt-2 max-w-3xl text-slate-600">
        This course interleaves problem scenarios with explicit computational thinking moves.
        Each challenge highlights which skill you are practicing and why it matters.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="group rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-cyan-50 p-2 text-cyan-600">
                <Icon size={20} />
              </div>
              <h3 className="font-medium text-slate-900">{title}</h3>
            </div>
            <p className="mt-2 text-sm text-slate-600">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
