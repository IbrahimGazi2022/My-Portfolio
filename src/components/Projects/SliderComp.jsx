import Slider from "react-slick";
import "./projects.css";

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const SliderComp = () => {
  return (
    <div>
      <Slider {...settings}>
        <div className="slider">
          <img src="../../img/project.png" alt="" />
        </div>
        <div className="slider">
          <img src="../../img/project.png" alt="" />
        </div>
        <div className="slider">
          <img src="../../img/project.png" alt="" />
        </div>
        <div className="slider">
          <img src="../../img/project.png" alt="" />
        </div>
        <div className="slider">
          <img src="../../img/project.png" alt="" />
        </div>
        <div className="slider">
          <img src="../../img/project.png" alt="" />
        </div>
        <div className="slider">
          <img src="../../img/project.png" alt="" />
        </div>
        <div className="slider">
          <img src="../../img/project.png" alt="" />
        </div>
        <div className="slider">
          <img src="../../img/project.png" alt="" />
        </div>
        <div className="slider">
          <img src="../../img/project.png" alt="" />
        </div>
        <div className="slider">
          <img src="../../img/project.png" alt="" />
        </div>
        <div className="slider">
          <img src="../../img/project.png" alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
