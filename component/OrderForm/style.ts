import styled from "@emotion/styled";
import Image from "next/image";
import Button from "../../kit/Button";
import Input from "../../kit/Input";

export const StyledForm = styled.form`
  display: grid;
  gap: 15px;

  @media (max-width: 1200px) {
    max-width: 375px;
    padding: 30px 0;
    margin: 0 auto;
  }
`;

export const ItemWrapper = styled.div`
  background-color: var(--barely-grey);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 3px;
`;

export const StyledImage = styled(Image)`
  height: 70px;
  @media (max-width: 1200px) {
    width: 140px;
    height: 88px;
  }
`;

export const ItemName = styled.p`
  margin: 0 auto;
  font-size: 17px;
  line-height: 1;
  letter-spacing: -1px;
  color: var(--grey);
  @media (max-width: 1200px) {
    margin: 0 25px;
}
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 53px;
  width: 159px;
  background-color: var(--white);
  border-radius: 3px;
  justify-content: space-evenly;
`;

export const AmountInput = styled(Input)`
  width: 53px;
  height: 53px;
`;

export const StyledMinus = styled.svg`
  position: relative;
  top: -5px;
`;

export const AmountWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledText = styled.p`
  font-size: 15px;
  line-height: 1;
  color: var(--grey);
  margin-right: 35px;
`;

export const StyledInput = styled(Input)`
  @media (max-width: 1200px) {
    width: 100% !important;
  }
`;

export const Buttons = styled.div`
margin-top: 25px;
  display: flex;
  justify-content: space-between;
`;

export const StyledButton = styled(Button)`
  padding: 19px 60px;
`;

export const CartLinkText = styled.div`
  margin-top: 30px;
  font-size: 17px;

  & a {
    position: relative;
    top: 1px;
    color: var(--blue);
    font-size: 22px;
    word-break: keep-all;
    display: inline-block;
  }
`;
