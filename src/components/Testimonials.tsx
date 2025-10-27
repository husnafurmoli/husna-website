import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { Card } from './ui/card';
import mindfulBloom from '../assets/mindful-bloom.svg';

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Marketing Professional',
    image: 'https://images.unsplash.com/photo-1758518731027-78a22c8852ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWNjZXNzJTIwYWNoaWV2ZW1lbnQlMjBqb3l8ZW58MXx8fHwxNzYxNTM0MTM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    text: 'After just a few sessions with Husna, I finally sleep through the night. Her voice is calming and powerful, and she truly understands how to help. I feel like a new person!',
    rating: 5
  },
  {
    name: 'Michael T.',
    role: 'Software Engineer',
    image: 'https://images.unsplash.com/photo-1690767961864-e40686ac0e6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxtJTIwcGVhY2VmdWwlMjBtaW5kfGVufDF8fHx8MTc2MTUzNDEzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    text: 'I was skeptical at first, but Husna\'s professional approach and genuine care put me at ease. She helped me overcome my public speaking anxiety, and now I confidently present to large audiences.',
    rating: 5
  },
  {
    name: 'Jennifer L.',
    role: 'Small Business Owner',
    image: 'https://images.unsplash.com/photo-1691076198378-124d0985c851?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFjZWZ1bCUyMHNsZWVwJTIwcmVzdHxlbnwxfHx8fDE3NjE0OTIzNjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    text: 'Husna helped me work through grief after losing my mother. Her compassionate guidance gave me the tools to heal and find peace. I\'m forever grateful for her support.',
    rating: 5
  },
  {
    name: 'David R.',
    role: 'College Student',
    image: 'https://images.unsplash.com/photo-1547736388-1b87be7a1ada?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBzdW5saWdodCUyMGxlYXZlc3xlbnwxfHx8fDE3NjE1MzQxMzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    text: 'I struggled with test anxiety throughout college. After working with Husna, my grades improved dramatically and I actually enjoy studying now. She changed my academic life!',
    rating: 5
  },
  {
    name: 'Amanda K.',
    role: 'Teacher',
    image: 'https://images.unsplash.com/photo-1606733572375-35620adc4a18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFjZWZ1bCUyMG1lZGl0YXRpb24lMjBuYXR1cmV8ZW58MXx8fHwxNzYxNTE3Nzc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    text: 'The personalized approach Husna takes makes all the difference. She didn\'t just address my symptoms, she helped me understand and heal the root causes of my stress.',
    rating: 5
  },
  {
    name: 'Robert P.',
    role: 'Retired Veteran',
    image: 'https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25maWRlbnQlMjBwcm9mZXNzaW9uYWwlMjB3b21hbnxlbnwxfHx8fDE3NjE1MzQxMzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    text: 'After years of struggling with PTSD-related nightmares, I finally found relief through hypnotherapy with Husna. She\'s incredibly skilled and patient. Highly recommend!',
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="relative py-20 overflow-hidden scroll-mt-28">
      {/* Background Decoration */}
      <img
        src={mindfulBloom}
        alt="Soft watercolor wash"
        className="pointer-events-none absolute -top-48 left-[-15%] w-[58rem] max-w-none opacity-35"
      />
      <img
        src={mindfulBloom}
        alt="Soft watercolor wash"
        className="pointer-events-none absolute -bottom-52 right-[-20%] w-[62rem] max-w-none opacity-35 rotate-180"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/92 via-[var(--color-calm)]/70 to-white/92" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[var(--color-trust)] via-[var(--color-blush)] to-[var(--color-growth)] rounded-2xl mb-6 shadow-lg shadow-[var(--color-trust)]/20">
            <Quote className="text-white" size={32} />
          </div>
          <h2 className="text-4xl sm:text-5xl text-[var(--color-text-dark)] mb-4">
            Stories of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-trust)] via-[var(--color-blush)] to-[var(--color-growth)]">Calm &amp; Renewal</span>
          </h2>
          <p className="text-xl text-[var(--color-text-dark)]/70">
            Real transformations from real people
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full p-6 bg-white/85 backdrop-blur-md hover:shadow-xl transition-shadow duration-300 border border-[var(--border)]">
                {/* Stars */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-[#f2cba0] fill-[#f2cba0]" size={18} />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-[var(--color-text-dark)]/80 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Client Info */}
                <div className="flex items-center space-x-4 pt-4 border-t border-[var(--border)]">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-white/60 shadow-sm">
                    <img
                      src={testimonial.image}
                      alt={`${testimonial.name} portrait`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-[var(--color-text-dark)]">{testimonial.name}</p>
                    <p className="text-sm text-[var(--color-text-dark)]/60">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12"
        >
          {[
            { number: '500+', label: 'Clients Helped' },
            { number: '98%', label: 'Success Rate' },
            { number: '8+', label: 'Years Experience' },
            { number: '5.0', label: 'Average Rating' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-[var(--border)]"
            >
              <div className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-trust)] via-[var(--color-blush)] to-[var(--color-growth)] mb-2">
                {stat.number}
              </div>
              <p className="text-sm text-[var(--color-text-dark)]/70">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
