import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";
import { dataAcomplishments } from "../../constants/constants";

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Acomplishments</SectionTitle>
    <Boxes>
      {dataAcomplishments.map((card, index) => (
        <Box key={index}>
          <BoxNum> {card.number} +</BoxNum>
          <BoxText> {card.text} </BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
