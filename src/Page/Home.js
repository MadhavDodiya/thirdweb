import React from 'react'
import Footer from './Footer';

export default function Home(props) {
  return (
    <div>
      {/* Home page */}
      <div className='bgimg1'>
        <div className='container pt-5'>
          <h5 className='text-center pb-0'>we all love</h5>
          <h1 className='text-center text-success' style={{ fontSize: "90px" }}>
            nature
          </h1>
          <h3 className='text-center display-5 pb-3'>ENDLESS POTENTIAL</h3>
          <center>
            <button className='btn1 fs-5'>
              EXPLORE
            </button>
          </center>
        </div>
      </div>


      <Footer />
    </div>
  )
}
