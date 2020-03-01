import * as constants from "../constants";

const initalState = {
  data: {},
  isLoading: false,
  error: "",
};

export const putDataReducer = (state = initalState, action) => {
  switch (action.type) {
    case constants.LOAD_DATA:
      return { ...state, isLoading: true };
    case constants.PUT_DATA_SUCCESS:
      return { ...state, data: action.payload, isLoading: false, error: "" };
    case constants.PUT_DATA_FAILURE:
      return { ...state, error: action.payload, isLoading: false, };
    default:
      return state;
  }
};

export default putDataReducer;
