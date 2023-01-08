import styled from "@emotion/styled";
import Image from "next/image";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--barely-grey);
  border: 1px solid #E2E4EA;
  border-radius: 3px;
  padding-right: 27px;
`;

export const StyledImage= styled(Image)`
  height: 97px;
`;

export const ItemName = styled.p`
  font-size: 17px;
  color: var(--grey);
`;

