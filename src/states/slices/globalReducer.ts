/* eslint-disable import/no-cycle */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { UserPayload } from "@/types";

import { RootState } from "../store";

export interface GlobalState {
  open: boolean;
  chatStarted: boolean;
  searchModal: boolean;
  messages: Array<string>;
}

const initialState: GlobalState = {
  open: false,
  chatStarted: false,
  searchModal: false,
  messages: [],
};

export const GlobalSlice = createSlice({
  initialState,
  name: "globalstate",
  reducers: {
    setOpen: (state, action) => {
      state.open = action.payload;
    },
    setChatStarted: (state, action) => {
      state.chatStarted = action.payload;
    },
    setSearcModal: (state, action) => {
      state.searchModal = action.payload;
    },
    setMessage: (state, action) => {
      state.messages = action.payload;
    },
  },
});

export const { setOpen, setChatStarted, setSearcModal, setMessage } =
  GlobalSlice.actions;

export const SelectOpenState = (state: RootState) => state.globalstate.open;
export const startChat = (state: RootState) => state.globalstate.chatStarted;
export const openModal = (state: RootState) => state.globalstate.searchModal;
export const getMessages = (state: RootState) => state.globalstate.messages;
export const GlobalReducer = GlobalSlice.reducer;
