import React, { createContext , useState,useContext} from 'react'

export const context =  createContext()
function Context({children}) {

const [modal, setModal] = useState(false);
const [modal1, setModalone] = useState(false);
const [modal2, setModaltwo] = useState(false);
const [modal3, setModalthree] = useState(false);
const [Editid, setEditid] = useState('')

const Toggle = () => setModal(!modal);
const Toggleone = () => setModalone(!modal1);
const Toggletwo = () => setModaltwo(!modal2);
const Togglethree = () => setModalthree(!modal3);

  const  value = {
     modal, 
     modal1, 
     modal2, 
     modal3, 
     Editid, 
     Toggle , Toggleone,
     Toggletwo ,Togglethree,
     setEditid
    }
  return (
    <context.Provider value={value}>
         {children}  
    </context.Provider>
  )
}

export  function useContextvalue() {
      
  const value  = useContext(context)
  if(context === undefined){
    throw new Error('useAuthUser must')
  }
  return value

}

export default Context