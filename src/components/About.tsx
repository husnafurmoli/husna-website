import { motion } from 'motion/react';
import { Award, BookOpen, Heart, Users } from 'lucide-react';
import { Button } from './ui/button';
import mindfulBloom from '../assets/mindful-bloom.svg';
import { useRoute } from '../lib/route-context';

const credentials = [
  {
    icon: Award,
    title: 'Certified Clinical Hypnotherapist',
    subtitle: 'HMI College of Hypnotherapy'
  },
  {
    icon: Users,
    title: 'Member, American Hypnosis Association',
    subtitle: 'AHA Professional Member'
  },
  {
    icon: BookOpen,
    title: 'Specialized Training',
    subtitle: 'Anxiety Relief, Inner Child Healing, Confidence Building'
  },
  {
    icon: Heart,
    title: '500+ Lives Transformed',
    subtitle: 'Helping clients since 2015'
  },
];

export function About() {
  const { navigate } = useRoute();

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Decorative Elements */}
      <img
        src={mindfulBloom}
        alt="Soft watercolor aura"
        className="pointer-events-none absolute -top-56 right-[-25%] w-[60rem] max-w-none opacity-40"
      />
      <img
        src={mindfulBloom}
        alt="Soft watercolor aura"
        className="pointer-events-none absolute -bottom-52 left-[-22%] w-[58rem] max-w-none opacity-35 rotate-180"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/90 via-[var(--color-calm)]/70 to-white/92" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-[42px] overflow-hidden shadow-2xl border border-[var(--border)] bg-white/80 backdrop-blur-sm">
                <img
                  src="https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25maWRlbnQlMjBwcm9mZXNzaW9uYWwlMjB3b21hbnxlbnwxfHx8fDE3NjE1MzQxMzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Husna Shams, CCHt"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-trust)]/18 via-transparent to-white/10" />
              </div>

              {/* Floating Quote Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl max-w-xs border border-[var(--border)]"
              >
                <p className="text-sm text-[var(--color-text-dark)] italic mb-2">
                  "Every person has the power to rewrite their subconscious story."
                </p>
                <p className="text-xs text-[var(--color-trust)]">— Husna Shams</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center bg-white/85 backdrop-blur-md px-5 py-2 rounded-full mb-5 shadow-sm"
            >
              <Heart className="text-[var(--color-trust)] mr-2" size={20} />
              <span className="text-sm text-[var(--color-text-dark)] px-3 py-1 rounded-full">Meet Your Guide</span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl text-[var(--color-text-dark)] mb-5 leading-tight">
              Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-trust)] via-[var(--color-blush)] to-[var(--color-growth)]">Husna Shams</span>, CCHt
            </h2>

            <div className="space-y-4 text-[var(--color-text-dark)]/70 leading-relaxed mb-8">
              <p>
                Welcome! I'm Husna Shams, a Certified Clinical Hypnotherapist dedicated to helping 
                individuals rediscover their inner calm, confidence, and clarity through the 
                transformative power of hypnotherapy.
              </p>
              <p>
                My journey to hypnotherapy began with a deep desire to help others reconnect with 
                their authentic selves. After witnessing the profound impact that subconscious healing 
                had on my own life, I knew I had found my calling. I pursued extensive training at 
                the HMI College of Hypnotherapy and have since helped hundreds of clients overcome 
                anxiety, build confidence, improve sleep, and create lasting positive change.
              </p>
              <p>
                I believe that every challenge we face comes with a silver lining — an opportunity 
                for growth and transformation. Through personalized hypnotherapy sessions, I guide 
                clients to access their subconscious mind, release limiting beliefs, and embrace 
                their true potential.
              </p>
              <p>
                Whether you're struggling with stress, seeking to overcome fears, or simply wanting 
                to live a more fulfilling life, I'm here to support you every step of the way. 
                Together, we'll unlock the extraordinary power of your mind to create the life 
                you've always dreamed of.
              </p>
            </div>

            {/* Credentials Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {credentials.map((credential, index) => {
                const Icon = credential.icon;
                return (
                  <motion.div
                    key={credential.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3 p-4 bg-white/85 backdrop-blur-md rounded-xl border border-[var(--border)] hover:shadow-md transition-shadow"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[var(--color-trust)] via-[var(--color-blush)] to-[var(--color-growth)] rounded-lg flex items-center justify-center shadow-sm">
                      <Icon className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm text-[var(--color-text-dark)] mb-1">{credential.title}</h4>
                      <p className="text-xs text-[var(--color-text-dark)]/60">{credential.subtitle}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <Button
              onClick={() => navigate('/contact')}
              size="lg"
              className="bg-[var(--color-growth)] hover:bg-[var(--color-trust)] text-[var(--color-deep-blue)] shadow-lg shadow-[var(--color-growth)]/30"
            >
              Schedule Your Session
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
