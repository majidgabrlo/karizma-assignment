import { Dispatch } from "redux";
import { add, remove } from "./selectedSlice";
export const addNewItem = (title: string) => (dispatch: Dispatch) => {
  dispatch(add({ title }));
};

export const removeItem = (id: number) => (dispatch: Dispatch) => {
  dispatch(remove({ id }));
};
