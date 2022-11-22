import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ItemType = {
  title: string;
  id: number;
};
const initialState: ItemType[] = [];

let id = 0;

export const SelectedItemsSlice = createSlice({
  name: "selectedItems",
  initialState,
  reducers: {
    add: (state, { payload }: PayloadAction<{ title: string }>) => {
      const { title } = payload;
      id++;
      state.push({ id, title });
    },
    remove: (state, { payload }: PayloadAction<{ id: number }>) => {
      const { id } = payload;
      state.splice(state.findIndex((item) => item.id === id), 1);
    },
  },
});

export const { add, remove } = SelectedItemsSlice.actions;
export default SelectedItemsSlice.reducer;
