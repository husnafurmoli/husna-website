import { motion } from 'motion/react';
import { Heart, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import mindfulBloom from '../assets/mindful-bloom.svg';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative overflow-hidden py-16 text-[var(--color-text-dark)]">
      <img
        src={mindfulBloom}
        alt="Soft watercolor bloom"
        className="pointer-events-none absolute -top-48 left-[-20%] w-[60rem] max-w-none opacity-30"
      />
      <img
        src={mindfulBloom}
        alt="Soft watercolor bloom"
        className="pointer-events-none absolute -bottom-52 right-[-18%] w-[58rem] max-w-none opacity-30 rotate-180"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/95 via-[var(--color-calm)]/65 to-white/95" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[var(--color-trust)] to-[var(--color-growth)] rounded-full flex items-center justify-center">
                <span className="text-white">HS</span>
              </div>
              <div>
                <h3 className="text-[var(--color-text-dark)]">Husna Shams</h3>
                <p className="text-xs text-[var(--color-text-dark)]/60">Certified Clinical Hypnotherapist</p>
              </div>
            </div>
            <p className="text-[var(--color-text-dark)]/70 text-sm mb-4 leading-relaxed">
              Helping you rewrite your story one thought at a time. Transform your mind, transform your life.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-10 h-10 bg-[var(--color-trust)]/10 hover:bg-[var(--color-trust)]/20 text-[var(--color-trust)] rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[var(--color-trust)]/10 hover:bg-[var(--color-trust)]/20 text-[var(--color-trust)] rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[var(--color-trust)]/10 hover:bg-[var(--color-trust)]/20 text-[var(--color-trust)] rounded-lg flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[var(--color-trust)]/10 hover:bg-[var(--color-trust)]/20 text-[var(--color-trust)] rounded-lg flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[var(--color-text-dark)] mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection('#home')}
                  className="text-[var(--color-text-dark)]/60 hover:text-[var(--color-trust)] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#specialties')}
                  className="text-[var(--color-text-dark)]/60 hover:text-[var(--color-trust)] transition-colors"
                >
                  Specialties
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#benefits')}
                  className="text-[var(--color-text-dark)]/60 hover:text-[var(--color-trust)] transition-colors"
                >
                  Benefits
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#about')}
                  className="text-[var(--color-text-dark)]/60 hover:text-[var(--color-trust)] transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#faqs')}
                  className="text-[var(--color-text-dark)]/60 hover:text-[var(--color-trust)] transition-colors"
                >
                  FAQs
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="text-[var(--color-text-dark)]/60 hover:text-[var(--color-trust)] transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[var(--color-text-dark)] mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-[var(--color-text-dark)]/70">
              <li>Anxiety & Stress Relief</li>
              <li>Confidence Building</li>
              <li>Sleep Improvement</li>
              <li>Fears & Phobias</li>
              <li>Grief Recovery</li>
              <li>Habit Control</li>
              <li>Personal Growth</li>
              <li>Online Sessions</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[var(--color-text-dark)] mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+19165550123" className="flex items-start space-x-3 text-[var(--color-text-dark)]/65 hover:text-[var(--color-trust)] transition-colors">
                  <Phone size={18} className="flex-shrink-0 mt-0.5" />
                  <span>(916) 555-0123</span>
                </a>
              </li>
              <li>
                <a href="mailto:hello@husnashams.com" className="flex items-start space-x-3 text-[var(--color-text-dark)]/65 hover:text-[var(--color-trust)] transition-colors">
                  <Mail size={18} className="flex-shrink-0 mt-0.5" />
                  <span>hello@husnashams.com</span>
                </a>
              </li>
              <li className="flex items-start space-x-3 text-[var(--color-text-dark)]/65">
                <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                <div>
                  <p>Sacramento, CA</p>
                  <p className="text-xs text-[var(--color-text-dark)]/50 mt-1">Online Sessions Available</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--border)]">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-[var(--color-text-dark)]/60 text-center md:text-left">
              © {currentYear} Husna Shams Hypnotherapy. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-sm text-[var(--color-text-dark)]/60">
              <span>Made with</span>
              <Heart className="text-red-400 fill-red-400" size={16} />
              <span>for healing and transformation</span>
            </div>
            <div className="flex space-x-6 text-sm text-[var(--color-text-dark)]/60">
              <button className="hover:text-[var(--color-trust)] transition-colors">Privacy Policy</button>
              <button className="hover:text-[var(--color-trust)] transition-colors">Terms of Service</button>
            </div>
          </div>
        </div>

        {/* Inspiring Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-[var(--color-text-dark)]/55 italic text-sm">
            "Every challenge we face comes with a silver lining."
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
