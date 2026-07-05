import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiSend } from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";
import SocialIcons from "../components/SocialIcons";
import AnimatedSection from "../components/AnimatedSection";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <AnimatedSection id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading eyebrow="Get In Touch" title="Contact Me" />

        <motion.div
          className="glass-card rounded-2xl p-8 grid md:grid-cols-2 gap-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h3 className="text-white font-semibold mb-4">Let's Connect</h3>
            <p className="text-slate-400 mb-6">
              Have a project in mind or just want to say hi? My inbox is
              always open.
            </p>
            <a
              href="mailto:hello@example.com"
              className="flex items-center gap-3 text-glow-300 hover:text-white transition-colors mb-8"
            >
              <FiMail /> hello@example.com
            </a>
            <SocialIcons />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-navy-900/60 border border-glow-400/20 text-white placeholder-slate-500 focus:outline-none focus:border-glow-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-navy-900/60 border border-glow-400/20 text-white placeholder-slate-500 focus:outline-none focus:border-glow-400"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-navy-900/60 border border-glow-400/20 text-white placeholder-slate-500 focus:outline-none focus:border-glow-400 resize-none"
            />
            <motion.button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary-600 text-white font-medium shadow-glow"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FiSend /> Send Message
            </motion.button>
            {sent && (
              <p className="text-sm text-glow-400 text-center">
                Thanks! Your message has been noted.
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

export default Contact;
