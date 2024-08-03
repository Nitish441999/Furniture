
import React from "react";
import Slider from "react-slick";
const data =[
    {
        image:'https://i.imgur.com/MAKlV31.png',
        title:"name"
    }
]

function ClientJPS() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
  return (
    <div>

<div className="slider-container">
      <Slider {...settings} className=" overflow-hidden" >
      <div className="p-5 ">
            <img src="https://i.imgur.com/MAKlV31.png" alt="" className="w-full h-full rounded-full" / >
         
            <h3 className=" text-md font-serif text-center">Client Name</h3>
        </div>
        <div className="p-5 ">
            <img src="https://i.imgur.com/MAKlV31.png" alt="" className="w-full h-full rounded-full" />
          <h3 className=" text-md font-serif text-center">Client Name</h3>
        </div>
        <div className="p-5 ">
            <img src="https://i.imgur.com/MAKlV31.png" alt="" className="w-full h-full rounded-full" />
          <h3 className=" text-md font-serif text-center">Client Name</h3>
        </div>
        <div className="p-5 ">
            <img src="https://i.imgur.com/MAKlV31.png" alt="" className="w-full h-full rounded-full" />
          <h3 className=" text-md font-serif text-center">Client Name</h3>
        </div>
        <div className="p-5 ">
            <img src="https://i.imgur.com/MAKlV31.png" alt="" className="w-full h-full rounded-full" />
          <h3 className=" text-md font-serif text-center">Client Name</h3>
        </div>
        <div className="p-5 ">
            <img src="https://i.imgur.com/MAKlV31.png" alt="" className="w-full h-full rounded-full" />
          <h3 className=" text-md font-serif text-center">Client Name</h3>
        </div>
      </Slider>
    </div>

    </div>
  )
}



{/* // {data.map((item, index)=>{ */}
//     return(
//         <div key={index}>
//             <img className=" w-40 h-40 bg-cover" src={item.image} alt=""/>
//             <h3>{item.title}</h3>
//         </div>

//     )
// })}

export default ClientJPS