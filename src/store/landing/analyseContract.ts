import { createSlice } from "@reduxjs/toolkit";

export interface AnalyseContractState {
  items: any[];
}

const initialState: AnalyseContractState = {
  items: [
    { icon: "•", point: "items.point1" },
    { icon: "•", point: "items.point2" },
    { icon: "•", point: "items.point3" },
    { icon: "•", point: "items.point4" },
    { icon: "•", point: "items.point5" },
    { icon: "•", point: "items.point6" },
    { icon: "•", point: "items.point7" },
    { icon: "•", point: "items.point8" },
  ],
};

export const analyseContract = createSlice({
  name: "analyseContract",
  initialState,
  reducers: {},
});

export const {} = analyseContract.actions;

export default analyseContract.reducer;
