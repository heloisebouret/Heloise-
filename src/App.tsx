import Header from './components/Header';
import Hero from './components/Hero';
import ExpertCuration from './components/ExpertCuration';
import Sustainability from './components/Sustainability';
import Subscription from './components/Subscription';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ExpertCuration />
        <Sustainability />
        <Subscription />
        <Testimonial />
      </main>
      <Footer />
    </div>
  );
}
