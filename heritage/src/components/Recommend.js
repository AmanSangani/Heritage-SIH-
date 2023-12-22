import React, { useState } from "react";
import styled from "styled-components";
import Destination1 from "../assets/costume.png";
import Destination2 from "../assets/food.png";
import Destination3 from "../assets/music.png";
import Destination4 from "../assets/dance.png";
import Destination5 from "../assets/literature.jpg";
import Destination6 from "../assets/festivals.png";
import SouthDestination1 from "../assets/southCloth.png";
import SouthDestination2 from "../assets/southFood.png"
import SouthDestination3 from "../assets/southMusic.png"
import SouthDestination4 from "../assets/southDance.png"
import SouthDestination5 from "../assets/southLiterature.png"
import SouthDestination6 from "../assets/southFestivals.png"
import EastDestination1 from "../assets/eastCloth.png"
import EastDestination2 from "../assets/eastFood.png" 
import EastDestination3 from "../assets/eastMusic.png" 
import EastDestination4 from "../assets/eastDance.png" 
import EastDestination5 from "../assets/eastLiterature.png" 
import EastDestination6 from "../assets/eastFestval.png" 
import WestDestination1 from "../assets/westCostume.png" 
import WestDestination2 from "../assets/westFood.png" 
import WestDestination3 from "../assets/westMusic.png" 
import WestDestination4 from "../assets/westDance.png" 
import WestDestination5 from "../assets/westLitearture.png" 
import WestDestination6 from "../assets/westFestival.png" 

import info1 from "../assets/info1.png";
import info2 from "../assets/info2.png";
import info3 from "../assets/info3.png";

