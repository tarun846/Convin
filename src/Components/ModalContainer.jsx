import React from 'react'
import ButtonAdder from './ButtonAdder'
import Form from './Form'
import Modal from './Modal'
import { useContextvalue } from '../Context/Context';
import Iframeplayer from './Iframeplayer';
import Editform from './Editform';
function ModalContainer() {
const {  modal,modal1,Toggle , Toggleone,modal2,Toggletwo,modal3,Togglethree } = useContextvalue()

return (
       <div>
<Modal show={modal} title = "form" close={Toggle} key = {1} >
         <Form/>
</Modal>

<Modal show={modal1} title = "Add Category" close={Toggleone} key = {2} >
      <ButtonAdder/>
</Modal>

<Modal show={modal2} title = "Video player" close={Toggletwo} key = {3} >
      <Iframeplayer/>
</Modal>


<Modal show={modal3} title = "Edit Card" close={Togglethree} key = {4} >
      <Editform/>
</Modal>





      </div>
  )
}

export default ModalContainer