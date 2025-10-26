// src/assets/components/common/Animation/WowAnimation.jsx
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const WowAnimation = ({ 
  children, 
  animationClass = 'fadeInUp', 
  delay = 0,
  className = '' 
}) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  return (
    <div
      ref={ref}
      className={`${className} ${hasAnimated ? `animated ${animationClass}` : ''}`}
      style={{
        visibility: hasAnimated ? 'visible' : 'hidden',
        animationDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

export default WowAnimation;