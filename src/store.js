import { configureStore } from "@reduxjs/toolkit";
import  ReportReducer  from "./reportSlicer"


export default configureStore({
    reducer : {
        report : ReportReducer
    }
})