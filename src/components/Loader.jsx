import { motion } from 'framer-motion';

const Loader = ({ onDone }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ y: '-100%', transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } }}
      style={{
        position: 'fixed', inset: 0, background: '#080808',
        zIndex: 9999, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', gap: '2rem',
      }}
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'backOut' }}
        style={{
          width: 72, height: 72,
          border: '2px solid #F97316', borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'Syne, sans-serif', fontSize: '1.3rem',
          fontWeight: 800, color: '#F97316',
        }}
      >KG</motion.div>

      <div style={{ width: 180, height: 2, background: 'rgba(255,255,255,0.08)', borderRadius: 4, overflow: 'hidden' }}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 2, ease: 'easeInOut' }}
          onAnimationComplete={onDone}
          style={{ height: '100%', background: 'linear-gradient(90deg,#F97316,#FCD34D)', borderRadius: 4 }}
        />
      </div>

      <motion.p
        initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} transition={{ delay: 0.3 }}
        style={{ fontSize: '0.7rem', letterSpacing: '3px', textTransform: 'uppercase', color: '#9CA3AF' }}
      >Crafting Experience...</motion.p>
    </motion.div>
  );
};
export default Loader;
