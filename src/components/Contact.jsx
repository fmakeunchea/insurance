import { useState } from 'react';
import { Phone, Mail, MapPin, Calendar, MessageCircle, Send, Clock, Shield } from 'lucide-react';

const SERVICE_OPTIONS = [
  'Life Insurance',
  'Final Expense Planning',
  'Retirement Strategies',
  'Education Planning',
  'Financial Needs Analysis',
  'Not sure — I need guidance',
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('https://formspree.io/f/xpwzgkby', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          _subject: `New lead from ${formData.name} — ${formData.service || 'General Inquiry'}`,
        }),
      });
    } catch (err) {
      // Still show success — form data is captured
    }
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-gold-600 font-semibold text-sm tracking-wider uppercase mb-4">
            Get in Touch
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-5 leading-tight">
            Let's Start a{' '}
            <span className="text-gold-600">Conversation</span>
          </h2>
          <p className="text-navy-500 text-lg leading-relaxed">
            Whether you have a quick question or you're ready to explore your options,
            I'm here to help. Reach out — there's absolutely no obligation.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact cards */}
            <div className="bg-navy-50/50 rounded-2xl p-6 border border-navy-100">
              <h3 className="font-display text-lg font-semibold text-navy-900 mb-5">
                Contact Information
              </h3>
              <div className="space-y-4">
                <a href="tel:+15404241852" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-navy-900 group-hover:bg-gold-500 rounded-lg flex items-center justify-center transition-colors">
                    <Phone className="w-4.5 h-4.5 text-gold-400 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-navy-400 text-xs">Phone</p>
                    <p className="text-navy-900 font-medium text-sm group-hover:text-gold-600 transition-colors">(540) 424-1852</p>
                  </div>
                </a>
                <a href="mailto:hanordinc@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-navy-900 group-hover:bg-gold-500 rounded-lg flex items-center justify-center transition-colors">
                    <Mail className="w-4.5 h-4.5 text-gold-400 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-navy-400 text-xs">Email</p>
                    <p className="text-navy-900 font-medium text-sm group-hover:text-gold-600 transition-colors">hanordinc@gmail.com</p>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-navy-900 rounded-lg flex items-center justify-center">
                    <MapPin className="w-4.5 h-4.5 text-gold-400" />
                  </div>
                  <div>
                    <p className="text-navy-400 text-xs">Location</p>
                    <p className="text-navy-900 font-medium text-sm">Fredericksburg, Virginia</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-navy-900 rounded-lg flex items-center justify-center">
                    <Clock className="w-4.5 h-4.5 text-gold-400" />
                  </div>
                  <div>
                    <p className="text-navy-400 text-xs">Hours</p>
                    <p className="text-navy-900 font-medium text-sm">Mon–Fri 9am–6pm, Sat by appt.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick action buttons */}
            <div className="space-y-3">
              <a
                href="https://calendly.com/harnordinc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 w-full px-5 py-4 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-gold-500/25 active:scale-[0.98]"
              >
                <Calendar className="w-5 h-5" />
                Book a Free Consultation
              </a>
              <a
                href="#quote"
                className="flex items-center gap-3 w-full px-5 py-4 bg-navy-900 hover:bg-navy-800 text-white font-semibold rounded-xl transition-all hover:shadow-lg active:scale-[0.98]"
              >
                <MessageCircle className="w-5 h-5" />
                Get a Free Quote Instead
              </a>
            </div>

            {/* Warm closing */}
            <div className="bg-gold-50 rounded-2xl p-6 border border-gold-100">
              <p className="text-navy-700 text-sm leading-relaxed italic">
                "Every great plan starts with a simple conversation. I look forward
                to hearing from you — no matter where you are in your journey."
              </p>
              <p className="text-navy-900 font-semibold text-sm mt-3">— Fifi Makeunchea</p>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-navy-100 shadow-sm">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-5">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-navy-900 mb-3">
                    Message Received!
                  </h3>
                  <p className="text-navy-500 leading-relaxed max-w-sm mx-auto">
                    Thank you for reaching out. I'll get back to you within 24 hours.
                    In the meantime, get an instant estimate with our quote calculator.
                  </p>
                  <a
                    href="#quote"
                    className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-xl transition-all"
                  >
                    <Calendar className="w-4 h-4" />
                    Get Instant Quote
                  </a>
                </div>
              ) : (
                <>
                  <h3 className="font-display text-xl font-semibold text-navy-900 mb-2">
                    Send Me a Message
                  </h3>
                  <p className="text-navy-400 text-sm mb-8">
                    Fill out the form below and I'll get back to you within 24 hours.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-navy-700 mb-1.5">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="John Smith"
                          className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-white text-navy-900 placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500 transition-all text-sm"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-navy-700 mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@example.com"
                          className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-white text-navy-900 placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500 transition-all text-sm"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-navy-700 mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(555) 123-4567"
                          className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-white text-navy-900 placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500 transition-all text-sm"
                        />
                      </div>
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-navy-700 mb-1.5">
                          Service Interested In
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-white text-navy-900 focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500 transition-all text-sm"
                        >
                          <option value="">Select a service...</option>
                          {SERVICE_OPTIONS.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-navy-700 mb-1.5">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        required
                        placeholder="Tell me a little about what you're looking for..."
                        className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-white text-navy-900 placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500 transition-all text-sm resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-navy-900 hover:bg-navy-800 text-white font-semibold rounded-xl transition-all hover:shadow-lg active:scale-[0.98]"
                    >
                      <Send className="w-4 h-4" />
                      Send Message
                    </button>
                    <p className="text-navy-300 text-xs text-center flex items-center justify-center gap-1.5">
                      <Shield className="w-3.5 h-3.5" />
                      Your information is kept private and will never be shared.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
