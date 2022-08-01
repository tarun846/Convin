import React , { useEffect , useState }from 'react'
import { motion } from 'framer-motion';
import { Deletedata, playButton } from '../Container/FormDataSlice';
import {useDispatch} from 'react-redux/es/hooks/useDispatch';
import {useSelector } from 'react-redux/es/hooks/useSelector';
import { useLocalStorage } from "../Hook/UselocalStoragehook";
import { useContextvalue } from '../Context/Context';

function CardContainer() {
  const  formdata =  useSelector((state) => state.form)



  

  return (
    <motion.div layout  className='popular-movies'> 
    {formdata?.filterdata.map( e => {
          return   <Card data = {e}  key={e.id} />
      })}
    </motion.div>
  )
}



function Card({data}) {
  const {Toggletwo ,Togglethree,setEditid } = useContextvalue()
  const dispatch = useDispatch()
  const {name,id} = data

function handleclick() {
      dispatch(Deletedata(id))
}

function handleplay() {
       dispatch(playButton(id))
      Toggletwo()
}

function handleEdit() {
  setEditid(id)
  Togglethree()
  // dispatch()
}
  return (
    <motion.div layout className='list_sahi' key={id}   >
   
        <h2>{name}</h2>
      
      
      <div className="btn">
      <button  className= "play"      onClick={handleplay} > play  </button>
          <button className= "Edit"   onClick={handleEdit} > Edit </button>
          <button className= "Delete" onClick={handleclick} > Delete </button>

      </div>
    </motion.div>
  )
}

export default CardContainer