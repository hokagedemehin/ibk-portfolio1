import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, I'm <br />
        Demehin Ibukun
      </SectionTitle>
      <SectionText>
        I'm a Software Developer with a strong knack for providing online solutions for small and medium size companies, by developing web applications across e-commerce, logistics and food services
      </SectionText>
      <Button onClick={() => window.location = 'http://linkedin.com'}>Contact Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;