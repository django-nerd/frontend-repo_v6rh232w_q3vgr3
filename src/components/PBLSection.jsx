import { BookOpen, Lightbulb, Puzzle } from 'lucide-react';

export default function PBLSection() {
  const steps = [
    {
      icon: Lightbulb,
      title: 'Memahami Masalah Kontekstual',
      desc:
        'Mulai dari situasi nyata yang melibatkan polinomial (biaya produksi, lintasan proyektil, pertumbuhan populasi) untuk memicu rasa ingin tahu.',
    },
    {
      icon: Puzzle,
      title: 'Eksplorasi dan Perumusan Model',
      desc:
        'Identifikasi variabel, representasikan situasi sebagai fungsi polinomial, dan ajukan pertanyaan terfokus yang perlu dijawab.',
    },
    {
      icon: BookOpen,
      title: 'Refleksi dan Komunikasi',
      desc:
        'Jelaskan solusi, validasi dengan data, dan refleksikan strategi PBL serta keterampilan CT yang digunakan.',
    },
  ];

  return (
    <section id="pbl" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900">Pendekatan Problem Based Learning</h2>
        <p className="mt-2 text-slate-600">
          Alur berikut menuntun siswa dari masalah nyata menuju pemodelan dan solusi polinomial yang dapat diuji.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((s, i) => (
          <article key={i} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="mb-4 inline-flex rounded-lg bg-cyan-50 p-3 text-cyan-700">
              <s.icon size={22} />
            </div>
            <h3 className="text-lg font-semibold text-slate-800">{s.title}</h3>
            <p className="mt-2 text-slate-600">{s.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
