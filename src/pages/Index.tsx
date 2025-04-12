
import React from 'react';
import NewsletterPopup from '@/components/NewsletterPopup';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import HighlightsSection from '@/components/home/HighlightsSection';
import MenuPreviewSection from '@/components/home/MenuPreviewSection';
import ReservationCTASection from '@/components/home/ReservationCTASection';

const Index = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <HighlightsSection />
      <MenuPreviewSection />
      <ReservationCTASection />
      <NewsletterPopup />
    </>
  );
};

export default Index;
