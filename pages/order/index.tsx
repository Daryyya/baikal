import { observer } from 'mobx-react';
import React from 'react';
import { myFormData } from '../../store/formData';

const Order = observer(() => {
  const state = myFormData.getState();
  return (
    <div>
      {JSON.stringify(state, null, 2)}
    </div>
  )
});

export default Order