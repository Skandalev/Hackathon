import { createSlice } from "@reduxjs/toolkit";

export const ReportSlicer = createSlice({
  name: "report",
  initialState: {
    selectEvent:true,
    report: {
      selectReport: "",
      photo: "",
      address: "",
      fullName: "",
      email: "",
      phone: "",
    },
    request: {
      description:"",
      photo: "",
      address: "",
      fullName: "",
      email: "",
      phone: "",
    },
  },

  reducers: {
    updateReport: (state, values) => {
      console.log(values.payload)
      state.report.selectReport = values.payload.selectReport;
      state.report.picture = values.payload.picture;
      state.report.adress = values.payload.adress;
      state.report.email = values.payload.email;
      state.report.phone = values.payload.phone;
      state.report.fullName = values.payload.fullName;
    },

    updateRequest: (state, values) => {
      state.report.description = values.payload.description;
      state.report.picture = values.payload.picture;
      state.report.adress = values.payload.adress;
      state.report.email = values.payload.email;
      state.report.phone = values.payload.phone;
      state.report.fullName = values.payload.fullName;
    },

  },
});

export const { updateReport, updateRequest} = ReportSlicer.actions;
export const selectReport = (state) => state.profile.profile;
export default ReportSlicer.reducer;
