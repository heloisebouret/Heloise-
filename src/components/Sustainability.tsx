import { motion } from 'motion/react';
import { Package, Trees, Recycle } from 'lucide-react';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

export default function Sustainability() {
  return (
    <section className="py-section-padding bg-surface-container">
      <div className="px-gutter max-w-container-max mx-auto">
        <div className="text-center mb-stack-md">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-label-caps text-label-caps text-secondary mb-2 block"
          >
            STEP TWO
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-headline-lg text-headline-lg text-primary"
          >
            Thoughtfully Packaged
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="bg-surface p-10 paper-border flex flex-col justify-between"
          >
            <div>
              <Package className="text-primary w-10 h-10 mb-6" />
              <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Compostable Materials</h3>
              <p className="font-body-md text-on-surface-variant">Your box and fillers are made from 100% recycled fibers and are fully backyard compostable.</p>
            </div>
          </motion.div>

          <motion.div 
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="bg-surface-container-high p-10 paper-border flex flex-col justify-between md:scale-105 z-10 shadow-lg"
          >
            <div>
              <Trees className="text-primary w-10 h-10 mb-6" />
              <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Forest Friendly</h3>
              <p className="font-body-md text-on-surface-variant">For every box shipped, we contribute to global reforestation efforts through our partnership with certified eco-initiatives.</p>
            </div>
            <div className="mt-8">
              <span className="text-label-caps text-primary border-b border-primary/20 pb-1 cursor-pointer hover:border-primary transition-colors">READ OUR PLEDGE</span>
            </div>
          </motion.div>

          <motion.div 
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="bg-surface p-10 paper-border flex flex-col justify-between"
          >
            <div>
              <Recycle className="text-primary w-10 h-10 mb-6" />
              <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Reusable Glass</h3>
              <p className="font-body-md text-on-surface-variant">Our bottles are chosen for their durability, encouraging you to upcycle them into vases or carafes.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
