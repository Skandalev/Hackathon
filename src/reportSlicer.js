import { createSlice } from "@reduxjs/toolkit";

export const ReportSlicer = createSlice({
  name: "report",
  initialState: {
    selectEvent:true,
    report: {
      selectReport: "",
      photo: "",
      address: "",
      fullName: "ofek yehoshua",
      email: "yehoshuaofek@gmail.com",
      phone: "0526766563",
    },
    request: {
      description:"",
      photo: "",
      address: "",
      fullName: "ofek yehoshua",
      email: "yehoshuaofek@gmail.com",
      phone: "0526766563",
    },


  },

  reducers: {
    updateReport: (state, values) => {
      console.log(values.payload)
      state.report.selectReport = values.payload.selectReport;
      state.profile.lastName = values.payload.lastName;
      state.profile.email = values.payload.email;
      state.profile.date = values.payload.date;
    },

    updateRequest: (state, values) => {
      state.socials.address = values.payload.address;
      state.socials.linkedIn = values.payload.linkedIn;
      state.socials.facebook = values.payload.facebook;
      state.socials.twitter = values.payload.twitter;
      state.socials.instegram = values.payload.instegram;
    },

    updateUser: (state, values) => {
      if( values.payload.email === state.profile.email && values.payload.password == state.profile.password){
        state.user.email = values.payload.email;
        state.user.password = values.payload.password;
      }
    },

    logout: (state) => {
      state.user.email = ""
      state.user.password = ""
    },

    updatePayment: (state, values) => {
      console.log(values.payload)
      state.payment.cardName = values.payload.cardName;
      state.payment.cardNumber = values.payload.cardNumber;
      state.payment.expireDate = values.payload.expireDate;
      state.payment.Cvv = values.payload.Cvv;
    }
  },
});

export const { update, updateSocials, updateUser, updatePayment,logout } = ProfileSlice.actions;
export const selectProfile = (state) => state.profile.profile;
export const selectSocials = (state) => state.profile.socials;
export const selectUser = (state) => state.profile.user;
export const selectPayment = (state) => state.profile.payment;
export default ReportSlicer.reducer;
