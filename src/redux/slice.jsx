import { createSlice } from '@reduxjs/toolkit'

export const ecommerceSlice = createSlice({
  name: 'store',
  initialState: {
    authDailog: false,
    cart: false,
    auth: 'login',
  },
  reducers: {
    AuthDailog: (state, action) => {
      state.authDailog = action.payload
    },
    Authen: (state, action) => {
      state.auth = action.payload
    },
    CartHover: (state, action) => {
      state.cart = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { AuthDailog, Authen, CartHover } = ecommerceSlice.actions


export default ecommerceSlice.reducer
