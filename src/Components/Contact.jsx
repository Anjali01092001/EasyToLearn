import React, { useState,useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';


const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const [fullname, setFullname] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [error,setError]=useState('');

  const formSubmit = (e) => {
    e.preventDefault();
    if (fullname.length === 0 || contact.length === 0 || email.length === 0) {
      setError(true);
    }
  }

  return (
    <>
    <span className='skew-bg' ></span>
      <div className="my-5">
        <h1 className="text-center services" style={{ color: "blue" }} ><strong>Contact Us</strong></h1>
      </div>


      <div class="card-group contactcrd">
        <div style={{ padding: '1rem' }}>
          <div class="card" style={{ height: '12rem', width: '15rem' }}>
            <div style={{ marginLeft: '0.5rem' }}> <img src="l.jpg" className="card-img-top" alt="..." style={{ height: '5rem', width: '5rem' }} /></div>
            <div class="card-body" style={{ width: '12rem', height: '3rem' }}>
              <h6 class="card-title">OUR MAIN OFFICE</h6>
              <p class="card-text">94 Broadway St New York, NY 1001</p>
            </div>
          </div>
        </div>
        <div style={{ padding: '1rem' }}>
          <div class="card" style={{ height: '12rem', width: '15rem' }}>
            <div style={{ marginLeft: '0.5rem' }}><img src="p.png" className="card-img-top" alt="..." style={{ height: '5rem', width: '5rem' }} /></div>
            <div class="card-body">
              <h6 class="card-title">PHONE NUMBER</h6>
              <p class="card-text">234-9876-5400</p>
            </div>
          </div>
        </div>
        <div style={{ padding: '1rem' }}>
          <div class="card" style={{ height: '12rem', width: '15rem' }}>
            <div style={{ marginLeft: '0.5rem' }}><img src="f.png" className="card-img-top" alt="..." style={{ height: '5rem', width: '5rem' }} /></div>
            <div class="card-body">
              <h6 class="card-title">FAX</h6>
              <p class="card-text">1-234-567-8900</p>
            </div>
          </div>
        </div>
        <div style={{ padding: '1rem' }}>
          <div class="card" style={{ height: '12rem', width: '15rem' }}>
            <div style={{ marginLeft: '0.5rem' }}><img src="e.png" className="card-img-top" alt="..." style={{ height: '5rem', width: '5rem' }} /></div>
            <div class="card-body">
              <h6 class="card-title">EMAIL</h6>
              <p class="card-text">anjuvishwakarma8885@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-div">
        <form onSubmit={formSubmit} style={{ marginLeft: '400px' }} >
          <div class="mb-3" style={{ marginLeft: '-18rem' }}>
            <label for="exampleFormControlInput1" className="form-label">Full Name</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" name="fullname" onChange={e => setFullname(e.target.value)} placeholder="Enter your name" style={{ width: '500px' }} />
            {error === '' ? null : <h6 style={{color:"red"}} >Please enter your name!</h6>}
          </div>
          <div class="mb-3" style={{ marginLeft: '-18rem' }}>
            <label for="exampleFormControlInput1" className="form-label">Phone Number</label>
            <input type="number" className="form-control" id="exampleFormControlInput1" name="contact" onChange={e => setContact(e.target.value)} placeholder="Contact please" style={{ width: '500px' }} />
            {error === '' ? null : <h6 style={{color:"red"}} >Please enter your Phone number!</h6>}
          </div>
          <div class="mb-3" style={{ marginLeft: '-18rem' }}>
            <label for="exampleFormControlInput1" className="form-label">Email Address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" name="email" onChange={e => setEmail(e.target.value)} placeholder="Write your email @gmail.com" style={{ width: '500px' }} />
            {error === '' ? null : <h6 style={{color:"red"}} >Please enter your mail id!</h6>}
          </div>
          <div class="col-12" style={{ marginLeft: '-18rem' }}>
            <button class="btn btn-primary sevbtn" type="submit" >Submit form</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Contact;