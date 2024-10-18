import React from "react";
import Slider from "react-slick";
import "./VideoSlide.scss";

const VideoSlide = () => {
  const settings2 = {
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="video">
      <div className="video_wrapper">
        <div className="video_title">
          <h1>video</h1>
          <a href="">barcha videolar</a>
        </div>
        <div className="video_vid">
          <Slider {...settings2}>
            <div className="video_vid1">
            <img
              src="https://kirdchiqdi.netlify.app/assets/hog-Zfj9bul5.jpeg"
              alt=""
            />
            </div>
            <div className="video_vid2">
            <img
              src="https://admin.inoutads.uz/uploads/images/video/1/preview-64d70ef7e76b7.jpg"
              alt=""
            />
            </div>
            <div className="video_vid1">
            <img
              src="https://kirdchiqdi.netlify.app/assets/hog-Zfj9bul5.jpeg"
              alt=""
            />
            </div>
           <div className="video_vid2">
           <img
              src="https://admin.inoutads.uz/uploads/images/video/1/preview-64d70ef7e76b7.jpg"
              alt=""
            />
           </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default VideoSlide;
