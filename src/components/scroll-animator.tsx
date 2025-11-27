"use client";

import { useRef, useEffect, useState } from 'react';

export const ScrollAnimator = ({ children, className = '', style = {} }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const combinedClassName = `transition-all duration-700 ease-out ${className} ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`;
  
  // Animate skill bars
  useEffect(() => {
    if (inView && ref.current) {
        const skillBars = ref.current.querySelectorAll('.skill-progress');
        skillBars.forEach(bar => {
            const width = (bar as HTMLElement).dataset.width;
            if (width) {
                (bar as HTMLElement).style.width = width;
            }
        });
    }
  }, [inView]);

  return (
    <div ref={ref} className={combinedClassName} style={style}>
      {children}
    </div>
  );
};
