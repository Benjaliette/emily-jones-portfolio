import * as React from "react";

import { Header } from '../components/Header';
import { About, Contact, Portfolio, Resume, Services } from '../components/Sections';

const IndexPage = () => {
  return (
    <>
      <Header></Header>

      <About></About>
      <Resume></Resume>
      <Services></Services>
      <Portfolio></Portfolio>
      <Contact></Contact>
    </>
  );
}

export default IndexPage

export const Head = () => <title>Home Page</title>
