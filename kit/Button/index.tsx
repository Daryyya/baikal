import React, { FC } from "react";
import Link from "next/link";
import { Wrapper } from "./style";

interface Props {
  page: string;
}

const Button: FC<Props> = ({ page }) => {
  return (
    <Wrapper>
      <Link href={page}>Связаться</Link>
    </Wrapper>
  );
};

export default Button;
