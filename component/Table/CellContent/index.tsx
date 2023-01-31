import React, { FC, useEffect, useRef, useState } from 'react';
import EditIcon from '../../../public/img/pencil.svg';
import { StyledCellContent, Button, StyledInput } from './style';

interface Props {
  content: number;
  onChange: (value: number) => void;
}

const CellContent: FC<Props> = ({ content, onChange }) => {
  const [isEdit, setIsEdit] = useState(false);
  const ref = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isEdit) {
      ref.current?.focus();
    }
  }, [isEdit]);

  return (
    <StyledCellContent>
      {!isEdit && (
        <span>
          {content}
          <Button type="button" onClick={() => setIsEdit(true)}>
            <EditIcon alt="редактировать" width={16} height={16} viewBox="0 0 18 18" />
          </Button>
        </span>
      )}
      {isEdit && (
        <StyledInput
          ref={ref}
          style={{ width: `calc(${content.toString().length}ch + 10px)` }}
          type="text"
          value={content}
          contentEditable
          onChange={(e) => {
            const newVal = Number(e.target.value);
            if (!Number.isNaN(newVal)) {
              onChange(newVal);
            }
          }}
          onBlur={() => setIsEdit(false)}
        />
      )}
    </StyledCellContent>
  );
};

export default CellContent;
