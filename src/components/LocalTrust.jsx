import { MapPin, CheckCircle, Phone, Calendar } from 'lucide-react';

const AREAS_SERVED = [
  'Fredericksburg',
  'Stafford',
  'Spotsylvania',
  'King George',
  'Caroline County',
  'Woodbridge',
  'Manassas',
  'Lake Ridge',
  'Culpeper',
  'Northern Virginia',
];

export default function LocalTrust() {
  return (
    <section className="py-16 sm:py-20 bg-navy-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-gold-50 border border-gold-200 rounded-full px-4 py-1.5 mb-5">
              <MapPin className="w-4 h-4 text-gold-600" />
              <span className="text-gold-700 text-sm font-medium">Proudly Serving Virginia Families</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-5 leading-tight">
              Your <span className="text-gold-600">Local</span> Insurance Advisor in Fredericksburg
            </h2>

            <p className="text-navy-600 leading-relaxed mb-5">
              I'm not a call center or an online-only agent. I'm your neighbor — right here in
              Fredericksburg, Virginia. When you work with me, you get someone who understands
              this community, knows the local cost of living, and is available for face-to-face
              meetings when you need them.
            </p>
            <p className="text-navy-600 leading-relaxed mb-8">
              Whether you're a military family near Fort Barfoot, a young professional in downtown
              Fredericksburg, or a retiree in Spotsylvania — I've helped families just like yours
              find the right coverage at the right price.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://calendly.com/harnordinc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-xl transition-all hover:shadow-lg text-sm"
              >
                <Calendar className="w-4 h-4" />
                Meet In Person — Free
              </a>
              <a
                href="tel:+15404241852"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-navy-900 hover:bg-navy-800 text-white font-semibold rounded-xl transition-all text-sm"
              >
                <Phone className="w-4 h-4" />
                Call (540) 424-1852
              </a>
            </div>
          </div>

          {/* Right: Areas served */}
          <div className="bg-white rounded-2xl border border-navy-100 p-7 shadow-sm">
            <h3 className="font-display text-lg font-semibold text-navy-900 mb-2">
              Areas I Serve
            </h3>
            <p className="text-navy-400 text-sm mb-5">
              In-person meetings available. Phone and video consultations for all of Virginia.
            </p>

            <div className="grid grid-cols-2 gap-2.5">
              {AREAS_SERVED.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-2 py-2 px-3 bg-navy-50/70 rounded-lg"
                >
                  <CheckCircle className="w-4 h-4 text-gold-500 flex-shrink-0" />
                  <span className="text-navy-700 text-sm font-medium">{area}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-navy-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                <img src="/fifi.jpg" alt="Fifi Makeunchea" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-navy-900 font-semibold text-sm">Fifi Makeunchea</p>
                <p className="text-navy-400 text-xs">Licensed Agent • Cornerstone Life Advisors</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
