import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type LoginStateType = {
  autoLogined: boolean;
  accessToken: string | null;
  refreshToken: string | null;
};

const INITIAL_STATE: LoginStateType = {
  autoLogined: false,
  accessToken: null,
  refreshToken: null,
};

const login = createSlice({
  name: 'login',
  initialState: INITIAL_STATE,
  reducers: {
    logined: (state, action: PayloadAction<LoginStateType>) => {
      state = action.payload;
    },
  },
});

export const { logined } = login.actions;

export default login;
