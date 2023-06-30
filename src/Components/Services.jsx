import React,{useEffect} from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
     <span className='skew-bg' ></span>
      <div className="my-5">
        <h1 className="text-center services" style={{color:"blue"}}><strong>Our Services</strong> </h1>
      </div>
      <div className="my-2">
        <h3 className="text-center" style={{color:"grey"}}>Some videos from my channel with lots of Tricks. #LEARN WITH FUN</h3>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row" data-aos="fade-left">           
            <iframe style={{width:"25rem" ,height:"20rem",padding:'1rem'}} src="https://www.youtube.com/embed/vu2wUZw3yLs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe style={{width:"25rem" ,height:"20rem",padding:'1rem'}} src="https://www.youtube.com/embed/py2I0oEHqMM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe style={{width:"25rem" ,height:"20rem",padding:'1rem'}} src="https://www.youtube.com/embed/-YrqyOCzHyM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
            <iframe style={{width:"25rem" ,height:"20rem",padding:'1rem'}} src="https://www.youtube.com/embed/r20uVOASfzA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
            <iframe style={{width:"25rem" ,height:"20rem",padding:'1rem'}} src="https://www.youtube.com/embed/Qnya62LybXU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe style={{width:"25rem" ,height:"20rem",padding:'1rem'}} src="https://www.youtube.com/embed/tyS1QfLfeuc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe style={{width:"25rem" ,height:"20rem",padding:'1rem'}} src="https://www.youtube.com/embed/Zu1h5ruHcxY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe style={{width:"25rem" ,height:"20rem",padding:'1rem'}} src="https://www.youtube.com/embed/Scj_YDMznZE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
            <iframe style={{width:"25rem" ,height:"20rem",padding:'1rem'}} src="https://www.youtube.com/embed/hGj55chcvmU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
            <iframe style={{width:"25rem" ,height:"20rem",padding:'1rem'}} src="https://www.youtube.com/embed/dpgM-TXsVps" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe style={{width:"25rem" ,height:"20rem",padding:'1rem'}} src="https://www.youtube.com/embed/py2I0oEHqMM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><iframe style={{width:"25rem" ,height:"20rem"}} src="https://www.youtube.com/embed/r20uVOASfzA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
            <iframe style={{width:"25rem" ,height:"20rem",padding:'1rem'}} src="https://www.youtube.com/embed/I9TAqZdJTag" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe style={{width:"25rem" ,height:"20rem",padding:'1rem'}} src="https://www.youtube.com/embed/Jt0y4qTGzds" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 
             
             
             
              {/* <Cardcommon cardimg="b3.jpg" />
              <Cardcommon cardimg="b4.jpg" />
              <Cardcommon cardimg="b5.jpg" />
              <Cardcommon cardimg="b6.jpg" />
              <Cardcommon cardimg="b7.jpg" />
              <Cardcommon cardimg="b8.jpg" /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services;