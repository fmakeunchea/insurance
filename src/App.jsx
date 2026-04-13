import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CredentialStrip from './components/CredentialStrip';
import QuickLeadForm from './components/QuickLeadForm';
import CredibilityStrip from './components/CredibilityStrip';
import CarrierLogos from './components/CarrierLogos';
import About from './components/About';
import Services from './components/Services';
import RiskSection from './components/RiskSection';
import UrgencyBanner from './components/UrgencyBanner';
import CoverageComparison from './components/CoverageComparison';
import QuoteCalculator from './components/QuoteCalculator';
import HowItWorks from './components/HowItWorks';
import WhyWorkWithMe from './components/WhyWorkWithMe';
import Testimonials from './components/Testimonials';
import LocalTrust from './components/LocalTrust';
import LeadMagnet from './components/LeadMagnet';
import ResourcesSection from './components/ResourcesSection';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ExitIntentPopup from './components/ExitIntentPopup';
import FloatingCTA from './components/FloatingCTA';
import SocialProofToast from './components/SocialProofToast';
import ChatWidget from './components/ChatWidget';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';
import ScrollToTop from './components/ScrollToTop';

function HomePage() {
  return (
    <>
      <Hero />
      <CredentialStrip />
      <QuickLeadForm />
      <CredibilityStrip />

      {/* Brand Banner */}
      <section className="bg-white py-6">
        <div className="max-w-5xl mx-auto px-4">
          <a href="https://calendly.com/harnordinc" target="_blank" rel="noopener noreferrer" className="block rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <img src="/banner.png" alt="Protecting What Matters Most — Life Insurance for Individuals & Families — Free Consultation Available" className="w-full h-auto" />
          </a>
        </div>
      </section>

      <CarrierLogos />
      <About />
      <Services />
      <RiskSection />
      <UrgencyBanner />
      <CoverageComparison />
      <QuoteCalculator />
      <HowItWorks />
      <WhyWorkWithMe />
      <Testimonials />
      <LocalTrust />
      <LeadMagnet />
      <ResourcesSection />
      <FAQ />
      <FinalCTA />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <AnnouncementBar />
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>

        <Footer />

        {/* Lead generation overlays */}
        <ExitIntentPopup />
        <FloatingCTA />
        <SocialProofToast />
        <ChatWidget />
      </div>
    </BrowserRouter>
  );
}
