import { createSlice } from "@reduxjs/toolkit";
import { MyToast } from "../../components/ui/MyToast/MyToast";
import { getStoreLocal } from "../../utils/getStoreLocal";
import { login, logout, registration } from "./auth.actions";
import { IInitialStateAuth, IUserState } from "./auth.interface";


const initialState: IInitialStateAuth  = {
  isLoading: false,
  error: '',
  user: getStoreLocal<IUserState>('user'),
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registration.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(registration.fulfilled, (state, {payload}) => {
      state.isLoading = false;
      state.user = {
        name: payload.name,
        id: payload.id,
        avatar: payload.avatar,
        pointTests: payload.pointTests,
        isAdmin: payload.isAdmin
      }
      MyToast('Вы успешно зарегистрировались', true)
    })
    .addCase(registration.rejected, (state) => {
      state.isLoading = false;
      state.user = null
      MyToast('Произошла ошибка при регистрации', false)
    })
    .addCase(login.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(login.fulfilled, (state, {payload}) => {
      state.isLoading = false;
      state.user = {
        name: payload.name,
        id: payload.id,
        avatar: payload.avatar,
        pointTests: payload.pointTests,
        isAdmin: payload.isAdmin
      }
      MyToast('Вы успешно авторизировались', true)
    })
    .addCase(login.rejected, (state) => {
      state.isLoading = false;
      state.user = null
      MyToast('Произошла ошибка при авторизации', false)
    })
    .addCase(logout.fulfilled, (state) => {
      state.user = null;
      MyToast('Вы вышли успешно', true)
    })
  }
})


export const {reducer} = authSlice;