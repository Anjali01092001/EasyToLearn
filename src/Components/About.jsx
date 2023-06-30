import React,{useEffect} from "react";
import { Link } from 'react-router-dom';
import AOS from "aos";
import 'aos/dist/aos.css';


const About = (props) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
    <section id='header' className="home" data-aos="zoom-out">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2">
                                <h1>Welcome to About page </h1><h1><strong style={{ color: "rgba(73, 75, 75, 0.67)", }}>Easy To Learn</strong></h1>
                                <h5 className="my-3">We have developed several innovative solutions.</h5>
                                <div className="mt-3">
                                    <Link to='/contact' className="btn btn-secondary getstarted">Contact Now</Link>
                                </div>
                            </div>
                        </div>
                        <div >
                            <img className="book" style={{height:'450px'}} src='b2.jpg'alt=" " />
                        </div>
                    </div>
                </div>
            </section>
      <span className='skew-bg' ></span>
      <div className="aboutbox" data-aos="fade-left">
        <div className="card mb-3 aboutbox1" style={{ width: '540px', backgroundColor: "blueviolet", color: 'blueviolet' }}>
          <div class="row g-0">
            <div class="col-md-4">
              <img src="a1.jpg" class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title"><strong>Our Equity Commitment</strong> </h5>
                <p class="card-text">We are commited to helping our students increase equity at their core.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3 aboutbox1" style={{ width: '540px', backgroundColor: "rgb(82, 103, 7)", color: 'rgb(82, 103, 7)' }}>
          <div class="row g-0">
            <div class="col-md-4">
              <img src="a3.jpg" alt="..." style={{ height: '8rem' }} />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title"><strong>Our People</strong> </h5>
                <p class="card-text">Our team knows education-we're practitioners first and foremost.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3 aboutbox1" style={{ width: '540px', backgroundColor: 'rgb(148, 106, 7)', color: 'rgb(148, 106, 7)' }}>
          <div class="row g-0">
            <div class="col-md-4">
              <img src="a2.jpg" alt="..." style={{ height: '8rem' }} />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title"><strong>Our Culture</strong> </h5>
                <p class="card-text">We are obesses with quality, fun loving and passionate about succesfor all students.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3 aboutbox1" style={{ width: '540px', backgroundColor: 'rgb(148, 7, 54)', color: 'rgb(148, 7, 54)' }}>
          <div class="row g-0">
            <div class="col-md-4">
              <img src="a4.jpg" alt="..." style={{ height: '8.5rem' }} />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title"><strong>Join the Team</strong> </h5>
                <p class="card-text">we hire and invest in the absolute best talent we can find.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card aboutcard" data-aos="fade-up" >
        <div className="card-body">
          <h1 className="card-title" style={{ color: 'blue' }}><strong>WHO WE ARE</strong> </h1>
          <p className="card-text">We are educators and strategists who help leaders and organizations thrive. We strive for excellence in everything we do.</p>
          <br /><h3 className="card-subtitle mb-2" style={{ color: 'blue' }}> <strong>WE'RE DIFFERENT THAN THE REST</strong></h3>
          <p className="card-text">We work closely with policymakers, practitioners, funders and advocates to design and accelerate policies and plans that support strong systems, outstanding educators, engaged students and effective investments. We direct our time and talent to support clients that can achieve the greatest impact on education systems, teachers and students. As a professional services firm, we are nimble and responsive, while pursuing our broader agenda of more equitable and effective public education for all. We’ve defined our services and focus areas because these direct us to where we can produce the greatest impact. We’re also committed to innovation; we are constantly looking for new and better ways to serve the field. In addition to our client engagements, we also set aside resources for pro-bono work that serves the field, advances our mission and spurs innovation.</p>
          <Link to="/contact" className="btn btn-secondary getstarted" style={{ marginLeft: '30rem' }}>Contact Me</Link>

        </div>
      </div>

    </>
  )
}

export default About;