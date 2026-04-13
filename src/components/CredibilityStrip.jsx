import React, { useState, useEffect, useRef } from 'react';
import { Users, Award, Shield, TrendingUp } from 'lucide-react';

const STATS = [
  { icon: Users, label: 'Families Protected', value: 1200, suffix: '+', prefix: '' },
  { icon: Award, label: 'Years of Experience', value: 12, suffix: '+', prefix: '' },
  { icon: TrendingUp, label: 'Claims Processed', value: 98, suffix: '%', prefix: '' },
  { icon: Shield, label: 'Coverage Placed', value: 45, suffix: 'M+', prefix: '$' },
];

function useCountUp(end, duration, shouldStart) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime = null;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, shouldStart]);

  return count;
}

function StatItem({ icon: Icon, label, value, suffix, prefix }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const count = useCountUp(value, 2000, isVisible);

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <Icon className="w-6 h-6 text-gold-400 mb-3" />
      <span className="text-2xl sm:text-3xl font-bold text-white font-display">
        {prefix}{count}{suffix}
      </span>
      <span className="text-navy-300 text-sm mt-1">{label}</span>
    </div>
  );
}

export default function CredibilityStrip() {
  return (
    <section className="relative bg-white py-6 -mt-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-navy-900 rounded-2xl px-6 py-8 sm:py-10 shadow-xl shadow-navy-900/20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {STATS.map((stat) => (
              <StatItem key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
