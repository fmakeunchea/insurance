import { useState, useEffect } from 'react';
import { CheckCircle, X } from 'lucide-react';

const NOTIFICATIONS = [
  { name: 'Sarah M.', location: 'Fredericksburg', action: 'just requested a free quote', time: '2 min ago' },
  { name: 'Marcus T.', location: 'Stafford', action: 'booked a consultation', time: '5 min ago' },
  { name: 'Angela R.', location: 'Spotsylvania', action: 'got approved for $500K coverage', time: '12 min ago' },
  { name: 'David L.', location: 'King George', action: 'just requested a free quote', time: '15 min ago' },
  { name: 'Keisha B.', location: 'Woodbridge', action: 'booked a consultation', time: '18 min ago' },
  { name: 'Robert & Kim P.', location: 'Fredericksburg', action: 'started a family plan', time: '22 min ago' },
  { name: 'James W.', location: 'Stafford', action: 'just requested a free quote', time: '25 min ago' },
  { name: 'Tanya J.', location: 'Manassas', action: 'got approved for $250K coverage', time: '30 min ago' },
];

export default function SocialProofToast() {
  const [current, setCurrent] = useState(null);
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (dismissed) return;

    // Start showing after 15 seconds on the page
    const initialDelay = setTimeout(() => {
      showNotification();
    }, 15000);

    return () => clearTimeout(initialDelay);
  }, [dismissed]);

  useEffect(() => {
    if (dismissed || index === 0) return;

    // Show next notification every 30-45 seconds
    const delay = 30000 + Math.random() * 15000;
    const timer = setTimeout(() => {
      showNotification();
    }, delay);

    return () => clearTimeout(timer);
  }, [index, dismissed]);

  const showNotification = () => {
    const notification = NOTIFICATIONS[index % NOTIFICATIONS.length];
    setCurrent(notification);
    setVisible(true);

    // Auto-hide after 5 seconds
    setTimeout(() => {
      setVisible(false);
      setIndex((prev) => prev + 1);
    }, 5000);
  };

  if (!current || dismissed) return null;

  return (
    <div
      className={`fixed bottom-20 lg:bottom-6 left-4 lg:left-6 z-40 transition-all duration-500 ${
        visible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-4 opacity-0 pointer-events-none'
      }`}
    >
      <div className="bg-white rounded-xl shadow-xl border border-navy-100 px-4 py-3 flex items-center gap-3 max-w-xs">
        <div className="w-9 h-9 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0">
          <CheckCircle className="w-5 h-5 text-green-500" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-navy-900 text-sm font-medium truncate">
            {current.name} in {current.location}
          </p>
          <p className="text-navy-400 text-xs">
            {current.action} — {current.time}
          </p>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="text-navy-300 hover:text-navy-500 flex-shrink-0"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
