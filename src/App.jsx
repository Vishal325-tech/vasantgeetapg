import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Rooms from './components/Rooms';
import Facilities from './components/Facilities';
import Mess from './components/Mess';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Contact from './components/Contact';
import FutureCoaching from './components/FutureCoaching';
import EcosystemVision from './components/EcosystemVision';
import WhyChoose from './components/WhyChoose';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Footer from './components/Footer';
import MobileBottomBar from './components/MobileBottomBar';
import EnquiryModal from './components/EnquiryModal';
import StickyContact from './components/StickyContact';
import {
  staticSettings,
  staticRooms,
  staticFacilities,
  staticWeeklyMenu,
  staticGallery,
  staticReviews,
  staticFaqs,
} from './services/staticData';

export default function App() {
  const [settings]    = useState(staticSettings);
  const [rooms]       = useState(staticRooms);
  const [facilities]  = useState(staticFacilities);
  const [weeklyMenu]  = useState(staticWeeklyMenu);
  const [gallery]     = useState(staticGallery);
  const [reviews, setReviews] = useState(staticReviews);
  const [faqs]        = useState(staticFaqs);

  // Modals
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [selectedRoomPrefill, setSelectedRoomPrefill] = useState('');

  const handleOpenEnquiry = (roomType = '') => {
    setSelectedRoomPrefill(roomType);
    setEnquiryModalOpen(true);
  };

  // Smooth-scroll helper used by Navbar / About
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

      {/* 1. Header / Sticky Navigation */}
      <Navbar
        settings={settings}
        onOpenEnquiry={() => handleOpenEnquiry()}
        onOpenAdmin={() => {}}
        onOpenCoaching={() => scrollToSection('coaching')}
      />

      {/* 2. Hero Section */}
      <Hero
        settings={settings}
        onOpenEnquiry={() => handleOpenEnquiry()}
      />

      {/* 3. About Vasant Geetha */}
      <About
        onOpenEnquiry={(service) => handleOpenEnquiry(service)}
        onOpenCoaching={() => scrollToSection('coaching')}
      />

      {/* 4. PG Rooms Section */}
      <Rooms
        rooms={rooms}
        onOpenEnquiry={(type) => handleOpenEnquiry(type)}
      />

      {/* 5. Facilities Section */}
      <Facilities facilities={facilities} />

      {/* 6. Mess / Food & Weekly Menu Section */}
      <Mess
        weeklyMenu={weeklyMenu}
        onOpenEnquiry={(type) => handleOpenEnquiry(type)}
      />

      {/* 7. Gallery Section */}
      <Gallery gallery={gallery} />

      {/* 8. Location Section */}
      <Location settings={settings} />

      {/* 9. Contact / Enquiry Section */}
      <Contact
        settings={settings}
        prefillRoom={selectedRoomPrefill}
      />

      {/* 10. Future Coaching Section (COMING SOON) */}
      <FutureCoaching settings={settings} />

      {/* 11. Student Ecosystem Vision (5-Phase Roadmap) */}
      <EcosystemVision />

      {/* 12. Why Choose Vasant Geetha (6 Cards) */}
      <WhyChoose />

      {/* 13. Testimonials Section */}
      <Testimonials
        reviews={reviews}
        onReviewSubmitted={() => {}}
      />

      {/* 14. FAQ Section (Accordion) */}
      <Faq faqs={faqs} />

      {/* 15. Footer */}
      <Footer
        settings={settings}
        onOpenAdmin={() => {}}
        onOpenEnquiry={() => handleOpenEnquiry()}
      />

      {/* 16. Mobile Bottom Sticky Contact Bar */}
      <MobileBottomBar
        settings={settings}
        onOpenEnquiry={() => handleOpenEnquiry()}
      />

      {/* Enquiry Modal */}
      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        defaultRoomType={selectedRoomPrefill}
      />

      <StickyContact />

    </div>
  );
}
