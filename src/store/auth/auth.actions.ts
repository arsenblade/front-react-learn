import { createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "../../service/auth/auth.service";
import { IUser } from "../../types/user.types";
import { IUserLogin, IUserRegistration } from "./auth.interface";

export const registration = createAsyncThunk<IUser, IUserRegistration>('registration', async ({email, password, name, avatar}, thunkApi) => {
  try {
    const response = await authService.register({email, password, name, avatar})
    return response.data
  } catch (e) {
    return thunkApi.rejectWithValue(e)
  }
})

export const login = createAsyncThunk<IUser, IUserLogin>('login', async ({email, password}, thunkApi) => {
  try {
    const response = await authService.login({email, password})
    return response.data
  } catch (e) {
    return thunkApi.rejectWithValue(e)
  }
})

export const logout = createAsyncThunk('logout', async (_, thunkApi) => {
  try {
    await authService.logout()
  } catch (e) {
    return thunkApi.rejectWithValue(e)
  }
})
