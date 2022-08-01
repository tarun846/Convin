import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FilteredData } from '../Container/FormDataSlice'
import  {useContextvalue} from '../Context/Context'


function Filter() {
 const {Toggleone} = useContextvalue()
const buttonselector  = useSelector((state) => state.form.button)
const dispatch =  useDispatch()

    const handleclick = (e) => {
   
      
      dispatch(FilteredData(e))
    }

  return (
    <div  className='filter-container' >
      {buttonselector?.map((e , i) => {
      return  <button key={e.id}  onClick = {() =>  handleclick(e.value) } >{e.value}</button>
      } )}
      <button className='Add_button' onClick={ () =>  Toggleone()} >+</button>
    </div>
  )
}

export default Filter