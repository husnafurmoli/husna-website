import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'motion/react';
import { useRoute } from '../lib/route-context';

const navItems = [
  { name: 'Home', to: '/' },
  { name: 'Specialties', to: '/specialties' },
  { name: 'Benefits', to: '/benefits' },
  { name: 'About', to: '/about' },
  { name: 'FAQs', to: '/faqs' },
  { name: 'Contact', to: '/contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { path, navigate } = useRoute();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (to: string) => {
    navigate(to);
    setMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg border-b border-[var(--border)] backdrop-blur-xl'
          : 'bg-white shadow-sm border-b border-[var(--border)]/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center space-x-2"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-trust)] via-[var(--color-blush)] to-[var(--color-growth)] rounded-2xl flex items-center justify-center shadow-md">
              <span className="text-white font-medium tracking-tight">HS</span>
            </div>
            <div>
              <h1 className="text-[var(--color-trust)] tracking-tight">Husna Shams</h1>
              <p className="text-xs text-[var(--color-text-dark)]/70">Mindful Clinical Hypnotherapy</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => handleNavigate(item.to)}
                className={`relative group transition-colors duration-200 ${
                  path === item.to
                    ? 'text-[var(--color-trust)]'
                    : 'text-[var(--color-text-dark)]/80 hover:text-[var(--color-trust)]'
                }`}
                aria-current={path === item.to ? 'page' : undefined}
              >
                {item.name}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-[var(--color-trust)] transition-all duration-200 ${
                    path === item.to ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </motion.button>
            ))}
            <Button
              onClick={() => handleNavigate('/contact')}
              className="bg-[var(--color-trust)] hover:bg-[var(--color-deep-blue)] text-white shadow-lg shadow-[var(--color-trust)]/20"
            >
              Book a Session
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-[var(--color-calm)] transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-[var(--border)] overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigate(item.to)}
                  className="block w-full text-left py-2 text-[var(--color-text-dark)]/80 hover:text-[var(--color-trust)] transition-colors"
                >
                  {item.name}
                </button>
              ))}
              <Button
                onClick={() => handleNavigate('/contact')}
                className="w-full bg-[var(--color-trust)] hover:bg-[var(--color-deep-blue)] text-white shadow-lg shadow-[var(--color-trust)]/20"
              >
                Book a Session
              </Button>
              <div className="pt-4 space-y-2 border-t border-[var(--border)]">
                <a href="tel:+1234567890" className="flex items-center space-x-2 text-sm text-[var(--color-text-dark)]">
                  <Phone size={16} />
                  <span>(916) 555-0123</span>
                </a>
                <a href="mailto:hello@husnashams.com" className="flex items-center space-x-2 text-sm text-[var(--color-text-dark)]">
                  <Mail size={16} />
                  <span>hello@husnashams.com</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
