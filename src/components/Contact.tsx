import { motion } from 'motion/react';
import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Phone, Mail, MapPin, Send, Calendar, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import mindfulBloom from '../assets/mindful-bloom.svg';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast.success('Message sent successfully! We\'ll be in touch soon.', {
      description: 'Thank you for reaching out. I look forward to connecting with you.'
    });

    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="relative py-20 overflow-hidden scroll-mt-28">
      {/* Background Elements */}
      <img
        src={mindfulBloom}
        alt="Calming watercolor"
        className="pointer-events-none absolute -top-48 left-[-20%] w-[60rem] max-w-none opacity-35"
      />
      <img
        src={mindfulBloom}
        alt="Calming watercolor"
        className="pointer-events-none absolute -bottom-52 right-[-22%] w-[62rem] max-w-none opacity-35 rotate-180"
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
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-trust)] via-[var(--color-blush)] to-[var(--color-growth)]">Connect</span>
          </h2>
          <p className="text-xl text-[var(--color-text-dark)]/70 max-w-2xl mx-auto">
            Ready to begin your transformation? I'd love to hear from you. Whether you're ready to book 
            your first session or have questions about hypnotherapy, please reach out.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/85 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-[var(--border)]">
              <h3 className="text-2xl text-[var(--color-text-dark)] mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number (Optional)</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(916) 555-0123"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me a bit about what you'd like to work on..."
                    required
                    className="mt-2 min-h-[150px]"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[var(--color-trust)] hover:bg-[var(--color-deep-blue)] text-white shadow-lg shadow-[var(--color-trust)]/25"
                  size="lg"
                >
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2" size={18} />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Right: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Info Cards */}
            <div className="bg-gradient-to-br from-[var(--color-trust)]/95 via-[#366274] to-[var(--color-deep-blue)] rounded-3xl p-8 text-white shadow-xl">
              <h3 className="text-2xl mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-white/80 mb-1">Phone</p>
                    <a href="tel:+19165550123" className="hover:underline">
                      (916) 555-0123
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-white/80 mb-1">Email</p>
                    <a href="mailto:hello@husnashams.com" className="hover:underline">
                      hello@husnashams.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-white/80 mb-1">Location</p>
                    <p>Sacramento, CA</p>
                    <p className="text-sm text-white/80 mt-1">Online Sessions Available Worldwide</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Calendar size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-white/80 mb-1">Availability</p>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 3:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Booking */}
            <div className="bg-white/85 backdrop-blur-md rounded-3xl p-8 text-[var(--color-text-dark)] shadow-xl border border-[var(--border)]">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[var(--color-growth)] via-[var(--color-blush)] to-[var(--color-trust)] flex items-center justify-center text-white shadow-md">
                  <Calendar size={32} />
                </div>
                <h3 className="text-2xl mb-3">Ready to Book?</h3>
                <p className="mb-6 text-[var(--color-text-dark)]/70">
                  Schedule your free 15-minute consultation to see if hypnotherapy feels like the right fit.
                </p>
                <Button
                  className="w-full bg-[var(--color-growth)] hover:bg-[var(--color-trust)] text-[var(--color-deep-blue)] shadow-md shadow-[var(--color-growth)]/30"
                  size="lg"
                >
                  Book Free Consultation
                </Button>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/85 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-[var(--border)]">
              <h3 className="text-xl text-[var(--color-text-dark)] mb-4 text-center">Connect on Social</h3>
              <div className="flex justify-center space-x-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-gradient-to-br from-[var(--color-trust)] via-[var(--color-blush)] to-[var(--color-growth)] rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform"
                  aria-label="Facebook"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-gradient-to-br from-[var(--color-trust)] via-[var(--color-blush)] to-[var(--color-growth)] rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-gradient-to-br from-[var(--color-trust)] via-[var(--color-blush)] to-[var(--color-growth)] rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-gradient-to-br from-[var(--color-trust)] via-[var(--color-blush)] to-[var(--color-growth)] rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform"
                  aria-label="YouTube"
                >
                  <Youtube size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
