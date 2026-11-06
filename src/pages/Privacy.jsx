import { useEffect } from 'react';
import SEO from '../components/SEO';

const EFFECTIVE_DATE = 'November 6, 2026';

const SECTIONS = [
  {
    title: 'Who we are',
    body: [
      'Cornerstone Life Advisors ("we," "us," or "our") is the insurance practice of Fifi Makeunchea, a licensed life insurance agent based in Spotsylvania, Virginia. This policy explains what information we collect when you visit cornerstonelifeinsure.com, fill out one of our forms, or respond to one of our ads on Facebook or Instagram, and how we use it.',
    ],
  },
  {
    title: 'Information we collect',
    body: ['When you request a quote, book a call, take our quiz, download a guide, or contact us, we may collect:'],
    list: [
      'Your name, phone number, email address, and ZIP code',
      'Basic details you choose to share to help us quote coverage, such as your age range, coverage interest, and the best time to reach you',
      'Your answers to our Family Protection Score quiz or quote calculator',
      'Messages you send us',
    ],
    after: [
      'We also automatically collect limited technical information when you visit our website, such as your browser type, device, pages viewed, and how you arrived at our site. This is collected through cookies and similar technologies described below.',
    ],
  },
  {
    title: 'How we use your information',
    list: [
      'To contact you about the quote, consultation, or information you requested',
      'To prepare life insurance quotes and recommendations for you',
      'To schedule and hold consultations',
      'To send you the guides or resources you asked for',
      'To follow up with you about your request',
      'To understand how visitors use our website and improve our ads and content',
      'To comply with legal and regulatory requirements',
    ],
  },
  {
    title: 'Calls, texts, and emails',
    body: [
      'By submitting your phone number and email through our website or a Facebook or Instagram lead form, you agree that Cornerstone Life Advisors may contact you by phone call, text message, and email about your insurance request, including through automated systems. Consent is not a condition of purchase. Message and data rates may apply. Message frequency varies.',
      'You can opt out at any time: reply STOP to any text message, click "unsubscribe" in any email, or tell us on a call that you no longer wish to be contacted.',
    ],
  },
  {
    title: 'How we share your information',
    body: [
      'We do not sell or rent your personal information. We share it only as needed to serve you:',
    ],
    list: [
      'With insurance carriers, when you ask us to request a quote or submit an application on your behalf',
      'With service providers that help us run our business, such as our website host, form processor (Formspree), scheduling tool (Calendly), email and text messaging providers, and analytics providers, who may use it only to provide their services to us',
      'When required by law, regulation, or legal process, or to protect our rights',
    ],
  },
  {
    title: 'Cookies, analytics, and advertising',
    body: [
      'Our website uses Google Analytics to understand how visitors use the site, and the Meta Pixel to measure and improve our Facebook and Instagram ads. These tools use cookies and similar technologies and may collect information about your visit, such as pages viewed and actions taken.',
      'You can block or delete cookies in your browser settings. You can learn more about and control how Google and Meta use this data at policies.google.com/technologies/ads and in your Facebook ad preferences.',
    ],
  },
  {
    title: 'Facebook and Instagram lead forms',
    body: [
      'If you submit a lead form in a Facebook or Instagram ad, Meta shares the information you entered with us so we can respond to your request. Meta\'s own collection and use of your information is governed by Meta\'s Privacy Policy.',
    ],
  },
  {
    title: 'Health information',
    body: [
      'We do not ask for detailed medical information through our website or ads. If you later apply for coverage, the insurance carrier may ask health questions as part of its application, and that information is handled under the carrier\'s privacy practices.',
    ],
  },
  {
    title: 'How we protect your information',
    body: [
      'We use reasonable safeguards to protect your information and limit access to people who need it to serve you. No method of transmission or storage is completely secure, so we cannot guarantee absolute security.',
    ],
  },
  {
    title: 'How long we keep it',
    body: [
      'We keep your information for as long as needed to respond to your request, service any policy you buy, and meet legal and regulatory record-keeping requirements.',
    ],
  },
  {
    title: 'Your choices and rights',
    body: [
      'You can ask us to access, correct, or delete the personal information we hold about you, or to stop contacting you. Depending on where you live, including Virginia, you may have additional rights under state privacy law. To make a request, contact us using the details below. We will not discriminate against you for exercising your rights.',
    ],
  },
  {
    title: 'Children',
    body: [
      'Our website and services are intended for adults. We do not knowingly collect personal information from children under 13.',
    ],
  },
  {
    title: 'Changes to this policy',
    body: [
      'We may update this policy from time to time. The updated version will be posted on this page with a new effective date.',
    ],
  },
];

export default function Privacy() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Privacy Policy"
        description="How Cornerstone Life Advisors collects, uses, and protects your personal information."
        path="/privacy"
      />

      <section className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 pt-32 pb-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-3">Privacy Policy</h1>
          <p className="text-navy-300">Effective {EFFECTIVE_DATE}</p>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4 text-navy-700 leading-relaxed">
          {SECTIONS.map((s) => (
            <div key={s.title} className="mb-10">
              <h2 className="font-display text-2xl font-bold text-navy-900 mb-4">{s.title}</h2>
              {s.body?.map((p, i) => <p key={i} className="mb-4">{p}</p>)}
              {s.list && (
                <ul className="list-disc pl-6 mb-4 space-y-1">
                  {s.list.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              )}
              {s.after?.map((p, i) => <p key={i} className="mb-4">{p}</p>)}
            </div>
          ))}

          <div className="mb-10">
            <h2 className="font-display text-2xl font-bold text-navy-900 mb-4">Contact us</h2>
            <p className="mb-1">Cornerstone Life Advisors — Fifi Makeunchea</p>
            <p className="mb-1">Spotsylvania, VA 22553</p>
            <p className="mb-1">Email: <a href="mailto:fifi@cornerstonelifeinsure.com" className="text-gold-600 underline">fifi@cornerstonelifeinsure.com</a></p>
            <p className="mb-1">Phone: <a href="tel:+15404241852" className="text-gold-600 underline">(540) 424-1852</a></p>
          </div>
        </div>
      </section>
    </div>
  );
}
