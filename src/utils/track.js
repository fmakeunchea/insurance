// Fires conversion events to Google Analytics + Meta Pixel
// Call this after every successful form submission

export function trackLead(source, data = {}) {
  // Google Analytics event
  if (window.gtag) {
    window.gtag('event', 'generate_lead', {
      event_category: 'Lead',
      event_label: source,
      value: 1,
      ...data,
    });
  }

  // Meta Pixel event
  if (window.fbq) {
    window.fbq('track', 'Lead', {
      content_name: source,
      ...data,
    });
  }
}

export function trackQuote(source, data = {}) {
  if (window.gtag) {
    window.gtag('event', 'begin_checkout', {
      event_category: 'Quote',
      event_label: source,
      ...data,
    });
  }
  if (window.fbq) {
    window.fbq('track', 'InitiateCheckout', {
      content_name: source,
      ...data,
    });
  }
}

export function trackBooking() {
  if (window.gtag) {
    window.gtag('event', 'schedule_consultation', {
      event_category: 'Booking',
      event_label: 'Calendly Click',
    });
  }
  if (window.fbq) {
    window.fbq('track', 'Schedule');
  }
}
