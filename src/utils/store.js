import {configureStore} from "@reduxjs/toolkit"
import bookReducer from "./addbookSlice";

const store = configureStore({
    reducer : {
        book : bookReducer,
    }
})
export default store;