import styled from '@emotion/styled';
import Image from 'next/image';
import { downXl } from '../../../styles/mediaQuery';

export const Wrapper = styled.div`
  display: none;
  ${downXl} {
    display: block;
    background-color: var(--white);
    padding: 20px;
    width: 100%;
    margin-bottom: 10px;
  }
`;

export const CardWrap = styled.div`
  display: grid;
  grid-template-columns: 108px 1fr 25px 25px;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
  font-size: 12px;
  line-height: 1.5;
  color: var(--grey);
  letter-spacing: 0.2px;
  word-break: break-word;
`;

export const StyledImage = styled(Image)`
  width: 108px;
  height: 85.5px;
  object-fit: cover;
`;

export const StyledP = styled.p`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  line-height: 1;
  letter-spacing: 0.2px;
  color: var(--grey);
  &:not(:last-of-type) {
    margin-bottom: 12px;
  }
`;
