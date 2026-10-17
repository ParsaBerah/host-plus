import React, { useEffect, useRef, useState } from 'react';

const RevealOnScroll = ({
  children,
  delay = 0,
  yOffset = 28,
  className = '',
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: '750ms',
        transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
        transform: isVisible ? 'translateY(0) scale(1)' : `translateY(${yOffset}px) scale(0.985)`,
        opacity: isVisible ? 1 : 0,
        filter: isVisible ? 'blur(0px)' : 'blur(6px)',
      }}
      className={`transition-all will-change-transform ${className}`}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;