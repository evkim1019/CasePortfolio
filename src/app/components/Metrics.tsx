import { useEffect, useState, type ComponentType } from "react";
import { TrendingUp, Gauge, Timer, Rocket } from "lucide-react";

interface Metric {
  label: string;
  target: number;
  suffix?: string;
  prefix?: string;
  description: string;
  icon: ComponentType<{ className?: string; size?: number }>;
  formatter?: (value: number) => string;
}

const metrics: Metric[] = [
  {
    label: "Users Impacted",
    target: 3_000_000,
    suffix: "+",
    description: "Across web & mobile",
    icon: TrendingUp,
    formatter: (value) => `${(value / 1_000_000).toFixed(1)}M`,
  },
  {
    label: "Faster Time-to-Value",
    target: 85,
    suffix: "%",
    description: "Onboarding efficiency",
    icon: Gauge,
  },
  {
    label: "Faster Research Cycles",
    target: 30,
    suffix: "%",
    description: "Rapid prototyping",
    icon: Timer,
  },
  {
    label: "Dev Time Saved",
    target: 34,
    suffix: "%",
    description: "optimized handoffs",
    icon: Rocket,
  },
];

function useCountUp(target: number, duration = 1400) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let raf: number;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(target * eased));

      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);

  return value;
}

export function Metrics() {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto">
        {/* <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-3">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] ">Impact</p>
            <h2 className="text-3xl">Outcomes-first design</h2>
            <p>Accelerating research cycles, shortening development, and delivering meaningful value to millions of users</p>
          </div>
          <p className=" max-w-xl">
            Outcomes-first design: accelerating research cycles, shortening development, and delivering meaningful
            value to millions of users.
          </p>
        </div> */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((metric) => {
            const count = useCountUp(metric.target);
            const Icon = metric.icon;
            const formatted = metric.formatter ? metric.formatter(count) : count.toLocaleString();

            return (
              <div
                key={metric.label}
                className="glass-card rounded-2xl p-4 border border-white/10 shadow-xl hover:border-white/30 transition-colors flex flex-col justify-between"
              >
                <div className="flex items-center justify-center mb-2">
                  {/* <div className="w-6 h-6 rounded-full flex items-center justify-center">
                    <Icon className="" size={20} />
                  </div> */}
                  <p className="text-xs uppercase tracking-[0.1em] align-center">{metric.description}</p>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-0">
                    {metric.prefix}
                    {formatted}
                    {metric.suffix}
                  </div>
                  <p className="">{metric.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
