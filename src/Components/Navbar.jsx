import React from 'react'
import { Link } from 'react-router-dom'
import { useContextvalue } from '../Context/Context'

function Navbar() {

  return (
    <div className='nav_bar' >
      <div className="logo"> 
      
      <h3>
          <Link to= '/' >Convin project</Link></h3>
         </div>
       <div className="link">
          <h2  >
            <Link to='/history' > History </Link>
          </h2>
       </div>
     
    </div>
  )
}

export default Navbar