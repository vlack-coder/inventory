import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  resource: {},
};

export const resourceSlice = createSlice({
  name: "resource",
  initialState,
  reducers: {
    addResource(state: any, action) {
      const { id } = action.payload;
      state.resource.hasOwnProperty(id)
        ? (state.resource[id] = [...state.resource[id], action?.payload.res])
        : (state.resource[id] = [action?.payload.res]);
    },
    removeRes(state: any, action) {
      console.log("action", action);
      const { id, resId } = action.payload;
      state.resource[resId] = state.resource[resId].filter(
        (v: any) => v.id !== id
      );
    },
    addResValue(state: any, action) {
      console.log("action", action);
      const { index, id, value, formId } = action.payload;
      // state.resource[id][formIndex][index].data = value;
      state.resource[id].find((v: any) => v.id === formId).value[index].data =
        value;
    },
  },
});

export const { addResource, addResValue, removeRes } = resourceSlice.actions;

export default resourceSlice.reducer;
