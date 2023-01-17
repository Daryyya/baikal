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
  @media (max-width: 1200px) {
    max-width: 162px;
    padding: 14px 17px;
    height: 58px;
  }
  @media (max-width: 375px) {
      min-width: 138px;
  }
`;