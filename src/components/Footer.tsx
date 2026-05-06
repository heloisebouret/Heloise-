import { ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-surface-container-high border-t border-outline-variant py-section-padding">
      <div className="px-gutter max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-4 gap-stack-md">
        <div className="col-span-1 md:col-span-1">
          <div className="font-display italic text-headline-md text-primary mb-6">Words with Wine</div>
          <p className="text-on-surface-variant font-body-md mb-8">
            Savor every sentence. A curation of fine literature and artisanal wines delivered to your sanctuary.
          </p>
        </div>
        
        <div className="flex flex-col gap-4">
          <h4 className="font-label-caps text-label-caps text-primary mb-2">STORY</h4>
          <a className="text-on-surface-variant font-body-md hover:text-primary transition-colors duration-300" href="#">Our Story</a>
          <a className="text-on-surface-variant font-body-md hover:text-primary transition-colors duration-300" href="#">The Vineyard</a>
          <a className="text-on-surface-variant font-body-md hover:text-primary transition-colors duration-300" href="#">The Library</a>
          <a className="text-on-surface-variant font-body-md hover:text-primary transition-colors duration-300" href="#">Journal</a>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-label-caps text-label-caps text-primary mb-2">HELP</h4>
          <a className="text-on-surface-variant font-body-md hover:text-primary transition-colors duration-300" href="#">FAQ</a>
          <a className="text-on-surface-variant font-body-md hover:text-primary transition-colors duration-300" href="#">Shipping</a>
          <a className="text-on-surface-variant font-body-md hover:text-primary transition-colors duration-300" href="#">Gifting</a>
          <a className="text-on-surface-variant font-body-md hover:text-primary transition-colors duration-300" href="#">Privacy</a>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-label-caps text-label-caps text-primary mb-2">NEWSLETTER</h4>
          <p className="text-on-surface-variant text-body-md mb-4">
            Join our reading circle for monthly pairing notes and cellar updates.
          </p>
          <div className="flex border-b border-primary py-2 group">
            <input 
              className="bg-transparent border-none focus:outline-none text-on-surface w-full font-body-md placeholder:text-on-surface-variant/50" 
              placeholder="Email Address" 
              type="email"
            />
            <button className="text-primary hover:translate-x-1 transition-transform">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-container-max mx-auto px-gutter mt-20 pt-8 border-t border-outline-variant/30 text-center">
        <p className="text-on-surface-variant font-label-caps text-[10px] opacity-70">
          © 2024 Words with Wine. Savor every sentence.
        </p>
      </div>
    </footer>
  );
}
