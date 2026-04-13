import { useState } from 'react';
import { X, Clock, Phone } from 'lucide-react';

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-white">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-center gap-3 text-sm relative">
        <Clock className="w-4 h-4 flex-shrink-0 hidden sm:block" />
        <span className="font-medium text-center">
          <span className="hidden sm:inline">Limited availability: </span>
          <strong>Only 7 free consultation slots left this week</strong>
          <span className="hidden md:inline"> — rates go up with age, don't wait</span>
        </span>
        <a
          href="https://calendly.com/harnordinc"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 inline-flex items-center gap-1.5 bg-white text-gold-700 font-bold text-xs px-3 py-1 rounded-full hover:bg-gold-50 transition-colors"
        >
          <Phone className="w-3 h-3" />
          Book Now
        </a>
        <button
          onClick={() => setVisible(false)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
