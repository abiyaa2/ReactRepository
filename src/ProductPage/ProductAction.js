import { ProductActionType } from "./ProductActionType";

export const setProducts = (products) => {
  return {
    type: ProductActionType.SET_PRODUCTS,
    payload: {
        products:products
     }
  };
};

export const selectedProduct = (product) => {
  return {
    type: ProductActionType.SELECTED_PRODUCT,
    payload: {
       products:product
    }
  };
};

