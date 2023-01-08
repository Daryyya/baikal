import { makeAutoObservable } from 'mobx';

export interface Fields {
  from: string;
  to: string;
  currency: string;
  rate: number;
}

class FormData {
  private state: Fields = {
    from: "", 
    to: "Москва",
    currency: "USD",
    rate: 0,
  }

  constructor() {
    makeAutoObservable(this)
  }

  public setState(state: Fields) {
    this.state = state
  }

  public getState() {
    return this.state;
  }
}

export const myFormData = new FormData();