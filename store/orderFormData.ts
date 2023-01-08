import { makeAutoObservable } from 'mobx';
import { StaticImageData } from 'next/image';

export interface Item {
  id: number;
  name: string;
  image: StaticImageData;
  amount?: number;
  volume?: number;
  netWeight?: number;
  grossWeight?: number;
  cost?: number;
}

class OrderFormData {
  private order: Item[] = []

  constructor() {
    makeAutoObservable(this)
  }

  public addItem(item: Item) {
    this.order = [...this.order, item]
  }

  public removeItem(item: Item) {
    this.order = this.order.filter(el => el.id !== item.id)
  }

  public setState(state: Item[]) {
    this.order = state
  }

  public getState() {
    return this.order;
  }
}

export const myOrderFormData = new OrderFormData();