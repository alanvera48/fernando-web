import React from "react";
import Embled from "./embled";


export default function ModalInd({ element }) {
  // let media1 = "/slide1.jpg",
  //   media2 = "/SLIDE2.jpg",
  //   media3 = "/SLIDE3.jpg";

  const media = element.carousel;
  const mediaByIndex = (index) => media[index % media.length];
  const SLIDE_COUNT = 3;
  return (
    <div className="box-container">
      <div className="container-info">
        <img src="./logo.png" className="logo-modal" />
        <div className="info">
          <h3> {element.proyectName}</h3>
          <a href={element.link} target="_blank">
            {element.linkText}
          </a>
          <p>{element.desc}</p>
        </div>
      </div>
      <div className="img-container">
        <Embled
          media={media}
          mediaByIndex={mediaByIndex}
          slideCount={SLIDE_COUNT}
        ></Embled>
        {/* <img src={element.imageModal} className="img-modal" /> */}
      </div>
      <style jsx>{`
        .box-container {
          position: absolute;
          top: 20%;
          margin-left: auto;
          margin-right: auto;
          left: 0;
          right: 0;
          transform: "translate(-50%, -50%)";
          width: 30%;
          height: 70%;
          background-color: white;
          border-radius: 10px;
          padding: 16px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
            0 6px 6px rgba(0, 0, 0, 0.23);
        }
        .logo-modal {
          width: 150px;
        }
        .img-container {
          width: 100%;
          height: 100%;
          overflow-y: hidden;
        }
        .img-modal {
          width: 100%;
          height: 100%;
        }
        .container-info {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        }

        .info {
          height: 70%;
          width: 54%;
          margin-right: auto;
          font-family: Arial;
        }
        .info h3 {
          color: #b1b1b1;
          font-size: 15px;
          margin-bottom: 10px;
          font-family: Arial;
        }

        .info a {
          color: red;
          text-decoration: none;
          font-size: 12px;
        }
        .info p {
          margin-top: 10px;
          font-size: 14px;
          color: #b1b1b1;
        }
        @media screen and(max-width: 780px) {
          .box-container {
            top: 15%;
            width: 90%;
            height: 70%;
          }
        }

        @media screen and(max-width: 450px) {
          .box-container {
            top: 15%;
            width: 90%;
            height: 70%;
          }

          .img-modal {
            width: 100%;
            height: 100%;
          }
          .logo-modal {
            width: 120px;
            height: 140px;
          }

          .info {
            height: 100%;
          }
        }
      `}</style>
    </div>
  );
}
