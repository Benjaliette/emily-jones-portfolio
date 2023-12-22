import * as React from "react";
import { useState, useRef } from "react";

import { Header } from '../components/Header';
import { About, Contact, Portfolio, Resume, Services } from '../components/Sections';

import '../styles/main.scss';

const IndexPage = () => {
  const [currentSection, setCurrentSection] = useState(<></>);
  const [currentSectionName, setCurrentSectionName] = useState("");

  const currentComponent = useRef();

  const handleSelectNav = (nav) => {
    setCurrentSection(getSection(nav));
    setCurrentSectionName(nav);

    const element = document.getElementById(currentSectionName);

    if (element) {
      element.scrollIntoView({behavior: 'smooth'});
    }
  }

  const getSection = (sectionName) => {
    console.log(sectionName);

    switch (sectionName) {
      case 'about':
        return <About id={currentComponent}></About>;
        break;
      case 'resume':
        return <Resume ref={currentComponent}></Resume>;
        break;
      case 'services':
        return <Services ref={currentComponent}></Services>;
        break;
      case 'portfolio':
        return <Portfolio ref={currentComponent}></Portfolio>
        break;
      case 'contact':
        return <Contact ref={currentComponent}></Contact>;
        break;
      default:
        return <></>;
        break;
    }
  }


  return (
    <>
      <Header onSelectNav={handleSelectNav}></Header>

      { currentSection }
    </>
  );
}

export default IndexPage

export const Head = () => <title>Magical Emily Jones</title>
