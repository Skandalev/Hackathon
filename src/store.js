import { configureStore } from "@reduxjs/toolkit";
import  ReportReducer  from "./ReportSlicer"


export default configureStore({
    reducer : {
        report : ReportReducer
    }
})