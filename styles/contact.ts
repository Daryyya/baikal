import styled from "@emotion/styled";
import Input from "../kit/Input";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 547px 502px;
  gap: 96px;
  max-width: 1440px;
  padding: 30px 97px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 64px;
  line-height: 1;
  letter-spacing: -1px;
  font-weight: 400;
  color: var(--grey);
  margin-bottom: 70px;
`;

export const StyledH2 = styled.h2`
  margin-bottom: 50px;
  font-size: 36px;
  line-height: 1;
  letter-spacing: -1px;
  color: var(--grey);
`;

export const Social = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 70px 50px;
`;

export const StyledP = styled.p`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 30px;
  color: var(--grey);
  font-size: 23px;
  line-height: 1;
  letter-spacing: 0.2px;
`;

export const StyledPLink = styled.p`
  &:not(:last-of-type) {
    margin-bottom: 32px;
 
  
  }
  &:last-of-type {
    margin-bottom: 72px;
  }
  color: var(--grey);
  font-size: 23px;
  line-height: 1;
  letter-spacing: 0.2px;
  a {
    color: var(--grey);
  }
`;

export const StyledInput = styled(Input)`

  height: 53px;
  width: 246px;
`;

export const InputWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 134px 0 48px ;
`;

export const Textarea = styled.textarea`
  background-color: var(--white);
  display: block;
  margin-bottom: 20px;
  width: 502px;
  height: 124px;
  padding: 10px;
  border-radius: 3px;
`;

export const TextareaName = styled.p`
  margin-bottom: 20px;
  font-size: 17px;
  line-height: 1;
  letter-spacing: 0.2px;
  color: var(--grey);
`;