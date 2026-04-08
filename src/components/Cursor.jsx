import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const Cursor = () => {
  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);
  const [hover, setHover] = useState(false);
  const [visible, setVisible] = useState(false);

  const sx = useSpring(mx, { stiffness: 350, damping: 35 });
  const sy = useSpring(my, { stiffness: 350, damping: 35 });
  const bx = useSpring(mx, { stiffness: 120, damping: 22 });
  const by = useSpring(my, { stiffness: 120, damping: 22 });

  useEffect(() => {
    const move = (e) => {
      mx.set(e.clientX); my.set(e.clientY);
      if (!visible) setVisible(true);
      const t = e.target.closest('a,button,.filter-tab,.project-card');
      setHover(!!t);
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [visible]);

  if (!visible) return null;
  return (
    <>
      <motion.div style={{
        position: 'fixed', pointerEvents: 'none', zIndex: 9999,
        width: 6, height: 6, background: '#F97316', borderRadius: '50%',
        x: sx, y: sy, translateX: '-50%', translateY: '-50%',
      }} />
      <motion.div style={{
        position: 'fixed', pointerEvents: 'none', zIndex: 9998,
        width: hover ? 48 : 32, height: hover ? 48 : 32,
        border: `1.5px solid ${hover ? '#F97316' : 'rgba(249,115,22,0.4)'}`,
        borderRadius: '50%',
        x: bx, y: by, translateX: '-50%', translateY: '-50%',
        transition: 'width 0.25s, height 0.25s, border-color 0.25s',
      }} />
    </>
  );
};
export default Cursor;
