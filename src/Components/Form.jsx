import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { addingdata } from '../Container/FormDataSlice'
import { v4 as uuid } from  'uuid'

function Form() {
  const dispatch = useDispatch()  
   
  const [first, setfirst] = useState({
    url : '',
    name : '',
    Category: '',
  })

 function handlesubmit(e){
     
  e.preventDefault()  
  if (first.url.trim() === '' &&  first.name.trim() === '' && first.name.trim() === '' ) return        
  
  const idwala = {
    ...first,
    id : uuid()
  }
  dispatch(addingdata(idwala))

  setfirst(
    {
      url : '',
      name : '',
      Category: ''
    }
  )

 } 
 function handleChange(e) {
  setfirst({
    ...first,
    [e.target.name] : e.target.value
  })
 }


return (
  <div className='form_container' >
 <form   onSubmit={handlesubmit} >
<div > 
   <input type="url" placeholder='we are only accepting yt link for now' onChange={handleChange} value = {first.url}   name ='url'  required />
</div>

<div>
 <input type="text" id='fname'  placeholder='name'  name ='name'  onChange={handleChange} value = {first.name}  required />
</div>

<div>
<input type="text" id='Category'  placeholder='Category' name ='Category' onChange={handleChange} value = {first.Category}  required />
</div>

<button> submit </button>
 </form>

  </div>
  )
}

export default Form