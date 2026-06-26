// Fires conversion events to Google Analytics + Meta Pixel + TikTok Pixel.
// Call these after key funnel actions so you can measure:
//   Visitors → Quiz Starts → Leads → Bookings.

export function trackLandingView(source = 'Start Landing') {
  if (window.gtag) {
    window.gtag('event', 'page_view', { event_category: 'Landing', event_label: source });
  }
  if (window.fbq) window.fbq('track', 'ViewContent', { content_name: source });
  if (window.ttq) window.ttq.track('ViewContent', { content_name: source });
}

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

  // TikTok Pixel event
  if (window.ttq) {
    window.ttq.track('SubmitForm', {
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
  if (window.ttq) {
    window.ttq.track('ClickButton', {
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
  if (window.ttq) {
    window.ttq.track('Contact', { content_name: 'Calendly Booking' });
  }
}
