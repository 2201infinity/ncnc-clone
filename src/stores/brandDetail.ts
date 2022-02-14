import { createSlice } from "@reduxjs/toolkit";
import { rootState } from "./store";

export interface Root {
  id: number;
  name: string;
  conCategory1Id: number;
  imageUrl: string;
  conItems: ConItem[];
}

export interface ConItem {
  id: number;
  name: string;
  originalPrice: number;
  minSellingPrice: number;
  count: number;
  imageUrl: string;
}

const initialState = {
  id: 0,
  name: "",
  conCategory1Id: 0,
  imageUrl: "",
  conItems: [],
};

const brandDetail = createSlice({
  name: "brandDetailReducer",
  initialState,
  reducers: {
    setBrandDetail: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.conCategory1Id = action.payload.conCategory1Id;
      state.imageUrl = action.payload.imageUrl;
      state.conItems = action.payload.conItems;
    },
  },
});

export const { setBrandDetail } = brandDetail.actions;
export const brandDetailSelecter = (state: rootState) => state.brandDetail;
export default brandDetail;
