import React from 'react'
import Footer from './Footer';

export default function Contact() {
  return (
    <div>
      <>
      
      <div className='bgimg4'>
        <div className='container p-5'>
          <center>
            <h1 className='display-1 p-5'><b>CONTACT US</b></h1>
          </center>
        </div>
      </div>

      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='container pt-5 pb-3 text-success'>
              <h1>You can find us at</h1>
            </div>
            <div className='container pt-5 text-success'>
              <h6>EMAIL</h6>
              <h4>hello@tyler.com</h4>
            </div>

            <div className='container pt-5 text-success'>
              <h6>PHONE NUMBER</h6>
              <h4>202-555-0188</h4>
            </div>

            <div className='container pt-5 text-success'>
              <h6>LOCATION</h6>
              <h4>2360 Hood Avenue, San Diego, CA, 92123</h4>
            </div>

            <div className='container'>
              <button className='btn3'><i class="fa fa-facebook" aria-hidden="true"></i></button>
              <button className='btn3'><i class="fa fa-instagram" aria-hidden="true"></i></button>
              <button className='btn3'><i class="fa fa-youtube-play" aria-hidden="true"></i></button>
            </div>
          </div>

          <div className='col-md-6'>
          <div className='container pt-5 pb-3 text-success'>
              <h1>Let's get in touch</h1>
            </div>

            <div className='container-fluid'>
              <input type='text' placeholder='Your Name' style={{width:"90%",padding:"10px 5px",marginTop:"20px",border:"none",outline:"none"}}/>
              <input type='text' placeholder='Your Name' style={{width:"90%",padding:"10px 5px",marginTop:"20px",border:"none",outline:"none"}}/>
              <textarea type='massage' placeholder='Massage' style={{height:"100px",width:"90%",marginTop:"20px",padding:"10px 5px",border:"none",outline:"none"}}></textarea>
              <button className='btn1'>
                Send Massage
              </button>
            </div>
          </div>
        </div>
      </div>

      
      
      
      
      </>












      <Footer/>
    </div>
  )
}
