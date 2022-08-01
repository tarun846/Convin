import { configureStore } from "@reduxjs/toolkit";
import FormValue  from "../Container/FormDataSlice";

 const store = configureStore({
    reducer : {
      form : FormValue
    }
 })

 export default store