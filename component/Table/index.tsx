import { observer } from 'mobx-react';
import React from 'react';
import { myOrderFormData } from '../../store/orderFormData';
import {
  StyledTable,
  StyledThead,
  StyledHead,
  HeadTitle,
  StyledCell,
  StyledRow,
  StyledCellContent,
  StyledImage,
  StyledTFoot
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
                <StyledCellContent>{amount}</StyledCellContent>
              </StyledCell>
              <StyledCell>
                <StyledCellContent>{netWeight}</StyledCellContent>
              </StyledCell>
              <StyledCell>
                <StyledCellContent>{grossWeight}</StyledCellContent>
              </StyledCell>
              <StyledCell>
                <StyledCellContent>{volume}</StyledCellContent>
              </StyledCell>
              <StyledCell>
                <StyledCellContent>{cost}</StyledCellContent>
              </StyledCell>
              <StyledCell>
                <StyledCellContent>
                  <button type="button" onClick={() => myOrderFormData.removeItem(item)}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="red" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 4L15.5385 16" stroke="red" stroke-width="1.5" stroke-linecap="round" />
                      <path d="M16 4L4.46154 16" stroke="red" stroke-width="1.5" stroke-linecap="round" />
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
            <StyledCellContent>Итого</StyledCellContent>
          </StyledCell>
          <StyledCell>
            <StyledCellContent>{order.reduce((acc, el) => acc + Number(el.amount), 0)}</StyledCellContent>
          </StyledCell>
          <StyledCell>
            <StyledCellContent>{order.reduce((acc, el) => acc + Number(el.netWeight), 0)}</StyledCellContent>
          </StyledCell>
          <StyledCell>
            <StyledCellContent>{order.reduce((acc, el) => acc + Number(el.grossWeight), 0)}</StyledCellContent>
          </StyledCell>
          <StyledCell>
            <StyledCellContent>{order.reduce((acc, el) => acc + Number(el.volume), 0)}</StyledCellContent>
          </StyledCell>
          <StyledCell>
            <StyledCellContent>{order.reduce((acc, el) => acc + Number(el.cost), 0)}</StyledCellContent>
          </StyledCell>
          <StyledCell>
            <StyledCellContent>
              <button type='button'>
                Сбросить
              </button>
            </StyledCellContent>
          </StyledCell>
        </StyledRow>
      </StyledTFoot>
    </StyledTable>
  );
});

export default Table;
