import * as constants from "../constants";
import { store } from "../index";

export const putDataSuccess = (dataFromServer) => {
  return {
    type: constants.PUT_DATA_SUCCESS,
    payload: dataFromServer
  }
};

export const putDataFailure = (error) => {
  return {
    type: constants.PUT_DATA_FAILURE,
    payload: error
  }
};

export const loadData = () => {
  return {
    type: constants.LOAD_DATA,
  }
};

export const action = type => store.dispatch({type})
