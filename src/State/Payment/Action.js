import { api } from "../../Config/apiConfig";
import {
  CREATE_ORDER_FAILURE,
  CREATE_ORDER_SUCCESS,
} from "../Order/ActionType";
import {
  CREATE_PAYMENT_REQUEST,
  UPDATE_PAYMENT_FAILURE,
  UPDATE_PAYMENT_REQUEST,
} from "./ActionType";

export const createPaymentLink = (reqData) => async (dispatch) => {
  dispatch({ type: CREATE_PAYMENT_REQUEST });
  try {
    const { data } = api.post(`/api/payment/${reqData.orderId}`, reqData);
    if (data.payment_link_url) {
      window.location.href = data.payment_link_url;
    }
    // dispatch({ type: CREATE_ORDER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CREATE_ORDER_FAILURE, payload: error });
  }
};

export const UpdatePayment = (reqData) => async (dispatch) => {
  dispatch({ type: UPDATE_PAYMENT_REQUEST });
  try {
    const { data } = api.get(
      `/api/payment?payment_Id=${reqData.orderId}&order_id=${reqData.orderId}`
    );
    if (data.payment_link_url) {
      window.location.href = data.payment_link_url;
    }
    // dispatch({ type: CREATE_ORDER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: UPDATE_PAYMENT_FAILURE, payload: error });
  }
};
