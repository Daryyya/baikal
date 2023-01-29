import { observer } from 'mobx-react';
import React from 'react';
import { myOrderFormData } from '../../store/orderFormData';
import CellContent from './CellContent';
import {
  StyledTable,
  StyledThead,
  StyledHead,
  HeadTitle,
  StyledCell,
  StyledRow,
  StyledCellContent,
  StyledImage,
  StyledTFoot,
  ResetButton,
} from './style';

const titles = [
  ' ',
  'Кол-во',
  'Общая масса нетто, кг',
  'Общая масса брутто, кг',
  'Общий объем, м3',
  'Стоимость единицы',
  'Удалить',
];

const Table = observer(() => {
  const order = myOrderFormData.getState();
  const totalValue = myOrderFormData.getTotalValue();

  return (
    <StyledTable>
      <StyledThead>
        <tr>
          {titles.map((title) => (
            <StyledHead key={title}>
              <HeadTitle>{title}</HeadTitle>
            </StyledHead>
          ))}
        </tr>
      </StyledThead>
      <tbody>
        {order.map((item) => {
          const { id, name, image, amount, volume, netWeight, grossWeight, cost, key } = item;
          return (
            <StyledRow key={key || id}>
              <StyledCell>
                <StyledCellContent>
                  <StyledImage src={image} alt="изображение" width={120} height={97} /> {name}
                </StyledCellContent>
              </StyledCell>
              <StyledCell>
                <CellContent
                  content={amount || 0}
                  onChange={(val) => myOrderFormData.editItemInOrder({ ...item, amount: val })}
                />
              </StyledCell>
              <StyledCell>
                <CellContent
                  content={netWeight || 0}
                  onChange={(val) => myOrderFormData.editItemInOrder({ ...item, netWeight: val })}
                />
              </StyledCell>
              <StyledCell>
                <CellContent
                  content={grossWeight || 0}
                  onChange={(val) => myOrderFormData.editItemInOrder({ ...item, grossWeight: val })}
                />
              </StyledCell>
              <StyledCell>
                <CellContent
                  content={volume || 0}
                  onChange={(val) => myOrderFormData.editItemInOrder({ ...item, volume: val })}
                />
              </StyledCell>
              <StyledCell>
                <CellContent
                  content={cost || 0}
                  onChange={(val) => myOrderFormData.editItemInOrder({ ...item, cost: val })}
                />
              </StyledCell>
              <StyledCell>
                <StyledCellContent>
                  <button type="button" onClick={() => myOrderFormData.removeItem(item)}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="red" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 4L15.5385 16" stroke="red" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M16 4L4.46154 16" stroke="red" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </button>
                </StyledCellContent>
              </StyledCell>
            </StyledRow>
          );
        })}
      </tbody>
      <StyledTFoot>
        <StyledRow>
          <StyledCell>
            <StyledCellContent>Итого:</StyledCellContent>
          </StyledCell>
          <StyledCell>
            <StyledCellContent>{totalValue.totalAmount}</StyledCellContent>
          </StyledCell>
          <StyledCell>
            <StyledCellContent>{totalValue.totalNetWeight}</StyledCellContent>
          </StyledCell>
          <StyledCell>
            <StyledCellContent>{totalValue.totalGrossWeight}</StyledCellContent>
          </StyledCell>
          <StyledCell>
            <StyledCellContent>{totalValue.totalVolume}</StyledCellContent>
          </StyledCell>
          <StyledCell>
            <StyledCellContent>{totalValue.totalCost}</StyledCellContent>
          </StyledCell>
          <StyledCell>
            <StyledCellContent>
              <ResetButton type="button" onClick={myOrderFormData.reset}>
                Сбросить
              </ResetButton>
            </StyledCellContent>
          </StyledCell>
        </StyledRow>
      </StyledTFoot>
    </StyledTable>
  );
});

export default Table;
