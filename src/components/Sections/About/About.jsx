import * as React from "react";

import { Row, Col, Container } from 'react-bootstrap';
import { CountBox } from '../../Boxes';

import './About.scss';

import me from "../../../images/me.jpg";
import { Tes1, Tes2, Tes3, Tes4, Tes5 } from "../../../images";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-me container">
        <div className="section-title">
          <h2>About</h2>
          <p>Learn more about me</p>
        </div>

        <Row>
          <Col lg={4} data-aos="fade-right">
            <img src={me} className="img-fluid" alt="" />
          </Col>
          <Col lg={8} pt={4} pt-lg={0} className="content" data-aos="fade-left">
            <h3>Magic performer &amp; rabbit lover</h3>
            <p className="fst-italic">
              It's some kind of magic ... Welcome to my ABRACADABRA resume
            </p>
            <Row>
              <Col lg={6}>
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Birthday:</strong> <span>1 May 1993</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Website:</strong> <span>www.magicemilyjones.com</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Phone:</strong> <span>+33 6 00 00 00 00</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>City:</strong> <span>Bordeaux, FR</span>
                  </li>
                </ul>
              </Col>
              <Col lg={6}>
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Age:</strong> <span>30</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Degree:</strong> <span>Master of Magic</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Email:</strong> <span>contact@magicemilyjones.com</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Shows:</strong> <span>Available</span>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>

      <Container className="counts">
        <Row>
          <Col lg={3} md={6}>
            <CountBox count="232" icon="smile">Happy Clients</CountBox>
          </Col>

          <Col lg={3} md={6} mt={5} mtmd={0}>
            <CountBox count="521" icon="file">Projects</CountBox>
          </Col>

          <Col lg={3} md={6} mt={5} mtlg={0}>
            <CountBox count="1463" icon="headset">House of supports</CountBox>
          </Col>

          <Col lg={3} md={6} mt={5} mtlg={0}>
            <CountBox count="24" icon="award">Awards</CountBox>
          </Col>
        </Row>
      </Container>
      <Container className="skills">
        <div className="section-title">
          <h2>Skills</h2>
        </div>

        <Row className="skills-content">
          <Col lg={6}>
            <div className="progress">
              <span className="skill">
                HTML <i className="val">100%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">
                CSS <i className="val">90%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">
                JavaScript <i className="val">75%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </Col>

          <Col lg={6}>
            <div className="progress">
              <span className="skill">
                PHP <i className="val">80%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">
                WordPress/CMS <i className="val">90%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">
                Photoshop <i className="val">55%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="55"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="interests">
        <div className="section-title">
          <h2>Interests</h2>
        </div>

        <Row>
          <Col lg={3} md={4}>
            <div className="icon-box">
              <i className="ri-store-line" style={{ color: "#ffbb2c" }}></i>
              <h3>David Copperfield</h3>
            </div>
          </Col>
          <Col lg={3} md={4} mt={4} mtmd={0}>
            <div className="icon-box">
              <i
                className="ri-bar-chart-box-line"
                style={{ color: "#5578ff" }}
              ></i>
              <h3>Magie en famille</h3>
            </div>
          </Col>
          <Col lg={3} md={4} mt={4} mtmd={0}>
            <div className="icon-box">
              <i
                className="ri-calendar-todo-line"
                style={{ color: "#e80368" }}
              ></i>
              <h3>Rabbits</h3>
            </div>
          </Col>
          <Col lg={3} md={4} mt={4} mtlg={0}>
            <div className="icon-box">
              <i
                className="ri-paint-brush-line"
                style={{ color: "#e361ff" }}
              ></i>
              <h3>Magni Dolores</h3>
            </div>
          </Col>
          <Col lg={3} md={4} mt={4}>
            <div className="icon-box">
              <i
                className="ri-database-2-line"
                style={{ color: "#47aeff" }}
              ></i>
              <h3>Nemo Enim</h3>
            </div>
          </Col>
          <Col lg={3} md={4} mt={4}>
            <div className="icon-box">
              <i
                className="ri-gradienter-line"
                style={{ color: "#ffa76e" }}
              ></i>
              <h3>Eiusmod Tempor</h3>
            </div>
          </Col>
          <Col lg={3} md={4} mt={4}>
            <div className="icon-box">
              <i
                className="ri-file-list-3-line"
                style={{ color: "#11dbcf" }}
              ></i>
              <h3>Midela Teren</h3>
            </div>
          </Col>
          <Col lg={3} md={4} mt={4}>
            <div className="icon-box">
              <i
                className="ri-price-tag-2-line"
                style={{ color: "#4233ff" }}
              ></i>
              <h3>Pira Neve</h3>
            </div>
          </Col>
          <Col lg={3} md={4} mt={4}>
            <div className="icon-box">
              <i className="ri-anchor-line" style={{ color: "#b2904f" }}></i>
              <h3>Dirada Pack</h3>
            </div>
          </Col>
          <Col lg={3} md={4} mt={4}>
            <div className="icon-box">
              <i className="ri-disc-line" style={{ color: "#b20969" }}></i>
              <h3>Moton Ideal</h3>
            </div>
          </Col>
          <Col lg={3} md={4} mt={4}>
            <div className="icon-box">
              <i
                className="ri-base-station-line"
                style={{ color: "#ff5828" }}
              ></i>
              <h3>Verdo Park</h3>
            </div>
          </Col>
          <Col lg={3} md={4} mt={4}>
            <div className="icon-box">
              <i
                className="ri-fingerprint-line"
                style={{ color: "#29cc61" }}
              ></i>
              <h3>Flavor Nivelanda</h3>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="testimonials">
        <div className="section-title">
          <h2>Testimonials</h2>
        </div>

        <div
          className="testimonials-slider swiper"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="testimonial-item">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Proin iaculis purus consequat sem cure digni ssim donec
                  porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                  eget id, aliquam eget nibh et. Maecen aliquam, risus at
                  semper.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img
                  src={Tes1}
                  className="testimonial-img"
                  alt=""
                />
                <h3>Saul Goodman</h3>
                <h4>Ceo &amp; Founder</h4>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="testimonial-item">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Export tempor illum tamen malis malis eram quae irure esse
                  labore quem cillum quid cillum eram malis quorum velit fore
                  eram velit sunt aliqua noster fugiat irure amet legam anim
                  culpa.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img
                  src={Tes2}
                  className="testimonial-img"
                  alt=""
                />
                <h3>Sara Wilsson</h3>
                <h4>Designer</h4>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="testimonial-item">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Enim nisi quem export duis labore cillum quae magna enim sint
                  quorum nulla quem veniam duis minim tempor labore quem eram
                  duis noster aute amet eram fore quis sint minim.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img
                  src={Tes3}
                  className="testimonial-img"
                  alt=""
                />
                <h3>Jena Karlis</h3>
                <h4>Store Owner</h4>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="testimonial-item">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Fugiat enim eram quae cillum dolore dolor amet nulla culpa
                  multos export minim fugiat minim velit minim dolor enim duis
                  veniam ipsum anim magna sunt elit fore quem dolore labore
                  illum veniam.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img
                  src={Tes4}
                  className="testimonial-img"
                  alt=""
                />
                <h3>Matt Brandon</h3>
                <h4>Freelancer</h4>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="testimonial-item">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Quis quorum aliqua sint quem legam fore sunt eram irure aliqua
                  veniam tempor noster veniam enim culpa labore duis sunt culpa
                  nulla illum cillum fugiat legam esse veniam culpa fore nisi
                  cillum quid.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img
                  src={Tes5}
                  className="testimonial-img"
                  alt=""
                />
                <h3>John Larson</h3>
                <h4>Entrepreneur</h4>
              </div>
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>

        <div className="owl-carousel testimonials-carousel"></div>
      </Container>
    </section>
  );
};

export default About;
