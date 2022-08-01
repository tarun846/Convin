import { createSlice} from "@reduxjs/toolkit";

const initialState = {
  cardvalue : [] ,
  button :    [{
    value : 'All',
    id : 0,
  }],
  currentvideourl : '',
  history :   [],
  filterdata : [],

 }
export const FormValue = createSlice({
 name : 'Formdata',
 initialState :  JSON.parse(localStorage.getItem('bini')) || initialState,
 reducers : {
       addingdata: (state , action) => {
          state.cardvalue.push(action.payload)
          state.filterdata.push(action.payload)
        localStorage.setItem('bini' , JSON.stringify(state))
      },
       addingButton :(state , action) => {
         state.button.push(action.payload)
         localStorage.setItem('bini' , JSON.stringify(state))
      },
       playButton : (state,action) => {
        const value  = state.cardvalue.find(e => e.id === action.payload)
        state.currentvideourl = value.url;
        state.history.push({date : Date().toString() , ...value });
        localStorage.setItem('bini' , JSON.stringify(state))
      },

      FilteredData : (state , action) => {
        if (action.payload === 'All') {
        state.filterdata = []
        state.filterdata.push(...state.cardvalue)
        return
       }

        const data  = state.cardvalue
        const filtered = data.filter((e) => e.Category.toUpperCase()  === action.payload.toUpperCase())
        state.filterdata = []
        state.filterdata.push(...filtered);
      },
 
      EditData : (state, action) => {
       
        state.cardvalue = []
        state.filterdata = []
        state.cardvalue.push(...action.payload)
        state.filterdata.push(...action.payload)  
        localStorage.setItem('bini' , JSON.stringify({...state , cardvalue : action.payload , filterdata : action.payload }))
       } , 
        Deletedata :(state,action) => {
       const data =    JSON.parse(localStorage.getItem('bini')).cardvalue.filter((e =>e.id !== action.payload ))
       const history = JSON.parse(localStorage.getItem('bini')).history.filter((e =>e.id !== action.payload ))
       localStorage.setItem('bini' , JSON.stringify( { ...state , cardvalue : data , filterdata : data ,   history : history })) 
       return  { ...state , cardvalue : data , filterdata : data , history : history}
        // return   
        
    },
       

      
 }



})

export const {addingdata ,  Deletedata ,  addingButton, FilteredData , playButton , EditData }  = FormValue.actions
export default FormValue.reducer