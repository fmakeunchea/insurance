import { useState } from 'react';
import { Phone, Mail, MapPin, Send, Clock, Calendar, Shield } from 'lucide-react';

export default function Contact() {
  const [data, setData] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [done, setDone] = useState(false);
  const set = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    try {
      await fetch('https://formspree.io/f/xpwzgkby', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, _subject: `Contact: ${data.name} — ${data.service || 'General'}` }),
      });
    } catch {}
    setDone(true);
  };

  const input = "w-full px-4 py-3 rounded-xl border border-navy-200 text-navy-900 placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500 text-sm";

  return (
    <section id="contact" className="py-20 sm:py-28 bg-navy-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold-600 font-semibold text-sm tracking-wider uppercase mb-4 block">Get in Touch</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-5">Let's Start a <span className="text-gold-600">Conversation</span></h2>
        </div>
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-navy-100">
              <h3 className="font-display text-lg font-semibold text-navy-900 mb-5">Contact Info</h3>
              {[
                { icon: Phone, label: 'Phone', value: '(540) 424-1852', href: 'tel:+15404241852' },
                { icon: Mail, label: 'Email', value: 'hanordinc@gmail.com', href: 'mailto:hanordinc@gmail.com' },
                { icon: MapPin, label: 'Location', value: 'Fredericksburg, Virginia' },
                { icon: Clock, label: 'Hours', value: 'Mon–Fri 9am–6pm' },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-navy-900 rounded-lg flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-gold-400" />
                  </div>
                  <div>
                    <p className="text-navy-400 text-xs">{label}</p>
                    {href ? <a href={href} className="text-navy-900 font-medium text-sm hover:text-gold-600">{value}</a> : <p className="text-navy-900 font-medium text-sm">{value}</p>}
                  </div>
                </div>
              ))}
            </div>
            <a href="https://calendly.com/harnordinc" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-4 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-xl transition-all">
              <Calendar className="w-5 h-5" /> Book a Free Consultation
            </a>
          </div>

          <div className="lg:col-span-3 bg-white rounded-2xl p-8 border border-navy-100">
            {done ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="font-display text-2xl font-bold text-navy-900 mb-3">Message Received!</h3>
                <p className="text-navy-500">I'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-5">
                <h3 className="font-display text-xl font-semibold text-navy-900 mb-4">Send Me a Message</h3>
                <div className="grid sm:grid-cols-2 gap-5">
                  <input type="text" name="name" value={data.name} onChange={set} required placeholder="Full Name" className={input} />
                  <input type="email" name="email" value={data.email} onChange={set} required placeholder="Email Address" className={input} />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <input type="tel" name="phone" value={data.phone} onChange={set} placeholder="Phone (optional)" className={input} />
                  <select name="service" value={data.service} onChange={set} className={input}>
                    <option value="">Service interested in...</option>
                    <option>Term Life</option>
                    <option>Whole Life</option>
                    <option>Final Expense</option>
                    <option>Family Protection</option>
                    <option>Retirement</option>
                    <option>Not Sure</option>
                  </select>
                </div>
                <textarea name="message" value={data.message} onChange={set} rows={4} required placeholder="Tell me about what you're looking for..." className={input + " resize-none"} />
                <button type="submit" className="w-full flex items-center justify-center gap-2 py-4 bg-navy-900 hover:bg-navy-800 text-white font-semibold rounded-xl transition-all active:scale-[0.98]">
                  <Send className="w-4 h-4" /> Send Message
                </button>
                <p className="text-navy-300 text-xs text-center flex items-center justify-center gap-1"><Shield className="w-3 h-3" /> Your info is private and never shared.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
