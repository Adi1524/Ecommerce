import { api } from "../../Config/apiConfig";
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

export const get = () => async (dispatch) => {
  dispatch({ type: GET_CART_REQUEST });

  try {
    const { data } = await api.get("/api/cart/");
    dispatch({ type: GET_CART_SUCCESS, payload: data });
    console.log("user cart items :", data);
  } catch (error) {
    dispatch({ type: GET_CART_FAILURE, payload: error.message });
  }
};

// Action to add a cart item
export const addCartItem = (reqData) => async (dispatch) => {
  dispatch({ type: ADD_ITEM_CART_REQUEST });
  const { productId, size, quantity } = reqData;

  try {
    const response = await api.put("/api/cart/add", {
      productId,
      size,
      quantity,
    });
    dispatch({ type: ADD_ITEM_CART_SUCCESS, payload: response.data });
    console.log("the added product to the cart:", response.data);
  } catch (error) {
    dispatch({ type: ADD_ITEM_CART_FAILURE, payload: error.message });
  }
};

// Action to remove a cart
export const removeCartItem = (reqData) => async (dispatch) => {
  dispatch({ type: REMOVE_CART_ITEM_REQUEST });
  try {
    const response = await api.delete(`/api/cart_items/${reqData.cartItemId}`);
    dispatch({ type: REMOVE_CART_ITEM_SUCCESS, payload: response.cartItemId });
  } catch (error) {
    dispatch({ type: REMOVE_CART_ITEM_FAILURE, payload: error.message }); // Changed to GET_CART_FAILURE to indicate an error
  }
};

export const updateCartItem = (reqData) => async (dispatch) => {
  dispatch({ type: UPDATE_CART_ITEM_REQUEST });
  const { cartItemId } = reqData;

  try {
    const response = await api.delete(`/api/cart_items/${reqData.cartItemId}`);
    dispatch({ type: UPDATE_CART_ITEM_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: UPDATE_CART_ITEM_FAILURE, payload: error.message }); // Changed to GET_CART_FAILURE to indicate an error
  }
};
