import { Product } from "../types";

export const productsReducer = (state: Product[], action: any) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return action.payload;
    default:
      return state;
  }
};
