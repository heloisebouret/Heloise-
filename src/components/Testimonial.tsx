import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function Testimonial() {
  return (
    <section className="py-section-padding px-gutter max-w-container-max mx-auto text-center">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <Quote className="text-primary/30 w-12 h-12 mx-auto mb-8 fill-primary/30" />
        <blockquote className="font-display italic text-headline-md text-primary mb-8 leading-snug">
          "Words with Wine has transformed my Sunday afternoons into a ritual. The pairing of 'The Shadow of the Wind' with that Spanish Tempranillo was nothing short of cinematic."
        </blockquote>
        <cite className="font-label-caps text-label-caps text-secondary not-italic block">
          — ELEANOR V., MEMBER SINCE 2021
        </cite>
      </motion.div>
    </section>
  );
}
