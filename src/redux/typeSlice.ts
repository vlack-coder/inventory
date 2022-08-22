import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  types: {},
};

export const appSlice = createSlice({
  name: "type",
  initialState,
  reducers: {
    addType(state: any, action) {
      console.log("state.types", state);
      // console.log('action.payload', action.payload)
      state.types[action.payload.id] = [
        { label: "Object type", value: "", opt: "text", data: "" },
        { label: "Object title", value: "", opt: "text", data: "" },
      ];
      console.log("state.types", state.types);
    },
    addField(state: any, action) {
      console.log('action.payload', action.payload)
      state.types[action.payload.id].push({
        label: "",
        value: "",
        opt:  action.payload.value.value,
        data: ""
      });
    },
    addValue(state: any, action) {
      console.log("action", action);
      const { index, id, value } = action.payload;
      state.types[id][index].value = value;
    },
  },
});

export const { addType, addField, addValue } = appSlice.actions;

export default appSlice.reducer;
