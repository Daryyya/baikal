import styled from "@emotion/styled";
import Link from "next/link";
import { StyledLinkOrButtonProps, commonStyle } from "../buttonAndLinkCommonStyle";

export const StyledLink = styled(Link)<StyledLinkOrButtonProps>`
    ${({variant}) => commonStyle(variant)}
`;

 