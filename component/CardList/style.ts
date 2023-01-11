import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: grid;
  gap: 4px;
  width: 100%;
  max-height: 350px;
  overflow-y: scroll;

  @media (max-width: 1200px) {
    min-height: fit-content;
    overflow-y: visible;
  }
`;