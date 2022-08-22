import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  resource: {},
};
const res = {
  ijs: [[], []],
  jkl: [[], []],
};
export const resourceSlice = createSlice({
  name: "resource",
  initialState,
  reducers: {
    addRes(state: any, action) {
      const { id } = action.payload;
      state.resource.hasOwnProperty(id)
        ? (state.resource[id] = [...state.resource[id], action?.payload.res])
        : (state.resource[id] = [action?.payload.res]);
    },
    addResValue(state: any, action) {
      console.log("action", action);
      const { index, id, value, formIndex, formId } = action.payload;
      // state.resource[id][formIndex][index].data = value;
      state.resource[id].find((v: any) => v.id === formId)
      .value[index].data = value
    },
  },
});

export const { addRes, addResValue } = resourceSlice.actions;

export default resourceSlice.reducer;
