import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { CtaButton, LeftSection, RollerText, RollText } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br /> My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Hello there! I'm Ashari Novaldi. In this personal portfolio website, i'm
        gonna show you about me and several projects I've worked on before.
      </SectionText>
      <Button onClick={() => (window.location = "#projects")}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
