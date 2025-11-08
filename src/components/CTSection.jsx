import { Brain, Cpu, ListChecks, Network } from 'lucide-react';

export default function CTSection() {
  const skills = [
    {
      icon: Brain,
      title: 'Decomposition',
      desc:
        'Memecah masalah kompleks menjadi bagian-bagian kecil: identifikasi variabel, hubungan, dan batasan dalam konteks polinomial.',
    },
    {
      icon: Network,
      title: 'Pattern Recognition',
      desc:
        'Mengenali pola bentuk umum (kuadrat, kubik), simetri grafik, serta perubahan koefisien terhadap bentuk kurva.',
    },
    {
      icon: Cpu,
      title: 'Abstraction',
      desc:
        'Merepresentasikan situasi nyata sebagai model matematika y = f(x) dengan koefisien yang bermakna dan asumsi yang jelas.',
    },
    {
      icon: ListChecks,
      title: 'Algorithmic Thinking',
      desc:
        'Menyusun langkah terurut: definisikan fungsi, uji titik kunci, hitung akar/keekstreman, validasi terhadap data.',
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900">Keterampilan Computational Thinking</h2>
        <p className="mt-2 text-slate-600">
          Elemen CT berikut diintegrasikan eksplisit dalam aktivitas pemodelan dan pemecahan masalah polinomial.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((s, i) => (
          <article key={i} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="mb-4 inline-flex rounded-lg bg-violet-50 p-3 text-violet-700">
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
