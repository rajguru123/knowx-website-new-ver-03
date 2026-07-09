'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Popup from '@/components/Popup';
import FloatingButtons from '@/components/FloatingButtons';
import ScrollReveal from '@/components/ScrollReveal';

// Routes that render as fully standalone pages — their own header, footer,
// and WhatsApp button already built in — so the site-wide chrome below
// should NOT wrap them. Add more paths here later if you build other
// campaign/landing pages the same way.
const STANDALONE_ROUTES = ['/stock-trading-course-basaveshwara-nagar-bangalore'];

export default function ClientShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStandalone = STANDALONE_ROUTES.includes(pathname);

  const [popupOpen, setPopupOpen] = useState(false);
  useEffect(() => {
    const handler = () => {
      setPopupOpen(true);
      document.body.style.overflow = 'hidden';
    };
    window.addEventListener('openPopup', handler);
    return () => window.removeEventListener('openPopup', handler);
  }, []);
  const openPopup = () => {
    setPopupOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const closePopup = () => {
    setPopupOpen(false);
    document.body.style.overflow = '';
  };

  // Standalone pages (like the MBEAR landing page) render with none of the
  // site-wide Navbar/Footer/Popup/FloatingButtons/ScrollReveal — just their
  // own content, since they already include everything they need.
  if (isStandalone) {
    return <main>{children}</main>;
  }

  return (
    <>
      <Navbar onOpenPopup={openPopup} />
      <main>{children}</main>
      <Footer />
      <Popup isOpen={popupOpen} onClose={closePopup} />
      <FloatingButtons />
      <ScrollReveal />
    </>
  );
}
