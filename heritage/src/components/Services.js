import React from "react";
import styled from "styled-components";
import service1 from "../assets/fort.png";
import service2 from "../assets/flag.png";
import service3 from "../assets/canvas.png";
import service4 from "../assets/folders.png";
import service5 from "../assets/reading-book.png";
import service6 from "../assets/skyscraper.png";
import service7 from "../assets/cave.png";
import service8 from "../assets/research-paper.png";

import arrow from "../assets/right-arrows.png";

export default function Services() {
  const data = [
    {
      icon: service1,
      title: "Forts Of Bharat",
      subTitle:
        "Pay through our application and save thousands and get amazing rewards.",
    },
    {
      icon: service2,
      title: "UNESCO",
      subTitle:
        "We have all the curated hotels that have all the precaution for a covid safe environment.",
    },
    {
      icon: service3,
      title: "Paintings",
      subTitle:
        " Enjoy the flexible payment through our app and get rewards on every payment.",
    },
    {
      icon: service4,
      title: "Archives",
      subTitle:
        "Find the best hotels and places to visit near you in a single click.",
    },
    {
      icon: service5,
      title: "Stories",
      subTitle:
        "Find the best hotels and places to visit near you in a single click.",
    },
    {
      icon: service6,
      title: "Historic cities of Bharat",
      subTitle:
        "Find the best hotels and places to visit near you in a single click.",
    },
    {
      icon: service7,
      title: "Ajanta Caves",
      subTitle:
        "Find the best hotels and places to visit near you in a single click.",
    },
    {
      icon: service8,
      title: "Research Papers",
      subTitle:
        "Find the best hotels and places to visit near you in a single click.",
    },
  ];
  const titleStyle = {
    marginTop: '5rem',
    display: 'flex',
    justifyContent: 'center',
  };
  const imgStyle = {
    width: '30px',
    padding: '5px'
  };
  return (<>
    <div className="title" style={titleStyle} >
      <h2>Categories</h2>
    </div>
    <Section id="services">
      {data.map((service, index) => {
        return (
          <div className="service" style={{ cursor: 'pointer' }}>
            <div className="icon">
              <img src={service.icon} alt="" />
            </div>
            <h5>{service.title}</h5>
            {/* <p>{service.subTitle}</p> */}
          </div>
        );
      })}
    </Section>
    <h6 style={{ textAlign: 'right', cursor: 'pointer', paddingBottom: '5rem' }}>More Categories<img style={imgStyle} src={arrow} alt="" /></h6>

  </>);
}

const Section = styled.section`
  padding-top: 2rem;
  padding-bottom: 1rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  .service {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    align-items: center;
    background-color: aliceblue;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: 0.3s ease-in-out;
    &:hover {
      transform: translateX(0.4rem) translateY(-1rem);
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    .icon {
      img {
        height: 2.4rem;
        background-color: transparent;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
