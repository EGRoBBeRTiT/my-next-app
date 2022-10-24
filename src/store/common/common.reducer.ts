import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { GlobalState } from "./common.type";

const initialState: GlobalState = {
  email: "",
  phone: "",
  password: "",
};

export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    pushFields: (state, { payload }: PayloadAction<Partial<GlobalState>>) => {
      if (payload.email) {
        state.email = payload.email;
      }

      if (payload.password) {
        state.password = payload.password;
      }

      if (payload.phone) {
        state.phone = payload.phone;
      }
    },

    clearStore: () => initialState,
  },
});

// Action creators are generated for each case reducer function
export const { pushFields, clearStore } = commonSlice.actions;

export default commonSlice.reducer;
