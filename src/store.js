import { configureStore } from "@reduxjs/toolkit";
import  ProfileReducer  from "./ProfileSlice"


export default configureStore({
    reducer : {
        report : ReportSlicer
    }
})