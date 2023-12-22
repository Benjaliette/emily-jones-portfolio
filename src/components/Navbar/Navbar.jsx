import * as React from "react";

import { AnchorLink } from "gatsby-plugin-anchor-links";

import './Navbar.scss';

const Navbar = () => {
  return (
    <nav id="navbar" class="navbar">
      <ul>
        <li>
          <AnchorLink
            to="/#header"
            title="Home"
            className="nav-link-active"
          ></AnchorLink>
        </li>
        <li>
          <AnchorLink
            to="/#about"
            title="About"
            className="nav-link"
          ></AnchorLink>
        </li>
        <li>
          <AnchorLink
            to="/#resume"
            title="Resume"
            className="nav-link"
          ></AnchorLink>
        </li>
        <li>
          <AnchorLink
            to="/#services"
            title="Services"
            className="nav-link"
          ></AnchorLink>
        </li>
        <li>
          <AnchorLink
            to="/#portfolio"
            title="Portfolio"
            className="nav-link"
          ></AnchorLink>
        </li>
        <li>
          <AnchorLink
            to="/#contact"
            title="Contact"
            className="nav-link"
          ></AnchorLink>
        </li>
      </ul>
      <i className="bi bi-list mobile-nav-toggle"></i>
    </nav>
  );
};

export default Navbar;
