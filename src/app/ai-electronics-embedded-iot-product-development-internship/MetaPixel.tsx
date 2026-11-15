'use client';

import Script from 'next/script';

/**
 * Meta (Facebook / Instagram) Pixel for this page only.
 * Pixel ID 1915438403200148 (can be overridden with NEXT_PUBLIC_META_PIXEL_ID). If a Pixel is already loaded on the page (window.fbq exists),
 * the base code is skipped so visits are not counted twice.
 */
const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || '1915438403200148';

export default function MetaPixel() {
  if (!PIXEL_ID || !/^\d{10,20}$/.test(PIXEL_ID)) return null;
  return (
    <Script id="aei-meta-pixel" strategy="afterInteractive">
      {`
        if (!window.fbq) {
          !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${PIXEL_ID}');
          fbq('track', 'PageView');
        }
      `}
    </Script>
  );
}
