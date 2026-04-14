import { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

export default function ClickToCall() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const fn = () => setShow(window.scrollY > 400);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  if (!show) return null;

  return (
    <a
      href="tel:+15404241852"
      className="fixed bottom-20 left-4 z-50 lg:hidden w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg shadow-green-500/30 flex items-center justify-center transition-all active:scale-95"
      aria-label="Call (540) 424-1852"
    >
      <Phone className="w-6 h-6 text-white" />
    </a>
  );
}
