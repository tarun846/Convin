import React from 'react'
import { useState } from 'react'
import {useDispatch} from 'react-redux/es/hooks/useDispatch';
import { addingButton } from '../Container/FormDataSlice';
import { v4 as uuid, v4 } from  'uuid'
function ButtonAdder() {
    const dispatch = useDispatch()
    const [value, setvalue] = useState('')
    const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addingButton({  id : v4(), value}))
    setvalue('')
    }
  return (
    <div className='button_adder' >
      <form onSubmit={handleSubmit} >
      <input placeholder = 'Add button name'   onChange={ (e) => setvalue(e.target.value)} value = {value} />
      <button> submit </button>
      </form>
    </div>
  )
}

export default ButtonAdder