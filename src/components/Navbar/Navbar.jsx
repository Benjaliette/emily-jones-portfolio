import * as React from "react";

import { AnchorLink } from "gatsby-plugin-anchor-links";

import './Navbar.scss';

const Navbar = ({onSelectNav}) => {
  return (
    <nav id="navbar" class="navbar">
      <ul>
        <li>
          <AnchorLink
            to="/#header"
            title="Home"
            className="nav-link-active"
            onAnchorLinkClick={() => onSelectNav('')}
          ></AnchorLink>
        </li>
        <li>
          <AnchorLink
            to="/#about"
            title="About"
            className="nav-link"
            onAnchorLinkClick={() => onSelectNav('about')}
          ></AnchorLink>
        </li>
        <li>
          <AnchorLink
            to="/#resume"
            title="Resume"
            className="nav-link"
            onAnchorLinkClick={() => onSelectNav('resume')}
          ></AnchorLink>
        </li>
        <li>
          <AnchorLink
            to="/#services"
            title="Services"
            className="nav-link"
            onAnchorLinkClick={() => onSelectNav('services')}
          ></AnchorLink>
        </li>
        <li>
          <AnchorLink
            to="/#portfolio"
            title="Portfolio"
            className="nav-link"
            onAnchorLinkClick={() => onSelectNav('portfolio')}
          ></AnchorLink>
        </li>
        <li>
          <AnchorLink
            to="/#contact"
            title="Contact"
            className="nav-link"
            onAnchorLinkClick={() => onSelectNav('contact')}
          ></AnchorLink>
        </li>
      </ul>
      <i className="bi bi-list mobile-nav-toggle"></i>
    </nav>
  );
};

export default Navbar;
