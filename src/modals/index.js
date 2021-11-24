import React from "react";

export default function ModalInd({ element }) {
  return (
    <div className="box-container">
      <a href={element} target="_blank">
        {element}
      </a>
      <style jsx>{`
        .box-container {
          position: absolute;
          top: 0;
          bottom: 0;
          margin-top: auto;
          margin-bottom: auto;
          margin-left: auto;
          margin-right: auto;
          left: 0;
          right: 0;
          transform: "translate(-50%, -50%)";
          width: auto;
          max-width: 50%;
          height: 25%;
          background-image: url("./jpg.jpeg");
          border-radius: 10px;
          padding: 16px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
            0 6px 6px rgba(0, 0, 0, 0.23);
        }
        .box-container a {
          color: grey;
          text-decoration: none;
          font-size: 16px;
          font-weight: bold;
          padding: 20px 30px;
          background-color: white;
          border-radius: 10px;
        }
        @media screen and(max-width: 780px) {
          .box-container {
            top: 10%;
            width: auto;
            height: 20%;
            max-width: 80%;
          }

          .box-container a {
            color: grey;
            text-decoration: none;
            font-size: 13px;
            font-weight: bold;
            padding: 10px 10px;
            background-color: white;
            border-radius: 10px;
            overflow-x: hidden;
            width: 100%;
            text-align: center
          }
        }

        @media screen and(max-width: 450px) {
          .box-container {
            top: 10%;
            width: auto;
            height: 20%;
            max-width: 80%;
          }
        }
      `}</style>
    </div>
  );
}
