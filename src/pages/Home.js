import React from 'react'
import {useSelector } from 'react-redux/es/hooks/useSelector';
import ModalContainer from '../Components/ModalContainer';
import Filter from '../Components/Filter';
import CardContainer from '../Components/Card';
import { useContextvalue } from '../Context/Context';
function Home() {

const {Toggle} =  useContextvalue()


    return (
    <div> 
   
     
    
         
<div className='container' >

<div className="modal_activer">
        <button onClick={() => Toggle()} >add item +</button>
</div>

    <Filter />
    <CardContainer/>
    </div>
    <ModalContainer/>

    </div>
  )
}

export default Home