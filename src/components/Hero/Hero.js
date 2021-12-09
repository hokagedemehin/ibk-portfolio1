import React from "react";

import {
  ButtonSection,
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

// TODO: put the right link to google drive CV
const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, I'm <br />
        Demehin Ibukun
      </SectionTitle>
      <SectionText>
        {/* I'm a Software Developer with a strong knack for providing online
        solutions for small and medium size companies, by developing web
        applications across e-commerce, logistics and food services */}
        Versatile Software Developer with experience building world-class web
        applications in the least amount of time. A firm believer in the
        mobile-first approach with a passion for software architecture and
        responsive web applications designs
      </SectionText>
      <ButtonSection grid nopadding>
        <Button
          onClick={() => (window.location = "https://wa.me/2348036051411")}
        >
          Contact Me
        </Button>
        {/* <div style={{ marginLeft: "18px" }}></div> */}
        <Button
          onClick={() =>
            (window.location =
              "https://drive.google.com/file/d/1rfdyetnNUJmr3-UeRZYFPx2TQpeeb8M_/view?usp=sharing")
          }
        >
          Get CV
        </Button>
      </ButtonSection>
    </LeftSection>
  </Section>
);

export default Hero;
