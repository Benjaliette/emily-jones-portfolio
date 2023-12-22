import * as React from "react";

import { AnchorLink } from "gatsby-plugin-anchor-links";

const Header = () => {
  return (
    <header id="header">
      <div class="container">
        <h1>
          <AnchorLink to="/" title="Emily Jones"></AnchorLink>
        </h1>
        <AnchorLink to="/" className='mr-auto'>
          <img src="assets/img/logo.png" alt="" class="img-fluid" />
        </AnchorLink>
        <h2>
          I'm a passionate <span>graphic designer</span> from New York
        </h2>
        <nav id="navbar" class="navbar">
          <ul>
            <li>
              <AnchorLink to="/#header" title="Home" className="nav-link-active"></AnchorLink>
            </li>
            <li>
              <AnchorLink to="/#about" title="About" className="nav-link"></AnchorLink>
            </li>
            <li>
              <AnchorLink to="/#resume" title="Resume" className="nav-link"></AnchorLink>
            </li>
            <li>
              <AnchorLink to="/#services" title="Services" className="nav-link"></AnchorLink>
            </li>
            <li>
              <AnchorLink to="/#portfolio" title="Portfolio" className="nav-link"></AnchorLink>
            </li>
            <li>
              <AnchorLink to="/#contact" title="Contact" className="nav-link"></AnchorLink>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
        .navbar
        <div className="social-links">
          <a href="#" className="twitter">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="#" className="facebook">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#" className="instagram">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="#" className="linkedin">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
