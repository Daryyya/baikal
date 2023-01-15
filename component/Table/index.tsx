import { observer } from "mobx-react";
import Image from "next/image";
import React from "react";
import { myOrderFormData } from "../../store/orderFormData";
import { StyledTable, StyledThead, StyledHead, HeadTitle, StyledCell, StyledRow, StyledCellContent } from "./style";

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

  return (
    <StyledTable>
      <StyledThead>
        <tr>
          {titles.map((title) => (
            <StyledHead key={title}>
              <HeadTitle>
              {title}
              </HeadTitle>
            </StyledHead>
          ))}
        </tr>
      </StyledThead>
      <tbody>
        {order.map(
          ({
            id,
            name,
            image,
            amount,
            volume,
            netWeight,
            grossWeight,
            cost,
          }) => (
            <StyledRow key={id}>
              <StyledCell>
                <StyledCellContent>
                  <Image src={image} alt="изображение" width={120} height={97} />{" "}
                  {name}
                </StyledCellContent>
              </StyledCell>
              <StyledCell>
                <StyledCellContent>
                  {amount}
                </StyledCellContent>
              </StyledCell>
              <StyledCell>
                <StyledCellContent>
                  {netWeight}
                </StyledCellContent>
              </StyledCell>
              <StyledCell>
                <StyledCellContent>
                  {grossWeight}
                </StyledCellContent>
              </StyledCell>
              <StyledCell>
                <StyledCellContent>
                  {volume}
                </StyledCellContent>
              </StyledCell>
              <StyledCell>
                <StyledCellContent>
                {cost}
                  </StyledCellContent>
                </StyledCell>
              <StyledCell>
                <StyledCellContent>
                <button>x</button>
                </StyledCellContent>
              </StyledCell>
            </StyledRow>
          )
        )}
      </tbody>
    </StyledTable>
  );
});

export default Table;
