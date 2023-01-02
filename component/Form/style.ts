import styled from "@emotion/styled";
import BaseInput from "../../kit/Input";
import BaseButton from "../../kit/Button";

export const StyledForm = styled.form`
  display: flex;
  align-items: flex-end;
`;

export const Input = styled(BaseInput)`
  padding: 15px 30px;
  height: 65px;
  font-weight: 600;
`;

export const Button = styled(BaseButton)`
  height: 67px;
  margin-left: 12px;
`;
