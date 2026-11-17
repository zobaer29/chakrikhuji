import HybridHeroCanvas from '@/components/hero.jsx';
import BentoFeatures from '@/components/BentoFeatures.jsx';
import LiveScanner from '@/components/LiveScanner.jsx';
import HowItWorks from '@/components/home/HowItWorks';
import FairnessSection from '@/components/home/FairnessSection';
import PricingSection from '@/components/home/PricingSection';
import FaqSection from '@/components/home/FaqSection';
import ClosingSection from '@/components/home/ClosingSection';

export default function Home() {
  return (
    <main id="main-content">
      <HybridHeroCanvas />
      <BentoFeatures />
      <HowItWorks />
      <FairnessSection />
      <LiveScanner />
      <PricingSection />
      <FaqSection />
      <ClosingSection />
    </main>
  );
}
