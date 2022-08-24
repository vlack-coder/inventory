import { createSlice } from "@reduxjs/toolkit";

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
        { label: "Object type", value: "", opt: "text", data: "", se: true },
        {
          label: "Object title",
          value: "",
          opt: "select",
          data: "Title",
          se: true,
          select: true,
        },
        { value: "Title", opt: "text", data: "" },
      ];
      console.log("state.types", state.types);
    },
    removeType(state: any, action) {
      console.log("state.types", state.types[action.payload.typeId]);
      delete state.types[action.payload.typeId];
    },
    addField(state: any, action) {
      console.log("action.payload", action.payload);
      state.types[action.payload.id].push({
        label: "",
        value: "",
        opt: action.payload.value.value,
        data: "",
      });
    },
    addValue(state: any, action) {
      console.log("action", action);
      const { index, id, value } = action.payload;
      state.types[id][index].value = value;
      // state.types[id][1].data = value;ZZ
    },
    changeField(state: any, action) {
      console.log("action", action);
      const { index, id, value } = action.payload;
      if (value.value === "remove") {
        state.types[id].splice(index, 1)
        return
      }
      state.types[id][index].opt = value.value;
    },
    changeTitle(state: any, action) {
      console.log("action", action);
      const { id, value } = action.payload;
      state.types[id][1].data = value.value;
    },
    removeField(state: any, action) {
      console.log("action", action);
      const { index, id } = action.payload;
      state.types[id].filter((v: any, ind: any) => ind !== index);
    },
  },
});

export const {
  addType,
  addField,
  addValue,
  changeField,
  removeField,
  removeType,
  changeTitle,
} = appSlice.actions;

export default appSlice.reducer;
