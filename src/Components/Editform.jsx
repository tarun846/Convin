
import React , {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { EditData } from '../Container/FormDataSlice'
import { useContextvalue } from '../Context/Context'
function Editform() {
     const dispatch = useDispatch()
     const data =  useSelector(state => state.form.cardvalue)
     const [first, setfirst] = useState(data)
     const {Editid} = useContextvalue()
     let  formdata = first.find((e) => e.id === Editid)
     console.log(formdata);
     function handlesubmit(e){
        
      e.preventDefault()
      console.log(first);
      dispatch(EditData(first))
    //   const newRecipes = [...data]
    //   const index = newRecipes.findIndex(r => r.id === id)
    //   newRecipes[index] = recipe
    // //   const completedata = [...data , first]  
    // dispatch(EditData(newRecipes))
   
     } 

     function handleChange(id,recipe) {
        const newRecipes = [...data]
        const index = newRecipes.findIndex(r => r.id === id)
        newRecipes[index] = recipe
   
        setfirst(newRecipes) 
         formdata = first
    }
     
     function handleinputchange(e) {
        handleChange(formdata.id , { ...formdata , [e.target.name] : e.target.value }) 
     } 
  
    return (
      <div className='form_container' >
     <form   onSubmit={handlesubmit} >
  <div > 
       <input type="url" placeholder='we are only accepting yt link for now' name ='url' value={formdata.url}  onChange = {handleinputchange} required />
  </div>
  
  <div>
     <input type="text" id='fname'  placeholder='name'  name ='name' value={formdata.name}  onChange = {handleinputchange} required />
  </div>
  
  <div>
    <input type="text" id='Category'  placeholder='Category' name ='Category' value={formdata.Category} onChange = {handleinputchange}  required />
  </div>
  
  <button> submit </button>
     </form>
  
      </div>
    )
}

export default Editform