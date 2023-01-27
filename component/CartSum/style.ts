import styled from "@emotion/styled";
import Button from "../../kit/Button";
import Link from "../../kit/Link";

export const StyledP = styled.p`
  color: var(--grey);
  font-size: 23px;
  line-height: 1;
  letter-spacing: 0.2px;
  text-align: end;
  &:not(:last-of-type) {
    margin-bottom: 28px;
  }
  &:last-of-type {
    margin-bottom: 40px;
  }
  & span {
    display: inline-block;
    min-width: 210px;
  }
  @media (max-width: 1200px) {
    font-size: 17px;
    margin-bottom: 24px;
    display: flex;
    justify-content: space-between;
    & span {
      min-width: auto;
    }
  }
`;

export const Sum = styled.p`
  font-weight: 600;
  font-size: 31px;
  line-height: 1;
  letter-spacing: 0.2px;
  color: var(--grey);
  margin-bottom: 48px;
  text-align: end;
  & span {
    display: inline-block;
    min-width: 210px;
  }
  @media (max-width: 1200px) {
    font-size: 23px;
    margin: 54px 0 24px;
    display: flex;
    justify-content: space-between;
    & span {
      min-width: auto;
    }
  }
`;

export const BottomLinksWrapper = styled.div`
  gap: 12px;
  justify-content: end;
  text-align: center;
  margin-bottom: 48px;
  display: grid;
  grid-template-columns: 233px 299px;
  padding-bottom: 48px;
  margin-bottom: 0;
  @media (max-width: 1200px) {
    grid-template-columns: 1fr ;
    gap: 8px;
  }
`;

export const StyledSaveLink = styled(Button)`
  display: grid;
  padding-right: 18px;
  padding-left: 20px;
  grid-auto-flow: column;
  align-items: center;
  & svg {
    position: relative;
    left: 8px;
    top: 1px;
  }
  @media (max-width: 1200px) {
    justify-content: center;
    order: 2;
  }
`;

export const StyledLink = styled(Link)`
  padding: 19px 50px;
  @media (max-width: 1200px) {
    padding: 19px 35px;
    flex: 1 0 calc(50% - 6px);
  } 
`;
