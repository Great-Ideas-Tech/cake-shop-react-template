import Link from 'next/link';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router'; // Import useRouter

function Navbar() {
  const router = useRouter(); // Initialize useRouter

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        document.querySelector('.navbar').classList.add('sticky-top');
      } else {
        document.querySelector('.navbar').classList.remove('sticky-top');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Topbar Start */}
      <div className="container-fluid px-0 d-none d-lg-block">
        <div className="row gx-0">
          <div className="col-lg-4 text-center bg-secondary py-3">
            <div className="d-inline-flex align-items-center justify-content-center">
              <i className="bi bi-envelope fs-1 text-primary me-3" />
              <div className="text-start">
                <h6 className="text-uppercase mb-1">Email Us</h6>
                <span>info@example.com</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 text-center bg-primary border-inner py-3">
            <div className="d-inline-flex align-items-center justify-content-center">
              <Link href="/" className="navbar-brand">
                <h1 className="m-0 text-uppercase text-white">
                  <i className="fa fa-birthday-cake fs-1 text-dark me-3" />
                  CakeZone
                </h1>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 text-center bg-secondary py-3">
            <div className="d-inline-flex align-items-center justify-content-center">
              <i className="bi bi-phone-vibrate fs-1 text-primary me-3" />
              <div className="text-start">
                <h6 className="text-uppercase mb-1">Call Us</h6>
                <span>+012 345 6789</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}

      {/* Navbar Start */}
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark shadow-sm py-3 py-lg-0 px-3 px-lg-0">
        <Link href="/" className="navbar-brand d-block d-lg-none">
          <h1 className="m-0 text-uppercase text-white">
            <i className="fa fa-birthday-cake fs-1 text-primary me-3" />
            CakeZone
          </h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto mx-lg-auto py-0">
            <Link href="/" className={`nav-item nav-link ${router.pathname === '/' ? 'active' : ''}`}>
              Home
            </Link>
            <Link href="/about" className={`nav-item nav-link ${router.pathname === '/about' ? 'active' : ''}`}>
              About Us
            </Link>
            <Link href="/menu" className={`nav-item nav-link ${router.pathname === '/menu' ? 'active' : ''}`}>
              Menu &amp; Pricing
            </Link>
            <Link href="/team" className={`nav-item nav-link ${router.pathname === '/team' ? 'active' : ''}`}>
              Master Chefs
            </Link>
            <div className="nav-item dropdown">
              <Link
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Pages
              </Link>
              <div className="dropdown-menu m-0">
                <Link href="/service" className={`dropdown-item ${router.pathname === '/service' ? 'active' : ''}`}>
                  Our Service
                </Link>
                <Link href="/testimonial" className={`dropdown-item ${router.pathname === '/testimonial' ? 'active' : ''}`}>
                  Testimonial
                </Link>
              </div>
            </div>
            <Link href="/contact" className={`nav-item nav-link ${router.pathname === '/contact' ? 'active' : ''}`}>
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
      {/* Navbar End */}
    </>
  );
}

export default Navbar;
