import React from 'react'
import './Testimonial.css'
import PortfolioPic1 from '../../image/profile1.jpg'
import PortfolioPic2 from '../../image/profile2.jpg'  
import PortfolioPic3 from '../../image/profile3.jpg' 
import PortfolioPic4 from '../../image/profile4.jpg' 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./TestimonialCarousel.css"; // You can define your CSS styles for the carousel here

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    photo: PortfolioPic1, // Replace with the path to the photo
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula felis ut sapien tincidunt, eu laoreet erat posuere."
  },
  {
    id: 2,
    name: "jane.jpg",
    photo: PortfolioPic2, // Replace with the path to the photo
    text:
      "Sed vestibulum eget lectus ut aliquet. Phasellus et eleifend libero. Nullam sagittis risus id massa vulputate euismod."
  },
  {
    id: 3,
    name: "jane.jpg",
    photo:  PortfolioPic3 , // Replace with the path to the photo
    text:
      "Sed vestibulum eget lectus ut aliquet. Phasellus et eleifend libero. Nullam sagittis risus id massa vulputate euismod."
  },
  {
    id: 4,
    name: "jane.jpg",
    photo:  PortfolioPic4 , // Replace with the path to the photo
    text:
      "Sed vestibulum eget lectus ut aliquet. Phasellus et eleifend libero. Nullam sagittis risus id massa vulputate euismod."
  },
];

const TestimonialCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000, // Adjust the slide speed as needed
    autoplay: true,
    autoplaySpeed: 2000, // Adjust the auto-slide speed as needed (in milliseconds)
    centerMode: true,
    centerPadding: "0",
    slidesToShow: 1,
  };

  return (
    <Slider {...settings} className="testimonials-carousel">
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} >
         <center> <img  src={testimonial.photo} alt='' /> </center>
          <h2>{testimonial.name}</h2>
          <span>{testimonial.text} </span>
      
        </div>
      ))}
    </Slider>
  );
};

function Testimonial() {
  return (
    <div className="testimonial"  id='testimonials'>
       <div className="t-wrapper">
           
            <div className="t-heading">
                <span> Clients always get</span>
                <span> Exeptional Work</span>
                <span> from me...</span>
                    <div className="blur t-blur1" style={{ background:'rgb(230 210 255)'}}> </div>
                    <div className="blur t-blur2" style={{ background:'skyblue'}}> </div>
            </div>   
        </div> 
        <TestimonialCarousel  />   
       
    </div>
  );
}

export default Testimonial;





// import {Pagination} from "swiper";
// import 'swiper/css/pagination';
// import 'swiper/css'

// const Testimonial = () => {
//     const clients=[
//         {
//             img: PortfolioPic1,
//             review:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, eum molestiae reiciendis est ullam debitis repudiandae aspernatur asperiores, suscipit iusto iste tenetur quibusdam eaque officia incidunt, odio esse quam vero."
//         },
//         {
//             img: PortfolioPic2,
//             review:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, eum molestiae reiciendis est ullam debitis repudiandae aspernatur asperiores, suscipit iusto iste tenetur quibusdam eaque officia incidunt, odio esse quam vero."
//         },
//         {
//             img: PortfolioPic3,
//             review:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, eum molestiae reiciendis est ullam debitis repudiandae aspernatur asperiores, suscipit iusto iste tenetur quibusdam eaque officia incidunt, odio esse quam vero."
//         },
//         {
//             img: PortfolioPic4,
//             review:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, eum molestiae reiciendis est ullam debitis repudiandae aspernatur asperiores, suscipit iusto iste tenetur quibusdam eaque officia incidunt, odio esse quam vero."
//         }
//     ]
//   return (
//     <div className=' t-wrapper' id='testimonials'>
//         <div className="t-heading">
//             <span> Clients always get</span>
//             <span> Exeptional Work</span>
//             <span> from me...</span>
//             <div className="blur t-blur1" style={{ background:'rgb(230 210 255)'}}> </div>
//             <div className="blur t-blur1" style={{ background:'skyblue'}}> </div>
//         </div>
//         {/* Slider  */}
//         <Swiper
//         modules={[Pagination]}
//         slidesPerView={1}
//         pagination={{ clickable:true}}       
//         >
//             {
//                 clients.map((client, index)=>{
//                     return(
//                        <SwiperSlide key={index}>
//                            <div className="testimonial">
//                               <img src={client.img} alt="" />
//                               <span>{client.review}</span>
//                            </div>

//                        </SwiperSlide>
//                 )})
//             }
//         </Swiper>
//     </div>
//   )
// }

// export default Testimonial



