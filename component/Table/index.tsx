import { observer } from "mobx-react";
import React from "react";
import { myOrderFormData } from "../../store/orderFormData";
import {
  EmptyWarning,
  StyledTable,
  StyledThead,
  StyledHead,
  HeadTitle,
  StyledCell,
  StyledRow,
  StyledCellContent,
  StyledImage,
} from "./style";

const titles = [
  " ",
  "Кол-во",
  "Общая масса нетто, кг",
  "Общая масса брутто, кг",
  "Общий объем, м3",
  "Стоимость единицы",
  "Удалить",
];

const Table = observer(() => {
  const order = myOrderFormData.getState();

  if (order.length === 0) {
    return (
      <EmptyWarning>Корзина пуста</EmptyWarning>
    )
  }

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
          const {
            id,
            name,
            image,
            amount,
            volume,
            netWeight,
            grossWeight,
            cost,
          } = item;
          return (
            <StyledRow key={id}>
              <StyledCell>
                <StyledCellContent>
                  <StyledImage
                    src={image}
                    alt="изображение"
                    width={120}
                    height={97}
                  />{" "}
                  {name}
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
                  <button
                    type="button"
                    onClick={() => myOrderFormData.removeItem(item)}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="red"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 4L15.5385 16"
                        stroke="red"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                      <path
                        d="M16 4L4.46154 16"
                        stroke="red"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                    </svg>
                  </button>
                </StyledCellContent>
              </StyledCell>
            </StyledRow>
          );
        })}
      </tbody>
    </StyledTable>
  );
});

export default Table;
