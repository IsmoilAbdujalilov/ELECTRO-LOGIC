import { initialState } from "./initialState";
import { DELETE_DATA, GET_DATA } from "./types";

export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case DELETE_DATA:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};
