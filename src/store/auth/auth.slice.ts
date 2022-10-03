import { createSlice } from "@reduxjs/toolkit";
import { MyToast } from "../../components/ui/MyToast/MyToast";
import { getStoreLocal } from "../../utils/getStoreLocal";
import { login, logout, register } from "./auth.actions";
import { IInitialStateAuth } from "./auth.interface";


const initialState: IInitialStateAuth  = {
  isLoading: false,
  error: '',
  user: getStoreLocal('user'),
}

export const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(register.fulfilled, (state, {payload}) => {
      state.isLoading = false;
      state.user = {
        name: payload.name,
        id: payload.id,
        avatar: payload.avatar,
        pointQuestions: payload.pointQuestions
      }
      MyToast('Вы успешно зарегистрировались', true)
    })
    .addCase(register.rejected, (state) => {
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
        pointQuestions: payload.pointQuestions
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