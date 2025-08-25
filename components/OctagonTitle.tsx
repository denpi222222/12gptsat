'use client';

import React, { useEffect, useRef, useState } from 'react';

type OctagonTitleProps = {
  title: string;
  subtitle?: string;
};

/**
 * OctagonTitle renders a shimmering gradient title.
 * Periodically dispatches a `crazyoctagon:spark-burst` event with the
 * title's center coordinates to trigger spark effects.
 */
export function OctagonTitle({ title, subtitle }: OctagonTitleProps) {
  const [shimmer, setShimmer] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let timer: number | undefined;

    const triggerBurst = () => {
      setShimmer(true);
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const detail = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
        window.dispatchEvent(new CustomEvent('crazyoctagon:spark-burst', { detail }));
      }
      window.setTimeout(() => setShimmer(false), 400);
    };

    const schedule = () => {
      const nextInMs = 2000 + Math.random() * 3000;
      timer = window.setTimeout(() => {
        triggerBurst();
        schedule();
      }, nextInMs) as unknown as number;
    };

    const first = window.setTimeout(() => {
      triggerBurst();
      schedule();
    }, 2000) as unknown as number;

    return () => {
      if (timer) window.clearTimeout(timer);
      if (first) window.clearTimeout(first);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative z-10 text-center select-none">
      <h1
        className={
          'mx-auto uppercase font-extrabold tracking-[0.2em] text-3xl md:text-6xl lg:text-8xl octagon-title ' +
          (shimmer ? ' octagon-shimmer' : '')
        }
      >
        {title}
      </h1>
      {subtitle ? (
        <div className="mt-2 text-[12px] md:text-lg lg:text-xl octagon-subtitle">{subtitle}</div>
      ) : null}

      <style jsx>{`
        .octagon-title {
          background: linear-gradient(90deg, #7e22ce, #3b82f6, #7e22ce);
          background-size: 200% 100%;
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          transition: background-position 0.4s ease, transform 0.3s ease;
        }
        .octagon-shimmer {
          background-position: 100% 0;
          transform: scale(1.03);
        }
        .octagon-subtitle {
          color: rgba(220, 228, 255, 0.9);
          text-shadow: 0 0 8px rgba(124, 58, 237, 0.6);
        }
      `}</style>
    </div>
  );
}

