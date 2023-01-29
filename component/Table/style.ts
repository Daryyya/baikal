import styled from '@emotion/styled';
import Image from 'next/image';
import { downXl } from '../../styles/mediaQuery';


export const StyledTable = styled.table`
  margin: 45px 0 40px;
  border-collapse: collapse;
  width: 100%;
  ${downXl} {
    display: none;
  }
`;

export const StyledThead = styled.thead``;

export const StyledHead = styled.th`
  padding-bottom: 10px;

  &:not(:first-of-type) div {
    border: 2px solid #e2e4ea;
    background-color: var(--barely-grey);
  }
  &:nth-of-type(2) div {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    word-break: keep-all;
    min-width: 73px;
  }
  &:not(:nth-of-type(2)) div {
    border-left: none;
  }
  &:last-of-type div {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

export const HeadTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-collapse: collapse;
  height: 80px;
  padding: 8px;
  font-weight: 600;
  font-size: 15px;
  line-height: 1;
  letter-spacing: -1px;
  color: var(--grey);
`;

export const StyledRow = styled.tr`
  &:not(:last-of-type) td div {
    border-bottom: none;
  }

  &:first-of-type td:first-of-type div {
    border-top-left-radius: 5px;
  }
  &:first-of-type td:last-of-type div {
    border-top-right-radius: 5px;
  }
  &:last-of-type td:first-of-type div {
    border-bottom-left-radius: 5px;
  }
  &:last-of-type td:last-of-type div {
    border-bottom-right-radius: 5px;
  }
`;

export const StyledCell = styled.td`
  &:first-of-type div {
    padding: 0 15px 0 1px;
    display: grid;
    justify-content: left;
    gap: 15px;
    grid-template-columns: 120px 1fr;
  }
  &:not(:first-of-type) div {
    border-left: none;
  }
`;

export const StyledCellContent = styled.div`
  background-color: var(--barely-grey);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #e2e4ea;
  min-height: 99px;
  padding: 8px;
  font-size: 15px;
  line-height: 1;
  letter-spacing: -1px;
  color: var(--grey);
`;

export const StyledImage = styled(Image)`
  height: 95px;
  width: 120px;
  object-fit: cover;
`;

export const StyledTFoot = styled.tfoot`
  font-weight: 600;
  & td {
    padding-top: 10px;
  }
  & td:first-of-type div {
    width: 116px;
    margin-left: auto;
    text-align: center;
    grid-template-columns: 116px;
  }
`;

export const ResetButton = styled.button`
  color: var(--blue);
  font-weight: inherit;
  transition: 150ms;
  padding: 7px 4px;

  &:hover {
    opacity: 0.7;
  }
`;
