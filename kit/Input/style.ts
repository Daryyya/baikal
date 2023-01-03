import styled from "@emotion/styled";

export const Label = styled.label`
  display: grid;
  gap: 15px;
  height: 100%;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 15px;
  line-height: 1;
  color: var(--grey);
`;


export const StyledInput = styled.input`
  background-color: var(--white);
  font-size: 15px;
  border-radius: 4px;
  padding: 19px;
  color: var(--grey);
  &:placeholder {
      color: var(--light-grey)
  }
`;