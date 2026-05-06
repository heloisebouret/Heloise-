import { motion } from 'motion/react';
import { BookOpen, Wine } from 'lucide-react';

export default function ExpertCuration() {
  return (
    <section className="pb-section-padding px-gutter max-w-container-max mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-stack-md items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:col-span-5 order-2 md:order-1"
        >
          <div className="font-label-caps text-label-caps text-secondary mb-2">STEP ONE</div>
          <h2 className="font-headline-lg text-headline-lg text-primary mb-6">Expert Curation</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mb-8">
            Our sommeliers and literary critics spend months reading and tasting. We don't just pick a book and a bottle; we find the atmospheric resonance between a story's prose and a vintage's notes. A gothic mystery paired with a deep, moody Malbec; a sun-drenched memoir alongside a crisp, mineral-rich Rosé.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <BookOpen className="text-primary w-6 h-6 shrink-0" />
              <span className="font-body-md text-on-surface italic">"The texture of the paper must match the weight of the wine."</span>
            </div>
            <div className="flex items-start gap-4">
              <Wine className="text-primary w-6 h-6 shrink-0" />
              <span className="font-body-md text-on-surface italic">"Each bottle is sourced from independent, sustainable vineyards."</span>
            </div>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:col-span-7 order-1 md:order-2"
        >
          <div className="relative overflow-hidden rounded-lg ambient-shadow">
            <img 
              alt="Premium book and wine pairing aesthetic" 
              className="w-full h-auto object-cover aspect-[0.88] grayscale-[20%] hover:scale-105 transition-transform duration-700" 
              referrerPolicy="no-referrer"
              src="https://lh3.googleusercontent.com/aida/ADBb0uj92WSEbhv8LLCUhISs5jxgSzIkUZ9D8gF4Qlft_g728WtjuKsD1UMWcHkevpnpe2WG1_ABF_GaGbJos1FMHlL_JkHwZdpd4OiRxSaCX64Vvsf9py_sFpsf7VyY1ViVcgjv6I5NT2VdzHtMTiYS2tKO_I8eEB2ldXzNq9phhtHLAROLiPozF3QHSEvNJ6pEnrxY38u1cOzhjA7KV4hXi1opI47MsVqQuzEKO24mNUY3Jhx2SC5JHc3ne-YOirONUnJudQVknUXQQ" 
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
