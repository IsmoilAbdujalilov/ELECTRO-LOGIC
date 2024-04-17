import { DELETE_DATA, GET_DATA } from "./types";

export const GET_DATAS = (data: any) => {
  return { type: GET_DATA, payload: data };
};

export const DELETE_DATAS = (data: any) => {
  return { type: DELETE_DATA, payload: data };
};
