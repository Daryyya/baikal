import { OrderFormFields } from '../../store/orderFormData';

export interface FormFields extends OrderFormFields {
  amount: number;
}
