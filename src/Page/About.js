import React from 'react'
import Footer from './Footer';

export default function About() {
  return (
    <div>
      <>
      <div className='bgimg3'>
        <div className='container p-5'>
          <center>
            <h1 className='display-1 p-5 text-light'><b>about us</b></h1>
          </center>
        </div>
      </div>
      
      <div className='container p-5'>
        <center>
        <h4 className='text-center pb-4 fs-2' style={{fontFamily:"merriweather",color:"#536942"}}>
        We’re a highly collaborative and supportive team, <br/>coming together on every project to ensure our<br/>clients get the very best result.
          </h4>
        </center>
      </div>

      <div className='container'>
        <img src='img/contact-hero.jpg' className='img-fluid'/>
      </div>

      <div className='container p-3'>
        <div className='row'>
          <div className='col-md-6 p-3'>
            <div className='container-fluid'>
              <h3 className='text-center text-success'>Our Mission</h3>
              <p className='text-center text-success'>Build the best product that creates the most value for our customers, use business to inspire and implement environmentally friendly solutions.</p>
            </div>
          </div>

          <div className='col-md-6 p-3'>
            <div className='container-fluid'>
              <h3 className='text-center text-success'>Our Mission</h3>
              <p className='text-center text-success'>Build the best product that creates the most value for our customers, use business to inspire and implement environmentally friendly solutions.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='container pt-5'>
        <center>
          <img src='img/quotes.svg'/>
        </center>
      </div>

      <div className='container'>
        <center>
          <h3 className='pt-3 pb-5' style={{color:"#536942",fontFamily:"merriweather"}}>
          “Love Nature has an amazing team of hard working <br/>professionals. It has been a pleasure to meet them.”
          </h3>
          <img src='img/avatar_on_about.png' style={{height:"70px"}}/>
          <p>Emily Davis</p>
        </center>
      </div>


      </>











      <Footer/>
    </div>
  )
}
