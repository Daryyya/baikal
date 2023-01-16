import { observer } from 'mobx-react'
import React from 'react'
import { myOrderFormData } from '../../store/orderFormData'
import Card from './Card'

const OrderList = observer(() => {
  const items = myOrderFormData.getState();
  return (
    <div>
      {items.map((item) => (<Card key={item.id} item={item}/>))}
    </div>
  )
})

export default OrderList
