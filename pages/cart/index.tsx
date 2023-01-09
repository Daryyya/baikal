import React from "react";
import { observer } from "mobx-react";
import { myOrderFormData } from "../../store/orderFormData";
import Table from "../../component/Table";
import Button from "../../kit/Button";

const columns = [
  { Header: "1", accessor: "id" },
  { Header: "Кол-во", accessor: "amount" },
  { Header: "Общая масса нетто, кг", accessor: "netWeight" },
  { Header: "Общая масса брутто, кг", accessor: "grossWeight" },
  { Header: "Общий объем, м3", accessor: "volume" },
  { Header: "Стоимость единицы", accessor: "cost" },
  { Header: "Удалить", accessor: "delete" },
];

const Cart = observer(() => {
  const order = myOrderFormData.getState();
  
  return (
    <div>
      <p>Добавленная мебель({order.length})</p>
      <Table data={order} columns={columns} />
      <Button variant="blue" type="button">
        Добавить
      </Button>
      <Button variant="blue" type="button">
        Рассчитать
      </Button>
    </div>
  );
});

export default Cart;
