import styled from "@emotion/styled";
import { StyledLinkOrButtonProps, commonStyle } from "../buttonAndLinkCommonStyle";

export const StyledButton = styled.button<StyledLinkOrButtonProps>`
    ${({variant}) => commonStyle(variant)}
`;