import { Action } from 'redux';

export interface Category {
  id: number;
  name: string;
  image: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  category: Category
}

export interface ShopState {
  products: Product[];
}

export type ShopAction = Action;