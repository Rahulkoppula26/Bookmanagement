import { createSlice } from "@reduxjs/toolkit";
import { Books } from "./mockData";
const addbookSlice =createSlice({
    name:"book",
    initialState:{
        items:[...Books],
    },
    reducers:{
        addBook:(state,action) =>{
            state.items.push(action.payload)
            Books.push(action.payload);
            console.log(action.payload);
            console.log(Books);
        }
    }
})
export const {addBook} = addbookSlice.actions;
export default addbookSlice.reducer;