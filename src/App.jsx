import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import QuickForm from './components/QuickForm';
import Services from './components/Services';
import QuoteCalculator from './components/QuoteCalculator';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ExitPopup from './components/ExitPopup';
import FloatingCTA from './components/FloatingCTA';
import ChatWidget from './components/ChatWidget';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';

function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <QuickForm />
      <Services />
      <QuoteCalculator />
      <About />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white font-sans text-navy-900">
        <AnnouncementBar />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
        <Footer />
        <ExitPopup />
        <FloatingCTA />
        <ChatWidget />
      </div>
    </BrowserRouter>
  );
}
