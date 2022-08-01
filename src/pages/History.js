import { motion } from 'framer-motion';
import React from 'react'
import {useSelector } from 'react-redux/es/hooks/useSelector';

function History() {
    
  return (
    <div className='container'>  
    <h1 style={{ 'paddingBottom' : '10px' }} >History</h1>
    <div className='popular-movies' >
        
        <Historytabs/>

    </div>
    </div>
  )
}

function Historytabs() {
const  History =  useSelector((state) => state.form.history)
    
return (
    <>
    
    {History.map(e => {
        return (
         <motion.div className='list_sahi' key={e.id} >
              < h1 style={{ 'paddingLeft' : '25px' }} > {e.name} </h1>
              <h2> {e.date} </h2>
         </motion.div>
        )
     })}
     </>
) 

}

export default History