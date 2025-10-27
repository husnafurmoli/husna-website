import { Hero } from '../components/Hero';
import { Testimonials } from '../components/Testimonials';

export function HomePage() {
  return (
    <div className="space-y-20 lg:space-y-24 pb-20">
      <Hero />
      <Testimonials />
    </div>
  );
}