export default function Recommend() {
  const northData = [
    {
      image: Destination1,
      title: "Traditional Costume",
      subTitle: "The women of North India generally wear Salwar-Kameez or Saree, but it is the traditional outfit of the women of Punjab, Jammu and Kashmir, Himachal Pradesh and northern Haryana. ",
      // cost: "38,800",
      // duration: "Approx 2 night trip",
    },
    {
      image: Destination2,
      title: "Cuisine",
      subTitle: "The staple food of North India is wheat which is consumed in the forms of rotis or chapatis with sabzi or curry. Most of the North Indian people prefer vegetarian diet except the Kashmiri. ",
      cost: "54,200",
      duration: "Approx 2 night trip",
    },
    {
      image: Destination3,
      title: "Music",
      subTitle: "The music of Northern India is called Hindustani classical music or Shastriya Sangeet originated from Vedic ritual chants. This Hindustani classical music came to be known as Carnatic Classical Music around 12th century. ",
      cost: "45,500",
      duration: "Approx 2 night trip",
    },
    {
      image: Destination4,
      title: "Dance",
      subTitle: "Many folk dances from different areas of North India represent its cultural diversity. To begin with the folk dances of Punjab, Bhangra for men and Giddha for women are very famous. ",
      cost: "24,100",
      duration: "Approx 1 night trip",
    },
    {
      image: Destination5,
      title: "Literature",
      subTitle: "One of the great scholars from past Kalidasa was born in North India. Classic Sanskrit plays such as Abhijñānaśākuntalam, Mālavikāgnimitram and Vikramōrvaśīyam",
      cost: "95,400",
      duration: "Approx 2 night 2 day trip",
    },
    {
      image: Destination6,
      title: "Festivals",
      subTitle: "The region celebrates a wide range of festivals with great enthusiasm. Diwali, Holi, Eid, and Baisakhi are some of the major festivals celebrated in North India, each with its own unique customs and rituals.",
      cost: "38,800",
      duration: "Approx 3 night 2 day trip",
    },
  ];
  const southData = [
    {
      image: SouthDestination1,
      title: "Traditional Costume",
      subTitle: "South India boasts a diverse array of traditional clothing, with women typically adorning vibrant and intricately designed saris, such as the renowned Kanchipuram silk saree in Tamil Nadu, and men often donning comfortable dhotis, lungis, or the mundu in Kerala",
      // cost: "38,800",
      // duration: "Approx 2 night trip",
    },
    {
      image: SouthDestination2,
      title: "Cuisine",
      subTitle: "South Indian cuisine is known for its diverse flavors, featuring dishes like dosa, idli, and vada for breakfast, often paired with coconut chutney and spicy sambar. Coconut and aromatic spices are key ingredients, and seafood is popular in coastal regions. The cuisine is renowned for its spicy offerings, including Andhra chicken and Chettinad cuisine, making it a flavorful reflection of South India's culinary heritage.",
      cost: "54,200",
      duration: "Approx 2 night trip",
    },
    {
      image: SouthDestination3,
      title: "Music",
      subTitle: "South Indian music is renowned for its classical traditions, primarily Carnatic music. It emphasizes intricate melodies, vocal performance, and instruments like the mridangam and veena. The region also appreciates Hindustani classical music and features diverse folk and devotional music forms. Overall, South Indian music showcases its rich cultural heritage and rhythmic diversity.",
      cost: "45,500",
      duration: "Approx 2 night trip",
    },
    {
      image: SouthDestination4,
      title: "Dance",
      subTitle: "South Indian dance is a vibrant and intricate art form characterized by its expressive storytelling through movements, intricate footwork, and eye-catching costumes. One of the most famous classical dance styles from South India is Bharatanatyam, known for its graceful postures and intricate hand gestures. ",
      cost: "24,100",
      duration: "Approx 1 night trip",
    },
    {
      image: SouthDestination5,
      title: "Literature",
      subTitle: "South Indian literature is a vast and diverse literary tradition encompassing the rich cultural heritage of the southern states of India, including Tamil Nadu, Kerala, Karnataka, Telangana, and Andhra Pradesh. It is renowned for its classical Tamil literature, with works like the Sangam poetry dating back over two millennia. Tamil literature includes epics, devotional poetry, and philosophical treatises. ",
      cost: "95,400",
      duration: "Approx 2 night 2 day trip",
    },
    {
      image: SouthDestination6,
      title: "Festivals",
      subTitle: "South India is renowned for its vibrant and culturally rich festivals. Pongal, a harvest festival, is celebrated with fervor in Tamil Nadu, while Onam in Kerala is marked by grand feasts and traditional performances. Deepavali (Diwali) illuminates the region with the radiance of lights, and Navratri is celebrated with fervent devotion in states like Karnataka and Andhra Pradesh. ",
      cost: "38,800",
      duration: "Approx 3 night 2 day trip",
    },
  ];
  const eastData = [
    {
      image: EastDestination1,
      title: "Traditional Costume",
      subTitle: "East Indian traditional attire is a colorful and diverse tapestry, with women often donning elegant sarees featuring intricate designs and embroidery, such as the famous Kantha sarees in West Bengal. Men, on the other hand, commonly wear dhotis or pajamas paired with kurta and sherwani for special occasions.",
      // cost: "38,800",
      // duration: "Approx 2 night trip",
    },
    {
      image: EastDestination2,
      title: "Cuisine",
      subTitle: "East Indian cuisine is a tantalizing fusion of flavors characterized by its emphasis on rice, fish, and a profusion of aromatic spices. Bengali cuisine, prevalent in West Bengal and Bangladesh, features dishes like fish curry, biryani, and sweets like rasgulla and sandesh. Odisha's cuisine showcases unique delicacies such as dalma (a lentil and vegetable dish) and a variety of seafood preparations.",
      cost: "54,200",
      duration: "Approx 2 night trip",
    },
    {
      image: EastDestination3,
      title: "Music",
      subTitle: "East India boasts a rich and diverse musical heritage, including classical traditions like Odissi and Bengali classical music, folk styles like Bihu and Jhumar, and mystic Baul music. Tribal communities also contribute to the region's diverse musical tapestry, reflecting its deep spiritual and cultural roots and making it an integral part of East India's identity and storytelling traditions.",
      cost: "45,500",
      duration: "Approx 2 night trip",
    },
    {
      image: EastDestination4,
      title: "Dance",
      subTitle: "East India boasts a rich and diverse cultural heritage when it comes to dance forms, each with its own unique style and significance. One of the most prominent classical dance forms from the region is Odissi, which originated in the state of Odisha. Odissi is known for its graceful movements, intricate footwork, and storytelling through dance.",
      cost: "24,100",
      duration: "Approx 1 night trip",
    },
    {
      image: EastDestination5,
      title: "Literature",
      subTitle: "East India has a long and illustrious literary history, with the ancient texts of the region, such as the Vedas and Upanishads, contributing significantly to Indian philosophy and spirituality. Bengali literature, in particular, has made a profound impact on Indian literature as a whole, with luminaries like Rabindranath Tagore, who penned the national anthem of India, and Bankim Chandra Chattopadhyay, the author of the famous novel 'Anandamath'. ",
      cost: "95,400",
      duration: "Approx 2 night 2 day trip",
    },
    {
      image: EastDestination6,
      title: "Festivals",
      subTitle: "The region celebrates a wide range of festivals with great enthusiasm. Diwali, Holi, Eid, and Baisakhi are some of the major festivals celebrated in North India, each with its own unique customs and rituals.",
      cost: "38,800",
      duration: "Approx 3 night 2 day trip",
    },
  ];
  const westData = [
    {
      image: WestDestination1,
      title: "Traditional Costume",
      subTitle: "The traditional costume of Gujarat reflects the rich heritage and culture of this western Indian state. One of the most iconic elements of Gujarati attire for women is the vibrant and graceful 'chaniya choli.' The chaniya is a flared, ankle-length skirt, often adorned with intricate embroidery and mirror work, while the choli is a fitted blouse with elaborate designs.",
      // cost: "38,800",
      // duration: "Approx 2 night trip",
    },
    {
      image: WestDestination2,
      title: "Cuisine",
      subTitle: "Gujarat's heritage and culture are richly reflected in its cuisine, which is a delightful fusion of flavors and traditions. The state is renowned for its vegetarian dishes, and its cuisine is characterized by the use of diverse spices and a balance of sweet, salty, and spicy flavors. Dhokla, a steamed and fermented rice and chickpea flour cake, and thepla, a spiced flatbread, are popular snacks. ",
      // cost: "54,200",
      // duration: "Approx 2 night trip",
    },
    {
      image: WestDestination3,
      title: "Music",
      subTitle: "Gujarat's rich heritage and culture are deeply intertwined with its vibrant music traditions. One of the most prominent forms of music in Gujarat is folk music, which reflects the diverse communities and regions within the state. The soulful melodies of traditional instruments like the dholak, tabla, and harmonium accompany folk singers who passionately convey stories of love, devotion, and daily life through their songs. ",
      // cost: "45,500",
      // duration: "Approx 2 night trip",
    },
    {
      image: WestDestination4,
      title: "Dance",
      subTitle: "Gujarat's heritage and culture are rich and diverse, and this is prominently reflected in its traditional dance forms. One of the most famous dances from Gujarat is the Garba, a vibrant and energetic folk dance performed during the Navratri festival.",
      // cost: "24,100",
      // duration: "Approx 1 night trip",
    },
    {
      image: WestDestination5,
      title: "Literature",
      subTitle: "Gujarat's heritage and culture are richly intertwined with its literary traditions. The state boasts a vibrant literary history that spans centuries. Gujarati literature, one of India's oldest literary traditions, has produced renowned poets, playwrights, and authors who have contributed significantly to the cultural fabric of the region. ",
      // cost: "95,400",
      // duration: "Approx 2 night 2 day trip",
    },
    {
      image: WestDestination6,
      title: "Festivals",
      subTitle: "One of the most celebrated festivals in this region is Diwali, the festival of lights, which symbolizes the triumph of good over evil and is marked by the lighting of lamps and the exchange of sweets and gifts. In Maharashtra, Ganesh Chaturthi takes center stage as people worship Lord Ganesha with grand processions and cultural performances. ",
      // cost: "38,800",
      // duration: "Approx 3 night 2 day trip",
    },
  ];

  const packages = [
    "NORTH BHARAT",
    "SOUTH BHARAT",
    "EAST BHARAT",
    "WEST BHARAT",  
  ];

  const [active, setActive] = useState(1);
  const dataToRender = [
    northData, 
    southData, 
    eastData,  
    westData, 
  ];

  return (
    <Section id="recommend">
      <div className="title">
        <h2>Various Cultures of BHARAT</h2>
      </div>
      <div className="packages">
        <ul style={{ cursor: 'pointer' }}>
          {packages.map((pkg, index) => {
            return (
              <li
                className={active === index + 1 ? "active" : ""}
                onClick={() => setActive(index + 1)}
              >
                {pkg}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="destinations">
        {dataToRender[active - 1].map((destination) => {
          return (
            <div className="destination">
              <div className="dest">
                <img src={destination.image} alt="" />
              </div>
              <h3>{destination.title}</h3>
              <p>{destination.subTitle}</p>
              <div className="info">
                {/* <div className="services">
                  <img src={info1} alt="" />
                  <img src={info2} alt="" />
                  <img src={info3} alt="" />
                </div> */}
                {/* <h4>{destination.cost}</h4> */}
              </div>
              {/* <div className="distance">
                <span>1000 Kms</span>
                <span>{destination.duration}</span>
              </div> */}
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  padding: 2rem 0;
  .title {
    text-align: center;
  }
  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    ul {
      display: flex;
      list-style-type: none;
      width: max-content;
      li {
        padding: 1rem 2rem;
        border-bottom: 0.1rem solid black;
      }
      .active {
        border-bottom: 0.5rem solid #8338ec;
      }
    }
  }
  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;
    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #8338ec14;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      .dest{
        width: 300px; /* Set your desired width */
        height: 300px; /* Set your desired height */
        overflow: hidden;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius:15px;
      }
      .info {
        display: flex;
        align-items: center;
        .services {
          display: flex;
          gap: 0.3rem;
          img {
            border-radius: 1rem;
            background-color: #4d2ddb84;
            width: 2rem;
            /* padding: 1rem; */
            padding: 0.3rem 0.4rem;
          }
        }
        display: flex;
        justify-content: space-between;
      }
      .distance {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;
