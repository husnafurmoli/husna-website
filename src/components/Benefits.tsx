import { motion } from 'motion/react';
import { CheckCircle2, Lightbulb, Zap, TrendingUp } from 'lucide-react';
import mindfulBloom from '../assets/mindful-bloom.svg';

const benefits = [
  {
    icon: '🧘',
    title: 'Reduce Stress & Anxiety',
    description: 'Experience profound calmness and mental clarity'
  },
  {
    icon: '🎯',
    title: 'Improve Focus & Performance',
    description: 'Enhance concentration and achieve your goals'
  },
  {
    icon: '🚀',
    title: 'Overcome Habits & Phobias',
    description: 'Break free from limiting patterns and fears'
  },
  {
    icon: '💪',
    title: 'Boost Confidence & Motivation',
    description: 'Unlock your inner strength and self-belief'
  },
  {
    icon: '😴',
    title: 'Enhance Sleep & Well-being',
    description: 'Enjoy deeper, more restorative rest'
  },
  {
    icon: '✨',
    title: 'Transform from Within',
    description: 'Create lasting change at the subconscious level'
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="relative py-20 overflow-hidden scroll-mt-28">
      {/* Background Texture */}
      <img
        src={mindfulBloom}
        alt="Calming watercolor wash"
        className="pointer-events-none absolute -top-40 right-[-25%] w-[60rem] max-w-none opacity-35"
      />
      <img
        src={mindfulBloom}
        alt="Calming watercolor wash"
        className="pointer-events-none absolute -bottom-48 left-[-18%] w-[52rem] max-w-none opacity-35 rotate-180"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/92 via-[var(--color-calm)]/70 to-white/92" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-md px-5 py-2 rounded-full mb-6 shadow-sm"
            >
              <Sparkles className="text-[var(--color-trust)]" size={20} />
              <span className="text-sm text-[var(--color-text-dark)]">What shifts when we slow down</span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl text-[var(--color-text-dark)] mb-6 leading-tight">
              Transform at <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-trust)] via-[var(--color-blush)] to-[var(--color-growth)]">your own pace</span>
            </h2>

            <p className="text-lg text-[var(--color-text-dark)]/70 mb-8 leading-relaxed">
              Hypnotherapy works with the powerful mind-body connection to create profound, lasting change. 
              By accessing your subconscious mind, we can reprogram limiting beliefs and unlock your true potential.
            </p>

            {/* Benefits List */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[var(--color-trust)]/15 via-white to-[var(--color-growth)]/20 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-200 shadow-sm">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="text-[var(--color-text-dark)] mb-1">{benefit.title}</h4>
                    <p className="text-sm text-[var(--color-text-dark)]/60">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/85 backdrop-blur-md rounded-2xl p-6 border border-[var(--border)] shadow-md"
            >
              <p className="text-[var(--color-text-dark)] italic">
                "Your subconscious already knows how to heal. Together, we simply clear the path so calm and confidence can return."
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Visual Representation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Mind Illustration */}
            <div className="relative w-full h-[600px]">
              {/* Main Circle - Conscious Mind */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-gradient-to-br from-[var(--color-trust)]/22 via-white/40 to-[var(--color-growth)]/18 rounded-full flex items-center justify-center border-4 border-[var(--color-trust)]/25">
                <div className="text-center">
                  <div className="text-6xl mb-4">🧠</div>
                  <p className="text-[var(--color-trust)]">Conscious Mind</p>
                  <p className="text-xs text-[var(--color-text-dark)]/60 mt-2">10% of mental focus</p>
                </div>
              </div>

              {/* Larger Circle - Subconscious Mind */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-[var(--color-growth)]/24 via-white/30 to-[var(--color-trust)]/18 rounded-full flex items-center justify-center border-4 border-[var(--color-growth)]/25">
                <div className="text-center pt-32">
                  <div className="text-6xl mb-4">💎</div>
                  <p className="text-[var(--color-growth)]">Subconscious Mind</p>
                  <p className="text-xs text-[var(--color-text-dark)]/60 mt-2">Where transformation blooms</p>
                </div>
              </div>

              {/* Floating Benefits */}
              <div className="absolute top-20 right-0 bg-white/85 backdrop-blur-md px-4 py-3 rounded-xl shadow-lg border border-[var(--border)]">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="text-[var(--color-growth)]" size={20} />
                  <span className="text-sm text-[var(--color-text-dark)]">Deep relaxation</span>
                </div>
              </div>

              <div className="absolute top-1/2 left-0 bg-white/85 backdrop-blur-md px-4 py-3 rounded-xl shadow-lg border border-[var(--border)]">
                <div className="flex items-center space-x-2">
                  <Lightbulb className="text-[var(--color-trust)]" size={20} />
                  <span className="text-sm text-[var(--color-text-dark)]">Fresh insights</span>
                </div>
              </div>

              <div className="absolute bottom-32 right-4 bg-white/85 backdrop-blur-md px-4 py-3 rounded-xl shadow-lg border border-[var(--border)]">
                <div className="flex items-center space-x-2">
                  <Zap className="text-[#f2cba0]" size={20} />
                  <span className="text-sm text-[var(--color-text-dark)]">Aligned habits</span>
                </div>
              </div>

              <div className="absolute bottom-20 left-4 bg-white/85 backdrop-blur-md px-4 py-3 rounded-xl shadow-lg border border-[var(--border)]">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="text-[var(--color-growth)]" size={20} />
                  <span className="text-sm text-[var(--color-text-dark)]">Lasting ease</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Sparkles({ className, size }: { className?: string; size?: number }) {
  return (
    <svg
      width={size || 24}
      height={size || 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364-.707-.707M6.343 6.343l-.707-.707m12.728 0-.707.707M6.343 17.657l-.707.707" />
    </svg>
  );
}
