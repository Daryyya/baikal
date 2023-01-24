import React, { FC } from 'react';
import { observer } from 'mobx-react';
import OrderForm from '../OrderForm';
import { Modal } from './style';
import { myOrderFormData } from '../../store/orderFormData';

const MobileOrderModal: FC = observer(() => {
  const checkedItem = myOrderFormData.getCheckedItem();

  if (!checkedItem) {
    return null;
  }

  return (
    <Modal>
      <OrderForm />
    </Modal>
  );
});

export default MobileOrderModal;
