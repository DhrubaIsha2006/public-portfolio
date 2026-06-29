import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function MagneticButton({ children, className = '', href, onClick, type = 'button', ...props }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 14 });
  const springY = useSpring(y, { stiffness: 180, damping: 14 });
  const rotate = useTransform(springX, [-30, 30], [-2, 2]);
  const Component = href ? motion.a : motion.button;

  function handleMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <Component
      href={href}
      type={href ? undefined : type}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: springX, y: springY, rotate }}
      whileTap={{ scale: 0.96 }}
      className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-black uppercase tracking-[0.16em] transition focus:outline-none focus:ring-2 focus:ring-blush focus:ring-offset-2 focus:ring-offset-ink ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
