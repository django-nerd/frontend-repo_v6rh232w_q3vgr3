import { useMemo, useState } from 'react';
import { FunctionSquare } from 'lucide-react';

function generateData(fn, range = [-10, 10], step = 0.25) {
  const points = [];
  for (let x = range[0]; x <= range[1]; x += step) {
    points.push({ x, y: fn(x) });
  }
  return points;
}

function toSVGPath(points, width, height, xRange = [-10, 10], yRange = [-10, 10]) {
  const [xMin, xMax] = xRange;
  const [yMin, yMax] = yRange;
  const sx = (x) => ((x - xMin) / (xMax - xMin)) * width;
  const sy = (y) => height - ((y - yMin) / (yMax - yMin)) * height;

  return points
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${sx(p.x).toFixed(2)} ${sy(p.y).toFixed(2)}`)
    .join(' ');
}

export default function PolynomialSandbox() {
  const [a, setA] = useState(1);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [d, setD] = useState(0);

  const f = useMemo(() => (x) => a * x ** 3 + b * x ** 2 + c * x + d, [a, b, c, d]);
  const data = useMemo(() => generateData(f), [f]);

  const width = 800;
  const height = 360;
  const xRange = [-10, 10];
  const yRange = [-10, 10];
  const path = useMemo(() => toSVGPath(data, width, height, xRange, yRange), [data]);

  const gridLines = 10;

  const sliders = [
    { label: 'a (x^3)', value: a, set: setA, min: -3, max: 3, step: 0.1 },
    { label: 'b (x^2)', value: b, set: setB, min: -5, max: 5, step: 0.1 },
    { label: 'c (x)', value: c, set: setC, min: -8, max: 8, step: 0.1 },
    { label: 'd', value: d, set: setD, min: -10, max: 10, step: 0.5 },
  ];

  const x0 = ((0 - xRange[0]) / (xRange[1] - xRange[0])) * width;
  const y0 = height - ((0 - yRange[0]) / (yRange[1] - yRange[0])) * height;

  return (
    <section id="sandbox" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Sandbox Polinomial</h2>
          <p className="mt-1 text-slate-600">
            Ubah koefisien untuk melihat pengaruhnya terhadap bentuk grafik. Hubungkan temuanmu dengan masalah kontekstual.
          </p>
        </div>
        <div className="hidden rounded-lg bg-cyan-50 p-3 text-cyan-700 sm:inline-flex">
          <FunctionSquare />
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-12">
        <div className="rounded-xl border border-slate-200 bg-white p-4 lg:col-span-8">
          <div className="w-full overflow-x-auto">
            <svg viewBox={`0 0 ${width} ${height}`} className="h-[360px] w-full">
              {/* grid */}
              <g>
                {[...Array(gridLines + 1)].map((_, i) => {
                  const x = (i / gridLines) * width;
                  return (
                    <line key={`vx-${i}`} x1={x} y1={0} x2={x} y2={height} stroke="rgba(148,163,184,0.2)" strokeWidth="1" />
                  );
                })}
                {[...Array(gridLines + 1)].map((_, i) => {
                  const y = (i / gridLines) * height;
                  return (
                    <line key={`hz-${i}`} x1={0} y1={y} x2={width} y2={y} stroke="rgba(148,163,184,0.2)" strokeWidth="1" />
                  );
                })}
              </g>
              {/* axes */}
              <line x1={0} y1={y0} x2={width} y2={y0} stroke="#334155" strokeWidth="1.5" />
              <line x1={x0} y1={0} x2={x0} y2={height} stroke="#334155" strokeWidth="1.5" />
              {/* curve */}
              <path d={path} fill="none" stroke="#06b6d4" strokeWidth="2" />
            </svg>
          </div>
          <p className="mt-3 text-sm text-slate-500">y = {a.toFixed(2)}x³ + {b.toFixed(2)}x² + {c.toFixed(2)}x + {d.toFixed(2)}</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4 lg:col-span-4">
          <div className="space-y-5">
            {sliders.map((s) => (
              <div key={s.label}>
                <div className="mb-2 flex items-center justify-between text-sm font-medium text-slate-700">
                  <span>{s.label}</span>
                  <span className="tabular-nums text-slate-500">{s.value.toFixed(2)}</span>
                </div>
                <input
                  type="range"
                  min={s.min}
                  max={s.max}
                  step={s.step}
                  value={s.value}
                  onChange={(e) => s.set(parseFloat(e.target.value))}
                  className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-cyan-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
