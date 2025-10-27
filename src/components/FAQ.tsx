import { motion } from 'motion/react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { HelpCircle } from 'lucide-react';
import mindfulBloom from '../assets/mindful-bloom.svg';

const faqs = [
  {
    question: 'What is hypnosis?',
    answer: 'Hypnosis is a natural, focused state of awareness where the subconscious mind becomes more receptive to positive suggestions and change. It\'s similar to the relaxed state you experience just before falling asleep or when deeply absorbed in a book or movie. During hypnosis, you remain fully aware and in control, able to accept or reject any suggestions.'
  },
  {
    question: 'Will I lose control during hypnosis?',
    answer: 'Absolutely not. This is one of the most common myths about hypnosis. You remain aware and in control at all times during a hypnotherapy session. You cannot be made to do anything against your will or values. Hypnosis is actually a state of heightened awareness and focus, not a loss of control. You can choose to come out of hypnosis at any time.'
  },
  {
    question: 'How many sessions will I need?',
    answer: 'The number of sessions varies depending on your individual goals and the issue being addressed. Some clients experience significant results in just 1-3 sessions, particularly for specific habits or phobias. More complex issues like deep-seated anxiety or long-term patterns may benefit from 6-10 sessions. During your initial consultation, we\'ll discuss your specific situation and create a personalized plan.'
  },
  {
    question: 'Can everyone be hypnotized?',
    answer: 'Most people can be hypnotized, as long as they\'re willing and open to the process. Hypnosis is a natural state that we all experience daily. The depth of hypnosis may vary from person to person, but even light hypnosis can be very effective. The key factors are your willingness to participate, ability to focus, and trust in the process and practitioner.'
  },
  {
    question: 'What issues can hypnotherapy help with?',
    answer: 'Hypnotherapy can help with a wide range of issues including stress and anxiety, sleep problems, confidence and self-esteem, fears and phobias, grief and loss, unwanted habits, pain management, weight management, performance enhancement, and much more. It works by accessing the subconscious mind to create lasting positive change from within.'
  },
  {
    question: 'Is hypnotherapy safe?',
    answer: 'Yes, hypnotherapy is completely safe when conducted by a trained and certified professional. It\'s a natural, non-invasive approach that has been used therapeutically for decades. There are no harmful side effects. Hypnosis is recognized by medical and psychological associations as a valid therapeutic tool.'
  },
  {
    question: 'What happens during a session?',
    answer: 'A typical session begins with a discussion about your goals and concerns. Then, I\'ll guide you into a relaxed, focused state using relaxation techniques and guided imagery. While in this state, we\'ll work together to address your specific issues using positive suggestions, visualization, and other therapeutic techniques. The session ends with you feeling refreshed and alert. Most sessions last 60-90 minutes.'
  },
  {
    question: 'Do you offer online sessions?',
    answer: 'Yes! I offer both in-person sessions in Sacramento, CA, and online sessions via secure video conferencing. Online hypnotherapy is just as effective as in-person sessions. Many clients prefer the convenience of meeting from the comfort of their own home. You\'ll need a quiet, private space and a stable internet connection.'
  }
];

export function FAQ() {
  return (
    <section className="relative py-20 overflow-hidden">
      <img
        src={mindfulBloom}
        alt="Relaxed watercolor background"
        className="pointer-events-none absolute -top-40 right-[-30%] w-[60rem] max-w-none opacity-30"
      />
      <img
        src={mindfulBloom}
        alt="Relaxed watercolor background"
        className="pointer-events-none absolute -bottom-48 left-[-25%] w-[55rem] max-w-none opacity-30 rotate-180"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/92 via-[var(--color-calm)]/70 to-white/92" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 mt-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[var(--color-trust)] via-[var(--color-blush)] to-[var(--color-growth)] rounded-2xl mb-6 shadow-lg shadow-[var(--color-trust)]/15">
            <HelpCircle className="text-white" size={32} />
          </div>
          <h2 className="text-4xl sm:text-5xl text-[var(--color-text-dark)] mb-4">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-trust)] via-[var(--color-blush)] to-[var(--color-growth)]">Questions</span>
          </h2>
          <p className="text-xl text-[var(--color-text-dark)]/70">
            Everything you need to know about hypnotherapy
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4 mt-12">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <AccordionItem 
                  value={`item-${index}`}
                  className="bg-white/85 backdrop-blur-md rounded-2xl px-6 border border-[var(--border)] shadow-sm hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left text-[var(--color-text-dark)] hover:text-[var(--color-trust)] py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[var(--color-text-dark)]/70 pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center bg-white/85 backdrop-blur-md rounded-2xl p-8 border border-[var(--border)] shadow-lg"
        >
          <h3 className="text-2xl text-[var(--color-text-dark)] mb-4">
            Still Have Questions?
          </h3>
          <p className="text-[var(--color-text-dark)]/70 mb-6">
            I'm here to help! Feel free to reach out and I'll be happy to answer any questions you may have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:hello@husnashams.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-[var(--color-trust)] hover:bg-[var(--color-deep-blue)] text-white rounded-lg transition-colors"
            >
              Email Me
            </a>
            <a 
              href="tel:+19165550123"
              className="inline-flex items-center justify-center px-6 py-3 bg-white hover:bg-gray-50 text-[var(--color-trust)] rounded-lg border border-[var(--color-trust)] transition-colors"
            >
              Call Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
