import React from 'react'
import Footer from './Footer';

export default function Service(props) {
  return (
    <div>
      <>
      
      <div className='bgimg3'>
        <div className='container p-5'>
          <center>
            <h1 className='display-1 text-light p-5'><b>OUR SERVICE</b></h1>
          </center>
        </div>
      </div>
      
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-4'>
            <img src='img/service-1.jpg' className='img-fluid'/>
          </div>

          <div className='col-md-8'>
            <div className='container-fluid p-5'>
            <h3 className='text-success'>Web Design</h3>
            <p className='text-success pt-3 pb-3'>Tell your visitor how your service can improve their life. Connect with the problem that they’re trying to solve and address any objections you think they might have.</p>
            <p className='text-success'>What is the biggest benefit your customer will get from this? Keep your target audience in mind.</p>
            <h3 className='text-success pt-4 pb-4'>From $99</h3>
            <button className='btn2'>
              Start a project
            </button>
            </div>
          </div>
        </div>
      </div>

      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-4'>
            <img src='img/service-2.jpg' className='img-fluid'/>
          </div>

          <div className='col-md-8'>
            <div className='container-fluid p-5'>
            <h3 className='text-success'>Graphic Design</h3>
            <p className='text-success pt-3 pb-3'>Tell your visitor how your service can improve their life. Connect with the problem that they’re trying to solve and address any objections you think they might have.</p>
            <p className='text-success'>What is the biggest benefit your customer will get from this? Keep your target audience in mind.</p>
            <h3 className='text-success pt-4 pb-4'>From $99</h3>
            <button className='btn2'>
              Start a project
            </button>
            </div>
          </div>
        </div>
      </div>

      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-4'>
            <img src='img/service-3.jpg' className='img-fluid'/>
          </div>

          <div className='col-md-8'>
            <div className='container-fluid p-5'>
            <h3 className='text-success'>Content Creation</h3>
            <p className='text-success pt-3 pb-3'>Tell your visitor how your service can improve their life. Connect with the problem that they’re trying to solve and address any objections you think they might have.</p>
            <p className='text-success'>What is the biggest benefit your customer will get from this? Keep your target audience in mind.</p>
            <h3 className='text-success pt-4 pb-4'>From $99</h3>
            <button className='btn2'>
              Start a project
            </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className='container mt-5 mb-5'>
        <div className='row'>
          <div className='col-md-8'>
            <div className='container-fluid p-5'>
              <h3 className='text-success'>Why Love Nature</h3>
              <p className='pt-4 text-success'>Your customers just learned what services you offer. Tell them why they should work with you or your team, for example you could highlight your experience and positive client reviews.</p>
              <p className='pt-4 text-success'>The badges illustrate this.  We also focus on key benefits they will get while using our services, namely quick turnaround times and dedicated support. You could also use them to show awards you won for your best work.</p>
            </div>
          </div>

          <div className='col-md-4'>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-md-6'>
                <center>
                <i class="fa fa-trophy fa-2x p-5" aria-hidden="true"></i>
                <p>8 Years Experience</p>
                </center>
                </div>
                <div className='col-md-6'>
                  <center>
                  <i class="fa fa-star fa-2x p-5" aria-hidden="true"></i>
                  <p>5 Star Rating</p>
                  </center>
                </div>
              </div>
            </div>

            <div className='container-fluid mt-2'>
              <div className='row'>
                <div className='col-md-6'>
                <center>
                <i class="fa fa-refresh fa-2x p-5" aria-hidden="true"></i>
                <p>Quick Turnaround</p>
                </center>
                </div>
                <div className='col-md-6'>
                  <center>
                  <i class="fa fa-times-circle fa-2x p-5" aria-hidden="true"></i>
                  <p>Dedicated Support</p>
                  </center>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
      
      
      </>












      <Footer/>
    </div>
  )
}
