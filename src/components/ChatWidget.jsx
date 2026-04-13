import { useState, useEffect } from 'react';
import { MessageCircle, X, Send, Calendar, Phone } from 'lucide-react';

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    // Show the chat bubble hint after 10 seconds
    const timer = setTimeout(() => setShowBubble(true), 10000);
    // Hide it after 20 seconds
    const hideTimer = setTimeout(() => setShowBubble(false), 20000);
    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className="fixed bottom-20 lg:bottom-6 right-4 lg:right-6 z-50">
      {/* Chat panel */}
      {open && (
        <div className="mb-3 bg-white rounded-2xl shadow-2xl border border-navy-100 w-80 overflow-hidden animate-[slideUp_0.2s_ease-out]">
          {/* Header */}
          <div className="bg-navy-900 px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-gold-400">
                <img src="/fifi.jpg" alt="Fifi" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Fifi Makeunchea</p>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  <span className="text-navy-300 text-xs">Usually responds in 1 hour</span>
                </div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="text-navy-400 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat body */}
          <div className="p-5 bg-navy-50/50">
            {/* Agent message */}
            <div className="flex gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-full overflow-hidden flex-shrink-0 mt-0.5">
                <img src="/fifi.jpg" alt="Fifi" className="w-full h-full object-cover" />
              </div>
              <div className="bg-white rounded-xl rounded-tl-sm px-4 py-3 shadow-sm border border-navy-100 max-w-[85%]">
                <p className="text-navy-700 text-sm leading-relaxed">
                  Hi there! I'm Fifi, your local insurance agent in Fredericksburg.
                  How can I help you today?
                </p>
                <p className="text-navy-400 text-[10px] mt-1.5">Just now</p>
              </div>
            </div>

            {/* Quick actions */}
            <p className="text-navy-400 text-xs font-medium mb-2 ml-9">Quick actions:</p>
            <div className="space-y-2 ml-9">
              <a
                href="#quote"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2.5 w-full px-4 py-2.5 bg-white hover:bg-gold-50 border border-navy-100 hover:border-gold-200 rounded-xl text-sm text-navy-700 font-medium transition-all"
              >
                <Send className="w-4 h-4 text-gold-500" />
                Get a free quote
              </a>
              <a
                href="https://calendly.com/harnordinc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 w-full px-4 py-2.5 bg-white hover:bg-gold-50 border border-navy-100 hover:border-gold-200 rounded-xl text-sm text-navy-700 font-medium transition-all"
              >
                <Calendar className="w-4 h-4 text-gold-500" />
                Book a consultation
              </a>
              <a
                href="tel:+15404241852"
                className="flex items-center gap-2.5 w-full px-4 py-2.5 bg-white hover:bg-gold-50 border border-navy-100 hover:border-gold-200 rounded-xl text-sm text-navy-700 font-medium transition-all"
              >
                <Phone className="w-4 h-4 text-gold-500" />
                Call (540) 424-1852
              </a>
            </div>
          </div>

          {/* Footer */}
          <div className="px-5 py-3 border-t border-navy-100 bg-white">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block text-center text-navy-400 hover:text-gold-600 text-xs font-medium transition-colors"
            >
              Or send a message via the contact form
            </a>
          </div>
        </div>
      )}

      {/* Chat hint bubble */}
      {!open && showBubble && (
        <div className="mb-3 bg-white rounded-xl shadow-lg border border-navy-100 px-4 py-3 max-w-[220px] animate-[slideUp_0.3s_ease-out]">
          <p className="text-navy-700 text-sm">
            Hi! Need help with insurance? I'm here for you.
          </p>
          <button
            onClick={() => setShowBubble(false)}
            className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-navy-200 rounded-full flex items-center justify-center text-navy-500"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating chat button */}
      <button
        onClick={() => { setOpen(!open); setShowBubble(false); }}
        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-105 ${
          open
            ? 'bg-navy-900 hover:bg-navy-800'
            : 'bg-navy-900 hover:bg-navy-800 shadow-navy-900/30'
        }`}
      >
        {open ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-gold-400" />
        )}
      </button>
    </div>
  );
}
