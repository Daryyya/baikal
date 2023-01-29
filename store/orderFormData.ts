import { makeAutoObservable } from 'mobx';
import { StaticImageData } from 'next/image';

export interface OrderFormFields {
  amount?: number;
  volume?: number;
  netWeight?: number;
  grossWeight?: number;
  cost?: number;
}

export interface Item extends OrderFormFields {
  id: number;
  name: string;
  image: StaticImageData;
  key?: number;
}

class OrderFormData {
  private order: Item[] = [];

  private checkedItem: Item | undefined = undefined;

  private isContactFormOpen = false;

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

  public editItemInOrder = (newItem: Item) => {
    const target = this.order.findIndex((itm) => itm.key === newItem.key);

    if (typeof target !== undefined) {
      this.order[target] = newItem;
    }
  };

  public getIsContactFormOpen() {
    return this.isContactFormOpen;
  }

  public setIsContactFormOpen = (isOpen: boolean) => {
    this.isContactFormOpen = isOpen;
  };

  public setCheckedItem(item?: Item) {
    this.checkedItem = item;
  }

  public removeCheckedItem = () => {
    this.checkedItem = undefined;
  };

  public getCheckedItem() {
    return this.checkedItem;
  }

  public reset = () => {
    this.order = [];
  };

  public getTotalValue() {
    return this.order.reduce(
      (acc, el) => ({
        totalAmount: acc.totalAmount + Number(el.amount),
        totalNetWeight: acc.totalNetWeight + Number(el.netWeight),
        totalGrossWeight: acc.totalGrossWeight + Number(el.grossWeight),
        totalVolume: acc.totalVolume + Number(el.volume),
        totalCost: acc.totalCost + Number(el.cost),
      }),
      {
        totalAmount: 0,
        totalNetWeight: 0,
        totalGrossWeight: 0,
        totalVolume: 0,
        totalCost: 0,
      }
    );
  }
}

export const myOrderFormData = new OrderFormData();
