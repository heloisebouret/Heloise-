import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="py-section-padding px-gutter max-w-container-max mx-auto text-center">
      <motion.span 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-label-caps text-label-caps text-secondary mb-4 block"
      >
        THE ART OF PAIRING
      </motion.span>
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="font-display text-display text-primary mb-8 max-w-3xl mx-auto"
      >
        Savoring every sentence, one sip at a time.
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed"
      >
        We believe literature and fine wine share a soul. Discover how we curate your monthly moment of quiet indulgence.
      </motion.p>
    </section>
  );
}
