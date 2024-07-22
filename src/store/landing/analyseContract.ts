import { createSlice } from "@reduxjs/toolkit";

export interface AnalyseContractState {
  items: any[];
}

const initialState: AnalyseContractState = {
  items: [
    { icon: "BadgeIcon", point: "items.point1" },
    { icon: "GavelIcon", point: "items.point2" },
    { icon: "PaymentIcon", point: "items.point3" },
    { icon: "AccessTimeIcon", point: "items.point4" },
    { icon: "NotInterestedIcon", point: "items.point5" },
    { icon: "Diversity3Icon", point: "items.point6" },
    { icon: "AssuredWorkloadIcon", point: "items.point7" },
    { icon: "PhishingIcon", point: "items.point8" },
  ],
};

export const analyseContract = createSlice({
  name: "analyseContract",
  initialState,
  reducers: {},
});

export const {} = analyseContract.actions;

export default analyseContract.reducer;
