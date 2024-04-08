import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div>
      <div className='container-fluid'>
    <div className='row'>
        <div className='col-md-4'>
            <div className='container-fluid p-5'>
            <Link className="nav-link d-inline p-2" to="/">HOME</Link>           
            <Link className="nav-link d-inline p-2" to="/About">ABOUT</Link>        
            <Link className="nav-link d-inline p-2" to="/Service">SERVICE</Link>       
            <Link className="nav-link d-inline p-2" to="/Contact">CONTACT</Link>            
        </div>
        </div>

        <div className='col-md-4'>
            <div className='container-fluid p-4'>
            <center>
                <img src='img/logo-green.svg'/>
            </center>
            </div>
        </div>

        <div className='col-md-4'>
            <div className='container-fluid p-5'>
                <p>©2024 Earth. All right reserved.</p>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}
