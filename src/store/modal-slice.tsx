import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isContactModalOpen: false,
  },
  reducers: {
    openContactModal(state) {
      state.isContactModalOpen = true;
    },
    hideContactModal(state) {
      state.isContactModalOpen = false;
    },
  },
});

export const modalActions = modalSlice.actions;

export default modalSlice;
