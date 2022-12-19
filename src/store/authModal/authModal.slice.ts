import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialStateAuthModal {
  isVisible: boolean
}


const initialState: IInitialStateAuthModal  = {
  isVisible: false,
}

export const authModalSlice = createSlice({
  name: 'authModal',
  initialState,
  reducers: {
    toggleModalAuth: (state, action: PayloadAction<{isVisible: boolean}>) => {
      state.isVisible = action.payload.isVisible
    },
  }
})


export const {reducer} = authModalSlice;