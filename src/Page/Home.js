import React from 'react'
import Footer from './Footer';

export default function Home(props) {
  return (
    <div>
      <>
      {/* Home page */}
      <div className='bgimg1'>
        <div className='container' style={{paddingTop:"100px"}}>
          <h5 className='text-center display-6 m-0'><b>we all love</b></h5>
          <center>
          <h1 className='display-1 m-0'><b>nature</b></h1>
          </center>
          <p className='text-center'>Look deep into nature, and you will <br/>understand everything better.</p>
          <center>
            <button className='btn1'>
            Get Started
            </button>
          </center>
        </div>
      </div>

      <div className='container-fluid p-5'>
        <div className='container'>
          <center>
          <h1 className='text-center text-success'>Our Service</h1>
          <button style={{width:"100px",background:"#ffd936",border:"none",height:"3px",borderRadius:"100px"}}></button>
          </center>
        </div>
      </div>

      <div className='container-fluid'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4'>
              <img src='img/service-1.jpg' className='img-fluid'/>
              <div className='container-fluid p-2'>
                <h4 className=''>Web Design</h4>
                <p>Focus on how you can help and benefit your user. Use simple words so that you don't confuse people.</p>
              </div>
            </div>

            <div className='col-md-4'>
              <img src='img/service-2.jpg' className='img-fluid'/>
              <div className='container-fluid p-2'>
                <h4 className=''>Graphic Design</h4>
                <p>Focus on how you can help and benefit your user. Use simple words so that you don't confuse people.</p>
              </div>
            </div>

            <div className='col-md-4'>
              <img src='img/service-3.jpg' className='img-fluid'/>
              <div className='container-fluid p-2'>
                <h4 className=''>Content Creation</h4>
                <p>Focus on how you can help and benefit your user. Use simple words so that you don't confuse people.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container-fluid pt-5 pb-3'>
        <div className='container'>
          <center>
          <img src='img/quotes.svg' className='img-fluid'/>
          </center>
        </div>
      </div>
      
      <div className='container-fluid'>
        <div className='container'>
          <h4 className='text-center pb-4 fs-2' style={{fontFamily:"merriweather",color:"#536942"}}>
          “Original and with an innate understanding of their <br/>customer’s needs, the team at Love Nature are <br/>always a pleasure to work with.”
          </h4>
          <center>
          <img src='img/avatar_on_home.png' className='img-fluid' style={{height:"70px"}}/>
          <p>Jane Miller</p>
          </center>
        </div>
      </div>

      <div className='container-fluid p-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 p-5'>
              <h3 style={{color:"#536942"}}>Tell website visitors who you <br/>are and why they should <br/>choose your business.</h3>
              <p className='pt-5 pb-5'>Because when a visitor first lands on your website, <br/>you’re a stranger to them. They have to get to know <br/>you in order to want to read your blog posts,<br/> subscribe to your email newsletter, or buy what you’re selling.</p>
              <button className='btn2'>
                Find Out More
              </button>

            </div>

            <div className='col-md-4'>
              <img src='img/leaf.jpg' className='img-fluid'/>
            </div>
          </div>
        </div>
      </div>

      <div className='bgimg2'>
        <div className='container p-5'>
          <center>
            <h1 className='display-1 p-5 text-success'><b>QUESTION?</b></h1>
            <p className='text-success'>Whether you’re curious about features, a free trial, or even press,<br/> we’re here to answer any questions.</p>
            <button className='btn1'>
              Let's Talk Now
            </button>
          </center>
        </div>
      </div>
      
      </>


      <Footer />
    </div>
  )
}
