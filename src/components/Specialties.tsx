import { motion } from 'motion/react';
import { Brain, Heart, Moon, Shield, Sparkles, Target } from 'lucide-react';
import { Button } from './ui/button';
import mindfulBloom from '../assets/mindful-bloom.svg';

const specialties = [
  {
    icon: Brain,
    title: 'Anxiety, Stress & Worry',
    description: 'Hypnotherapy calms the nervous system and builds new, peaceful thought pathways so you can meet each day with steadiness.',
    color: 'from-[#72bcc7] to-[#3a7b8c]',
    emoji: '🧠'
  },
  {
    icon: Sparkles,
    title: 'Confidence & Self-Esteem',
    description: 'Reconnect with your inner voice, release self-doubt, and nourish the self-trust that helps you shine.',
    color: 'from-[#f4cbd0] to-[#e9a8b3]',
    emoji: '✨'
  },
  {
    icon: Moon,
    title: 'Sleep Improvement',
    description: 'Retrain your subconscious to welcome deep, restorative rest so you wake nourished and energized.',
    color: 'from-[#c8d7f5] to-[#9caedc]',
    emoji: '🌙'
  },
  {
    icon: Shield,
    title: 'Fears & Phobias',
    description: 'Gently release fear loops and replace them with grounded confidence so life feels open again.',
    color: 'from-[#9fd9c0] to-[#6ea98a]',
    emoji: '🛡️'
  },
  {
    icon: Heart,
    title: 'Grief Recovery',
    description: 'Honor your story, process your emotions, and rediscover softness after loss with compassionate support.',
    color: 'from-[#f5d9ce] to-[#e6bfae]',
    emoji: '💚'
  },
  {
    icon: Target,
    title: 'Habit Control',
    description: 'Invite new rituals that feel nourishing and aligned by transforming habits at their subconscious roots.',
    color: 'from-[#f8e3b5] to-[#eac28a]',
    emoji: '🎯'
  },
];

export function Specialties() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="specialties" className="relative py-20 overflow-hidden scroll-mt-28">
      <img
        src={mindfulBloom}
        alt="Soft pastel bloom"
        className="pointer-events-none absolute -top-48 left-[-18%] w-[55rem] max-w-none opacity-45"
      />
      <img
        src={mindfulBloom}
        alt="Soft pastel bloom"
        className="pointer-events-none absolute -bottom-56 right-[-22%] w-[60rem] max-w-none opacity-35 rotate-180"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/92 via-[var(--color-calm)]/70 to-white/92" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl text-[var(--color-text-dark)] mb-4">
            Gentle <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-trust)] via-[var(--color-blush)] to-[var(--color-growth)]">Areas of Care</span>
          </h2>
          <p className="text-xl text-[var(--color-text-dark)]/70 max-w-3xl mx-auto">
            Explore the spaces where focused, compassionate hypnotherapy can bring you back to balance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => {
            const Icon = specialty.icon;
            return (
              <motion.div
                key={specialty.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative bg-white/85 backdrop-blur-md rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-[var(--border)] overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${specialty.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                <div className="absolute inset-0 rounded-3xl border border-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon */}
                <div className="relative">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${specialty.color} rounded-2xl mb-4 shadow-lg shadow-black/10`}>
                    <Icon className="text-white" size={28} />
                  </div>
                  <span className="absolute -top-2 -right-2 text-3xl">{specialty.emoji}</span>
                </div>

                {/* Content */}
                <h3 className="text-[var(--color-text-dark)] mb-3">
                  {specialty.title}
                </h3>
                <p className="text-[var(--color-text-dark)]/70 mb-6 leading-relaxed">
                  {specialty.description}
                </p>

                {/* CTA */}
                <Button
                  onClick={scrollToContact}
                  variant="ghost"
                  className="text-[var(--color-deep-blue)] hover:text-[var(--color-trust)] hover:bg-white/70 p-0 h-auto group/btn"
                >
                  Learn More
                  <span className="ml-2 inline-block">→</span>
                </Button>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-lg text-[var(--color-text-dark)]/70 mb-6">
            Ready to begin your transformation journey?
          </p>
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-[var(--color-growth)] hover:bg-[var(--color-trust)] text-[var(--color-deep-blue)] shadow-md shadow-[var(--color-growth)]/25"
          >
            Schedule a Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
