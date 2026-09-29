import React from 'react';
import { staticSettings } from '../services/staticData';

const StickyContact = () => {
  const whatsappUrl = `https://wa.me/${staticSettings.whatsappNumber}?text=${encodeURIComponent(
    "Hello! I am enquiring about VasantGeeta PG & Mess availability."
  )}`;
  const phoneUrl = `tel:${staticSettings.phone.replace(/\s+/g, '')}`;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 50,
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}
    >
      {/* Call Button */}
      <a
        href={phoneUrl}
        aria-label="Call Us"
        title="Call Us"
        style={{
          width: '56px',
          height: '56px',
          backgroundColor: '#3b82f6', // brand blue
          color: 'white',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 14px rgba(0,0,0,0.3)',
          transition: 'transform 0.2s',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          style={{ width: '24px', height: '24px' }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.273-3.973-6.869-6.87l1.293-.97c.362-.271.527-.733.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
          />
        </svg>
      </a>

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
        style={{
          width: '56px',
          height: '56px',
          backgroundColor: '#22c55e', // green
          color: 'white',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 14px rgba(0,0,0,0.3)',
          transition: 'transform 0.2s',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          style={{ width: '28px', height: '28px' }}
        >
          <path d="M12.031 21.031c-1.895 0-3.76-.508-5.385-1.468l-6 1.575 1.6-5.835c-1.054-1.688-1.611-3.637-1.611-5.635 0-5.875 4.783-10.663 10.667-10.663 5.878 0 10.658 4.787 10.658 10.667s-4.78 10.659-10.658 10.659zM6.924 17.65c1.554.922 3.328 1.408 5.107 1.408 4.795 0 8.694-3.899 8.694-8.696C20.725 5.568 16.828 1.666 12.031 1.666c-4.793 0-8.692 3.902-8.692 8.696 0 1.9.52 3.743 1.503 5.372l-.995 3.633 3.738-.981.339.264zM16.927 13.918c-.272-.136-1.613-.797-1.863-.888-.25-.091-.433-.136-.615.136-.182.272-.705.888-.865 1.07-.159.182-.319.204-.591.068-2.61-1.309-3.759-2.529-5.111-5.158-.159-.272-.017-.419.119-.556.123-.122.272-.318.409-.477.136-.159.182-.272.272-.454.091-.182.046-.341-.023-.477-.068-.136-.615-1.483-.842-2.029-.222-.533-.448-.461-.615-.47-.159-.007-.341-.007-.523-.007-.182 0-.477.068-.727.341-.25.272-.954.931-.954 2.27 0 1.339.977 2.634 1.113 2.815.136.182 1.916 2.923 4.639 4.096 2.012.868 2.502.932 3.183.842.812-.107 2.124-.867 2.423-1.703.298-.836.298-1.551.209-1.703-.089-.153-.316-.244-.588-.38z" />
        </svg>
      </a>
    </div>
  );
};

export default StickyContact;
