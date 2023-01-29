import styled from '@emotion/styled';

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
  &:hover button {
    opacity: 1;
  }

  & span {
    display: inline-block;
    position: relative;
    overflow: visible;
    margin: 0 25px;
    word-break: break-all;
  }
`;

export const Button = styled.button`
  opacity: 0;
  width: 20px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: -26px;
  padding: 3px;
`;

export const StyledInput = styled.input`
  border: 1px solid var(--light-grey);
  padding: 2px 5px;
  border-radius: 3px;
`;
