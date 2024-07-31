import {
  ADD_ITEM_CART_FAILURE,
  ADD_ITEM_CART_REQUEST,
  ADD_ITEM_CART_SUCCESS,
  GET_CART_FAILURE,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  REMOVE_CART_ITEM_FAILURE,
  REMOVE_CART_ITEM_REQUEST,
  REMOVE_CART_ITEM_SUCCESS,
  UPDATE_CART_ITEM_FAILURE,
  UPDATE_CART_ITEM_REQUEST,
  UPDATE_CART_ITEM_SUCCESS,
} from "./ActionType";

const initialState = {
  cart: null,
  loading: false,
  error: null,
  cartItems: [],
  cartItemDelete: false,
};

export const customerCartReducer = (state = initialState, action) => {
  switch (action.type) {
    // AddItem to cart reducer
    case ADD_ITEM_CART_REQUEST:
      return { ...state, loading: true, error: null };
    case ADD_ITEM_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        cartItems: [...state.cartItems, action.payload.carItems],
      };
    case ADD_ITEM_CART_FAILURE:
      return { ...state, loading: false, error: action.payload };

    // getCart reducer
    case GET_CART_REQUEST:
      return { ...state, loading: true, error: null };
    case GET_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        cart: action.payload,
        cartItems: action.payload.cartItems,
      };
    case GET_CART_FAILURE:
      return { ...state, loading: false, error: action.payload };

    // remove cart item reducer
    case REMOVE_CART_ITEM_REQUEST:
      return { ...state, loading: true, error: null };
    case REMOVE_CART_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        cartItemDelete: true,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    case REMOVE_CART_ITEM_FAILURE:
      return { ...state, loading: false, error: action.payload };

    // update cart item reducer
    case UPDATE_CART_ITEM_REQUEST:
      return { ...state, loading: true, error: null };
    case UPDATE_CART_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    case UPDATE_CART_ITEM_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
