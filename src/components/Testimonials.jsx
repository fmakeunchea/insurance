import { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, MapPin, ShieldCheck } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Marcus & Tanya Johnson',
    role: 'Parents of 3, Fredericksburg',
    text: 'We had been putting off life insurance for years because we didn\'t understand it. Fifi made the whole process incredibly simple. She took the time to explain term vs. whole life, helped us find a plan that fits our budget, and now we sleep better knowing our kids are protected.',
    rating: 5,
    initials: 'MJ',
    coverageType: 'Term Life — $500K',
  },
  {
    name: 'Dr. Angela Foster',
    role: 'Pediatrician, Stafford',
    text: 'What I appreciated most was the honesty. There was no pressure, no pushy sales tactics — just a genuine conversation about my options. Fifi helped me see gaps in my employer coverage I didn\'t even know about. I felt confident in my decision from day one.',
    rating: 5,
    initials: 'AF',
    coverageType: 'Whole Life — $250K',
  },
  {
    name: 'Gloria Williams',
    role: 'Retired Educator, Spotsylvania',
    text: 'After my husband passed, I realized I needed to get my own coverage sorted out. Fifi was compassionate, patient, and thorough. She never made me feel rushed. I\'m so grateful for the peace of mind I have now — my children won\'t have to worry about burial costs.',
    rating: 5,
    initials: 'GW',
    coverageType: 'Final Expense — $25K',
  },
  {
    name: 'David & Sarah Chen',
    role: 'Young Professionals, Fredericksburg',
    text: 'We just bought our first home and knew we needed coverage. Fifi broke everything down in a way that actually made sense. We got $750K in term coverage for less than our Netflix subscription. Honestly the best financial decision we\'ve made as a couple.',
    rating: 5,
    initials: 'DC',
    coverageType: 'Term Life — $750K',
  },
  {
    name: 'Robert Patterson',
    role: 'Small Business Owner, King George',
    text: 'As a business owner, I needed both personal and key-man coverage. Fifi understood my situation immediately and put together a comprehensive plan. Her follow-up is impeccable — she checks in quarterly to make sure everything still fits. Five stars all day.',
    rating: 5,
    initials: 'RP',
    coverageType: 'Whole Life + Term — $1M',
  },
  {
    name: 'Keisha Brooks',
    role: 'Single Mother, Woodbridge',
    text: 'I was worried I couldn\'t afford coverage as a single mom. Fifi found me a plan for $32/month that gives my daughter $250K of protection. She even helped me set up an education savings plan. Fifi genuinely cares about her clients.',
    rating: 5,
    initials: 'KB',
    coverageType: 'Term Life — $250K',
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  const getVisibleTestimonials = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      items.push(TESTIMONIALS[(activeIndex + i) % TESTIMONIALS.length]);
    }
    return items;
  };

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-navy-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-gold-600 font-semibold text-sm tracking-wider uppercase mb-4">
            Client Success Stories
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-4 leading-tight">
            Trusted by <span className="text-gold-600">1,200+ Families</span> in Virginia
          </h2>
          <p className="text-navy-500 text-lg leading-relaxed">
            Real stories from real people who took the step toward protecting their loved ones.
          </p>

          {/* Google Rating - prominent */}
          <div className="inline-flex items-center gap-3 bg-white rounded-full border border-navy-100 shadow-sm px-6 py-3 mt-6">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-5 h-5 text-gold-400 fill-gold-400" />
              ))}
            </div>
            <div className="h-5 w-px bg-navy-200" />
            <span className="text-navy-900 font-bold">4.9/5</span>
            <span className="text-navy-400 text-sm">from 128 reviews</span>
          </div>
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {getVisibleTestimonials().map((testimonial, i) => (
            <div
              key={`${activeIndex}-${i}`}
              className="relative bg-white rounded-2xl p-8 lg:p-9 shadow-lg shadow-navy-900/[0.04] border border-navy-100/80 hover:shadow-xl hover:border-gold-200/50 transition-all duration-300 flex flex-col"
            >
              {/* Large decorative quote */}
              <div className="absolute top-6 right-7 opacity-[0.06]">
                <Quote className="w-20 h-20 text-navy-900" />
              </div>

              {/* Rating */}
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className={`w-5 h-5 ${
                      j < testimonial.rating ? 'text-gold-400 fill-gold-400' : 'text-navy-200'
                    }`}
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-navy-700 leading-relaxed mb-6 flex-1 relative z-10">
                "{testimonial.text}"
              </p>

              {/* Coverage badge */}
              <div className="inline-flex items-center gap-1.5 bg-gold-50 text-gold-700 border border-gold-200/50 text-xs font-semibold px-3 py-2 rounded-lg mb-6 self-start">
                <ShieldCheck className="w-3.5 h-3.5" />
                {testimonial.coverageType}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-navy-100/50">
                <div className="w-14 h-14 bg-gradient-to-br from-navy-800 to-navy-900 rounded-full flex items-center justify-center shadow-md">
                  <span className="text-gold-400 font-bold text-base">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-navy-900">{testimonial.name}</p>
                  <p className="text-navy-400 text-sm flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-5 mt-10">
          <button
            onClick={prev}
            className="w-12 h-12 bg-white border border-navy-200 rounded-full flex items-center justify-center text-navy-400 hover:text-navy-900 hover:border-navy-400 hover:shadow-md transition-all"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-2.5 rounded-full transition-all ${
                  i === activeIndex ? 'bg-gold-500 w-8' : 'bg-navy-200 hover:bg-navy-300 w-2.5'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-12 h-12 bg-white border border-navy-200 rounded-full flex items-center justify-center text-navy-400 hover:text-navy-900 hover:border-navy-400 hover:shadow-md transition-all"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
