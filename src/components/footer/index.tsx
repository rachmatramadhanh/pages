import React from "react";
import { ContentCenter } from "../shared/layoutUtils";
import { GrTwitter, GrInstagram, GrGithub, GrLinkedinOption, GrMedium } from "react-icons/gr";
import {
  FooterBase,
  Divider,
  FooterContent,
  IconWrapper,
  VerticalDivider
} from "./styles";

const Footer: React.FC = () => {
  return (
    <FooterBase>
      <ContentCenter>
        <Divider />
      </ContentCenter>
      <FooterContent>
      Follow me around the web 👉
        <VerticalDivider />
          <a href="https://twitter.com/rachmatramadanh?s=09" target="_blank" rel="noreferrer"><GrTwitter /></a>
          <IconWrapper />
          <a href="https://instagram.com/rachmatramadhanh" target="_blank" rel="noreferrer"><GrInstagram /></a>
          <IconWrapper />
          <a href="https://github.com/rachmatramadhanh" target="_blank" rel="noreferrer"><GrGithub /></a>
          <IconWrapper />
          <a href="https://www.linkedin.com/in/rachmat-ramadhan" target="_blank" rel="noreferrer"><GrLinkedinOption /></a>
          <IconWrapper />
          <a href="https://medium.com/@rachmat.ramadhan" target="_blank" rel="noreferrer"><GrMedium /></a>
      </FooterContent>
    </FooterBase>
  );
};

export default Footer;
