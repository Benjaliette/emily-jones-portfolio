import * as React from "react";

import { Container } from 'react-bootstrap';
import { AnchorLink } from "gatsby-plugin-anchor-links";

import { Navbar } from '../Navbar';

import './Header.scss';

const Header = ({onSelectNav}) => {
  return (
    <header id="header">
      <Container>
        <h1>
          <AnchorLink to="/" title="Emily Jones"></AnchorLink>
        </h1>
        <AnchorLink to="/" className='mr-auto'>
          <img src="assets/img/logo.png" alt="" class="img-fluid" />
        </AnchorLink>
        <h2>
          I'm a passionate <span>magician</span> from Bordeaux Magic City
        </h2>
        <Navbar onSelectNav={onSelectNav}></Navbar>
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
      </Container>
    </header>
  );
};

export default Header;
