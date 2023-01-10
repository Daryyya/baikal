import styled from "@emotion/styled";
import BaseInput from "../../../kit/Input";

export const Input = styled(BaseInput)`
  padding: 15px 30px;
  height: 64px;
  font-weight: 600;

  @media (min-width: 1200px) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;