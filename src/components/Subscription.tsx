import { motion } from 'motion/react';

export default function Subscription() {
  return (
    <section className="py-section-padding px-gutter max-w-container-max mx-auto">
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-stack-md items-center border border-outline-variant p-12 bg-surface-container-lowest"
      >
        <div>
          <span className="font-label-caps text-label-caps text-secondary mb-2 block">STEP THREE</span>
          <h2 className="font-headline-lg text-headline-lg text-primary mb-6">Total Creative Freedom</h2>
          <p className="font-body-md text-on-surface-variant mb-8 leading-relaxed">
            Slow living means living at your own pace. Our subscription is designed to be as flexible as your reading list. Whether you're traveling or just need a month to catch up on your library, we make it effortless to adjust.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h4 className="font-label-caps text-label-caps text-primary mb-2">SKIP ANYTIME</h4>
              <p className="text-body-md text-on-surface-variant">One click from your dashboard. No questions asked.</p>
            </div>
            <div>
              <h4 className="font-label-caps text-label-caps text-primary mb-2">CANCEL FREELY</h4>
              <p className="text-body-md text-on-surface-variant">No hidden fees or long-term commitments. Stay only if you love it.</p>
            </div>
          </div>
        </div>
        <div className="bg-surface-container-high p-8 flex flex-col items-center text-center rounded-sm">
          <h3 className="font-headline-md text-headline-md text-primary mb-4">Start Your Journey</h3>
          <p className="font-body-md text-on-surface-variant mb-8">Choose from our classic monthly pairing or our premium quarterly cellar box.</p>
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-primary text-on-primary px-12 py-4 rounded-lg text-label-caps tracking-widest hover:opacity-95 transition-all shadow-md active:shadow-sm"
          >
            EXPLORE SUBSCRIPTIONS
          </motion.button>
          <p className="mt-4 text-label-caps text-secondary text-[10px]">Free shipping on all UK mainland orders.</p>
        </div>
      </motion.div>
    </section>
  );
}
