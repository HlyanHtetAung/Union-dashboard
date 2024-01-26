import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type User = {
  token: string;
  userId: string;
  password: string;
};

const initialState: User = {
  token: "",
  userId: "Hello",
  password: "",
};

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    emptyState: (state) => {
      state.userId = "";
    },
    logOut: () => {
      return initialState;
    },
    logIn: (state, action: PayloadAction<any>) => {
      state.token = action.payload;
    },
  },
});

export const { logIn, logOut, emptyState } = auth.actions;
export default auth.reducer;
