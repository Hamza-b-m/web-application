import { GET_PRODUCT_SUCCESS, GET_PRODUCT_FAIL } from "../actions/types";

let initState = {
  productTable: [],
  errors: [],
};

const productReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        productTable: action.payload,
        errors: [],
      };

    case GET_PRODUCT_FAIL:
      return {
        ...state,
        productTable: [],
        errors: action.payload,
      };

    default:
      return state;
  }
};

export default productReducer;
