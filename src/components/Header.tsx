import { motion } from 'motion/react';

export default function Header() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-surface/95 backdrop-blur-sm border-b border-outline-variant w-full top-0 sticky z-50 h-20"
    >
      <nav className="flex justify-between items-center h-full px-gutter max-w-container-max mx-auto">
        <div className="font-display italic text-headline-md text-primary">Words with Wine</div>
        <div className="hidden md:flex items-center gap-stack-md">
          <a className="text-on-surface-variant font-body-md hover:text-primary transition-colors duration-300" href="#">Home</a>
          <a className="text-on-surface-variant font-body-md hover:text-primary transition-colors duration-300" href="#">Shop</a>
          <a className="text-primary font-semibold border-b border-primary pb-1" href="#">About</a>
          <a className="text-on-surface-variant font-body-md hover:text-primary transition-colors duration-300" href="#">Contact</a>
        </div>
        <div className="flex items-center gap-stack-sm">
          <button className="hidden md:block text-primary font-body-md hover:opacity-80 scale-95 active:scale-90 transition-transform duration-200">Sign In</button>
          <button className="bg-primary text-on-primary px-stack-md py-2 text-label-caps tracking-widest scale-95 active:scale-90 transition-transform duration-200 rounded">Join Now</button>
        </div>
      </nav>
    </motion.header>
  );
}
