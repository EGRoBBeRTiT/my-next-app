import React from "react";
import { ThirdStyled } from "./Third.style";

import { ThirdProps } from "./Third.types";
import Image from "next/image";
import nextImage from "../../../public/next-logo.jpg";

export const Third: React.FC<ThirdProps> = () => {
  return (
    <ThirdStyled>
      <Image
        src={nextImage}
        width={500}
        height={500}
        placeholder="blur"
        alt="next-logo"
      ></Image>
    </ThirdStyled>
  );
};
