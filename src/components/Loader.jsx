import { motion } from 'framer-motion';

const Loader = ({ onDone }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
      style={{
        position: 'fixed', inset: 0, background: '#1A1F2E',
        zIndex: 9999, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', gap: '2.5rem',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center' }}
      >
        <div style={{
          fontFamily: '"DM Serif Display", serif', fontSize: '2.8rem',
          color: '#fff', letterSpacing: '-1px', lineHeight: 1.2,
        }}>
          Kinjal<span style={{ color: '#E07B3C' }}>.</span>
        </div>
        <div style={{
          fontFamily: 'Inter, sans-serif', fontSize: '0.72rem',
          letterSpacing: '4px', textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.35)', marginTop: '8px',
        }}>
          Graphic Designer
        </div>
      </motion.div>

      <div style={{ width: 140, height: 1.5, background: 'rgba(255,255,255,0.06)', borderRadius: 4, overflow: 'hidden' }}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.8, ease: [0.42, 0, 0.12, 1] }}
          onAnimationComplete={onDone}
          style={{ height: '100%', background: '#E07B3C', borderRadius: 4 }}
        />
      </div>
    </motion.div>
  );
};
export default Loader;
