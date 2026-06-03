"use client";

import { motion } from "framer-motion";

const FloatingObject = ({
  name,
  color,
  delay = 0,
  x = 0,
  y = 0,
}: {
  name: string;
  color: string;
  delay?: number;
  x?: number;
  y?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: 0.6,
      scale: 1,
      x: [x, x + 20, x],
      y: [y, y - 20, y],
    }}
    transition={{
      duration: 6,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className={`absolute glass-card rounded-full px-4 py-2 flex items-center gap-2 border-white/40 premium-shadow pointer-events-none`}
    style={{ left: `${50 + x}%`, top: `${50 + y}%` }}
  >
    <div className={`w-3 h-3 rounded-full ${color} shadow-lg`} />
    <span className="text-[10px] font-bold uppercase tracking-widest text-black/60">
      {name}
    </span>
  </motion.div>
);

export default function Hero() {
  const heroObjects = [
    { name: "Story Orb", color: "bg-blue-400", x: -40, y: -30, delay: 0 },
    {
      name: "Culture Capsule",
      color: "bg-purple-400",
      x: 35,
      y: -35,
      delay: 1,
    },
    { name: "Talent Magnet", color: "bg-pink-400", x: -45, y: 15, delay: 2 },
    { name: "Growth Ring", color: "bg-green-400", x: 40, y: 10, delay: 0.5 },
    {
      name: "Employee Pulse",
      color: "bg-orange-400",
      x: -20,
      y: -45,
      delay: 1.5,
    },
    { name: "Creator Sphere", color: "bg-teal-400", x: 15, y: 35, delay: 2.5 },
    { name: "Culture Engine", color: "bg-red-400", x: -30, y: 40, delay: 3 },
    { name: "Impact Core", color: "bg-indigo-400", x: 45, y: -10, delay: 0.2 },
    { name: "Brand Beacon", color: "bg-yellow-400", x: 10, y: -50, delay: 1.2 },
    { name: "Community Hub", color: "bg-cyan-400", x: -10, y: 50, delay: 2.2 },
  ];

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-20 relative overflow-hidden bg-white">
      {/* Background Decorative Elements - 3D-ish Objects */}
      <div className="absolute inset-0 pointer-events-none">
        {heroObjects.map((obj, i) => (
          <FloatingObject key={i} {...obj} />
        ))}
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-tight text-blue-600 bg-blue-50 rounded-full">
            The New Standard for Employee Advocacy
          </span>

          <h1 className="text-[58px] font-semibold tracking-tight text-black mb-8 leading-[1.05]">
            Turn employees into your <br />
            <span className="text-gradient">best brand channel.</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-500 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Stop relying on expensive ads. Empower your team to create authentic
            content that drives trust, recruitment, and revenue.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-10 py-4 bg-black text-white rounded-full font-semibold transition-all hover:bg-white hover:text-black border border-transparent hover:border-black active:scale-[0.98]">
              Get started for free
            </button>
            <button className="px-10 py-4 bg-white text-black border border-black/10 rounded-full font-semibold transition-all hover:border-black hover:bg-gray-50 hover:scale-[1.02] active:scale-[0.98]">
              Book a live demo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
