import styled from "@emotion/styled";
import Image from "next/image";
import Button from "../../kit/Button";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--barely-grey);
  border: 1px solid #E2E4EA;
  border-radius: 3px;
  padding-right: 27px;

  @media (max-width: 1200px) {
    padding: 0 13px 0 20px;
  }
`;

export const StyledImage= styled(Image)`
  height: 97px;
   @media (max-width: 1200px) {
    width: 69px;
    height: 48px;
  }
`;

export const ItemName = styled.p`
  text-align: center;
  font-size: 17px;
  color: var(--grey);

  @media (max-width: 1200px) {
    margin: 0 20px;
    font-size: 12px;
    line-height: 1;
  }
`;

export const StyledButton = styled(Button)`
  min-width: 137px;
  padding: 14px 30px;

  @media (max-width: 1200px) {
    padding: 10px;
    min-width: 68px;
    font-size: 10px;
    line-height: 1;
  }
`;

