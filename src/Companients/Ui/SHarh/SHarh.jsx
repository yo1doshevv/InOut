import React, { useState } from "react";
import "./SHarh.scss";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import Rating from "@mui/material/Rating";
import Slider from "react-slick";
import CloseIcon from "@mui/icons-material/Close";

const SHarh = () => {
  const [value, setValue] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ratingValue, setRatingValue] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [reviews, setReviews] = useState([ // Sharhlar ro'yxati uchun dastlabki qiymatlar
    {
      name: "Mira",
      date: "12.10.2024 19:00",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, blanditiis!",
      rating: 4,
    },
    {
      name: "Ali",
      date: "11.10.2024 18:30",
      text: "Excellent service and great support!",
      rating: 5,
    },
  ]);

  // Taboynani ochish va yopish funksiyalari
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Sharh yozish maydonidagi qiymatni o'zgartirish
  const handleReviewChange = (e) => {
    setReviewText(e.target.value);
  };

  // Sharhni yuborish funksiyasi
  const submitReview = () => {
    const newReview = {
      name: "Foydalanuvchi", // Yangi sharh yozgan foydalanuvchi ismi
      date: new Date().toLocaleString(), // Hozirgi vaqtni oladi
      text: reviewText,
      rating: ratingValue,
    };

    setReviews([newReview, ...reviews]); // Yangi sharhni mavjud sharhlar ro'yxatining boshiga qo'shamiz
    setReviewText(""); // Sharh matnini tozalaymiz
    setRatingValue(0); // Baholash qiymatini qayta nollaymiz
    closeModal(); // Modalni yopamiz
  };

  return (
    <div className="sharh">
      <div className="sharh_wrapper">
        <div className="sharh_title">
          <h1>
            <span style={{ color: "#1361fe" }}>Sharhlar </span> Biz haqimizda
          </h1>
          <button onClick={openModal} className="open-modal-button">
            <ChatBubbleOutlineIcon style={{ fontSize: 20, color: "white" }} />
            Sharh Yozish
          </button>
        </div>
        <Slider {...settings} className="sharh_cards">
          {reviews.map((review, index) => (
            <div key={index} className="box">
              <div className="sharh_left">
                <img
                  src="https://admin.inoutads.uz/uploads/images/team/6/preview-64c49ebfa48bb.png"
                  alt={review.name}
                />
                <h2>{review.name}</h2>
                <p>{review.date}</p>
                <p>{review.text}</p>
              </div>
              <div className="sharh_right">
                <Rating
                  name={`review-rating-${index}`}
                  value={review.rating}
                  readOnly
                  sx={{
                    "& .MuiRating-iconFilled": {
                      color: "#FFD700",
                    },
                    "& .MuiRating-iconEmpty": {
                      color: "#ffffff",
                    },
                    "& .MuiRating-iconHover": {
                      color: "#FFEA00",
                    },
                  }}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Taboyna (modal) */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Sharh Yozish</h2>
              <button onClick={closeModal} className="close-modal-button">
                <CloseIcon />
              </button>
            </div>
            <div className="modal-body">
              <Rating
                name="rating-controlled"
                value={ratingValue}
                onChange={(event, newValue) => {
                  setRatingValue(newValue);
                }}
                sx={{
                  "& .MuiRating-iconFilled": {
                    color: "#FFD700",
                  },
                  "& .MuiRating-iconEmpty": {
                    color: "#ddd",
                  },
                }}
              />
              <textarea
                placeholder="Sharhingizni bu yerga yozing..."
                value={reviewText}
                onChange={handleReviewChange}
                className="review-textarea"
              ></textarea>
              <button onClick={submitReview} className="submit-review-button">
                Sharhni Yuborish
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SHarh;
