import { Hero } from '../components/Hero';
import { Benefits } from '../components/Benefits';
import { Specialties } from '../components/Specialties';
import { About } from '../components/About';
import { FAQ } from '../components/FAQ';
import { Testimonials } from '../components/Testimonials';

export function HomePage() {
  return (
    <div className="space-y-20 lg:space-y-24 pb-20">
      <Hero />
      <Benefits />
      <Specialties />
      <About />
      <FAQ />
      <Testimonials />
    </div>
  );
}
