import { ProductActionType } from "./ProductActionType";

const initialstate = [];
export const ProductReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case ProductActionType.SET_PRODUCTS:
      return payload.products;
    case ProductActionType.SELECTED_PRODUCT:
      return state;

    default:
      return state;
  }
};
