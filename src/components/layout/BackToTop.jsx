import React, { useEffect, useState } from 'react';

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to handle scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll
    });
  };

  return (
    <>
      {/* Back to Top */}
      <a
        href="#"
        className="btn btn-primary border-inner py-3 fs-4 back-to-top"
        style={{ display: isVisible ? 'inline' : 'none' }} // Apply display style dynamically
        onClick={(e) => {
          e.preventDefault(); // Prevent default anchor click behavior
          scrollToTop();
        }}
      >
        <i className="bi bi-arrow-up" />
      </a>
    </>
  );
}

export default BackToTop;
