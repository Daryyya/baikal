import { makeAutoObservable } from 'mobx';
import { StaticImageData } from 'next/image';

export interface Item {
  id: number;
  name: string;
  image: StaticImageData;
  amount?: string;
  volume?: number;
  netWeight?: number;
  grossWeight?: number;
  cost?: number;
  key?: number;
}

class OrderFormData {
  private order: Item[] = [];
  private checkedItem: Item | undefined = undefined;

  constructor() {
    makeAutoObservable(this);
  }

  public addItem(item: Item, key: number) {
    this.order = [...this.order, { ...item, key }];
  }

  public removeItem(item: Item) {
    this.order = this.order.filter((el) => el.key !== item.key);
  }

  public editItem(item: Item, key: number) {
    this.removeItem(item);
    this.addItem(item, key);
  }

  public getState() {
    return this.order;
  }

  public setCheckedItem(item?: Item) {
    this.checkedItem = item;
  }

  public getCheckedItem() {
    return this.checkedItem;
  }
}

export const myOrderFormData = new OrderFormData();
