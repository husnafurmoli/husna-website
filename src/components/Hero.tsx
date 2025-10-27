import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import mindfulBloom from '../assets/mindful-bloom.svg';
import { useRoute } from '../lib/route-context';

export function Hero() {
  const { navigate } = useRoute();
  const highlights = [
    'Personalized hypnotherapy tailored to your story',
    'Gentle techniques that honor mind and body',
    'A safe space to rest, reset, and rediscover joy'
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Mindful Background */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={mindfulBloom}
          alt="Soft watercolor bloom"
          className="pointer-events-none absolute -top-32 right-[-15%] w-[60rem] max-w-none opacity-70 blur-[2px]"
        />
        <img
          src={mindfulBloom}
          alt="Soft watercolor bloom"
          className="pointer-events-none absolute -bottom-40 left-[-20%] w-[55rem] max-w-none opacity-40 rotate-180"
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_color-mix(in_oklab,_var(--color-blush)_45%,_transparent)_0%,_transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/80 via-[var(--color-calm)]/75 to-white/80" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center bg-white/80 backdrop-blur-md px-5 py-2 rounded-full mb-6 shadow-sm"
            >
              <Sparkles className="text-[var(--color-trust)] mr-2" size={20} />
              <span className="text-sm text-[var(--color-text-dark)] px-3 py-1 rounded-full">
                Where calm minds begin again
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-7xl text-[var(--color-text-dark)] mb-6 leading-tight"
            >
              A Gentle Space for
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-trust)] via-[var(--color-blush)] to-[var(--color-growth)]">
                Mindful Healing
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-[var(--color-text-dark)]/80 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Slow down, breathe, and reconnect with your true self. Through gentle, evidence-based hypnotherapy, we create space for calm, clarity, and the joyful life waiting inside you.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="space-y-3 text-left mb-8"
            >
              {highlights.map((highlight, index) => (
                <li key={highlight} className="flex items-start space-x-3">
                  <CheckCircle2 className="text-[var(--color-trust)] mt-0.5" size={22} />
                  <span className="text-[var(--color-text-dark)]/75">{highlight}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex justify-center lg:justify-start"
            >
              <Button
                onClick={() => navigate('/contact')}
                size="lg"
                className="bg-[var(--color-trust)] hover:bg-[var(--color-deep-blue)] text-white group shadow-lg shadow-[var(--color-trust)]/25"
              >
                Book Your Session
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Animated Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-[600px]">
              <div className="pointer-events-none absolute -inset-8 bg-white/60 backdrop-blur-sm rounded-[45px] border border-[var(--border)]" />
              {/* Main Image */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full h-full rounded-[40px] overflow-hidden shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtZWRpdGF0aW9uJTIwc2Vhc2lkZXxlbnwxfHx8fDE3NjE1NDIzOTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Woman enjoying a mindful pause"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-trust)]/15 via-transparent to-white/10" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute inset-x-10 bottom-14 bg-white/80 backdrop-blur-md rounded-3xl p-6 shadow-lg border border-[var(--border)]"
              >
                <p className="text-sm text-[var(--color-text-dark)]/70 leading-relaxed">
                  "Hypnotherapy invites your nervous system to soften, your thoughts to settle, and your inner voice to become kind again."
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
