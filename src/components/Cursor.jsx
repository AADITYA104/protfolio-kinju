import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const Cursor = () => {
  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);
  const [hover, setHover] = useState(false);
  const [visible, setVisible] = useState(false);

  const sx = useSpring(mx, { stiffness: 400, damping: 35 });
  const sy = useSpring(my, { stiffness: 400, damping: 35 });

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) return;

    const move = (e) => {
      mx.set(e.clientX); my.set(e.clientY);
      if (!visible) setVisible(true);
      const t = e.target.closest('a,button,.filter-tab,.project-card,.skill-card,.testimonial-card');
      setHover(!!t);
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [visible]);

  if (!visible) return null;
  return (
    <motion.div style={{
      position: 'fixed', pointerEvents: 'none', zIndex: 9999,
      width: hover ? 40 : 8, height: hover ? 40 : 8,
      background: hover ? 'rgba(224,123,60,0.08)' : 'rgba(224,123,60,0.5)',
      border: hover ? '1.5px solid rgba(224,123,60,0.4)' : 'none',
      borderRadius: '50%', mixBlendMode: hover ? 'normal' : 'normal',
      x: sx, y: sy, translateX: '-50%', translateY: '-50%',
      transition: 'width 0.3s, height 0.3s, background 0.3s, border 0.3s',
    }} />
  );
};
export default Cursor;
