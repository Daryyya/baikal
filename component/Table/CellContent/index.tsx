import Image from 'next/image';
import React, { FC } from 'react';
import edit from '../../../public/img/pencil.svg';
import { StyledCellContent, Button } from './style';

interface Props {
  content: number;
}

const CellContent: FC<Props> = ({ content }) => {
  return (
    <StyledCellContent>
      <span>
      {content}
      <Button type="button">
        <Image src={edit} alt="редактировать" width={16} height={16} />
      </Button>
      </span>
      
      
    </StyledCellContent>
  );
};

export default CellContent;
