import React from "react";
import Image from "next/image";
import { TextHighlight } from "../shared/typography";
import {
  IntroBase,
  DetailsWrapper,
  IntroLine,
  AvatarWrapper,
  WorkLine
} from "./styles";

const IntroBlock: React.FC = () => {
  return (
    <IntroBase>
      <DetailsWrapper>
        <IntroLine>
          Hey 👋,
          <br /> I&apos;m Rachmat Ramadhan
        </IntroLine>
        <WorkLine>
          Front End Web Developer
        </WorkLine>
      </DetailsWrapper>
      <AvatarWrapper>
        <Image
          src={"/static/images/meabout.png"}
          height={256 / 2.2}
          width={256 / 2.2}
          alt='Avatar Rachmat Ramadhan'
          priority
        />
      </AvatarWrapper>
    </IntroBase>
  );
};

export default IntroBlock;
