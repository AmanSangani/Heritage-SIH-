import React, { useState } from "react";
import styled from "styled-components";
import avatarImage from "../assets/avatarImage.jpeg";

export default function Testimonials() {
  const testimonialsData = [
    {
      text: " 'India is a cradle of human race, the birthplace of human speech, the mother of history, the grandmother of legend, and the great grandmother of tradition.'",
      author: "--  Mark Twain",
      position: " ",
    },
    {
      text: " 'Indian culture has always recognized the importance of family and community relationships which are critical to the development of a successful society.' ",
      author: "-- Naveen Jain",
      position: " ",
    },
    {
      text: " 'The rich cultural heritage of India is rooted in its ancient history, traditions, and values that have been passed down for generations.' ",
      author: "-- Amitabh Bachchan",
      position: " ",
    },
    // Add more testimonials here
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonialsData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? testimonialsData.length - 1 : prevSlide - 1
    );
  };

  return (
    <Section id="testimonials">
      <div className="title">
        <h2>Quotes</h2>
      </div>
      
      <div className="testimonials">
      <button className="prev" onClick={prevSlide}>
          Previous
        </button>
        {testimonialsData.map((testimonial, index) => (
          <div
            className={`testimonial ${index === currentSlide ? "active" : ""}`}
            key={index}
          >
            <p>{testimonial.text}</p>
            <div className="info">
              {/* <img src={avatarImage} alt="" /> */}
              <div className="details">
                <h4>{testimonial.author}</h4>
                <span>{testimonial.position}</span>
              </div>
            </div>
          </div>
        ))}
        
        <button className="next" onClick={nextSlide}>
          Next
        </button>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 5rem 0;
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }
  .testimonials {
    display: flex;
    justify-content: center;
    margin: 0 2rem;
    gap: 2rem;
    .testimonial {
      background-color: aliceblue;
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: 0.3s ease-in-out;
      display: none;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      .info {
        display: flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        margin-top: 1rem;
        img {
          border-radius: 3rem;
          height: 3rem;
        }
        .details {
          span {
            font-size: 0.9rem;
          }
        }
      }
    }
    .testimonial.active {
      display: block;
    }
  
    .prev,
  .next {
    /* Style your previous and next buttons */
    background-color: #8338ec14;
    font-color: #0000;
    color: black;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    margin: 0 10px;
    cursor: pointer;
    outline: none;
    transition: background-color 0.3s ease;
  }

  .prev:hover,
  .next:hover {
    background-color: #0056b3;
  }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .testimonials {
      flex-direction: column;
      margin: 0;
      .testimonial {
        justify-content: center;
        .info {
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
`;
