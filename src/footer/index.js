import React from "react";

export default function Footer() {
    /* eslint-disable */
  return (
    <footer>
      <div className="tittle-footer">
        <img src="./Mobile/Fernando-RF-Logotipo.png" className="logo-footer"/>
      </div>
      <div className="copyright">
        <div className="redes-sociales">
          <a
            href="https://www.linkedin.com/in/fernando-romero-forsthuber/"
            target="_blank"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#">
            <i className="fas fa-envelope-square"></i>
          </a>
        </div>
        <span>
          <b>Copyright 2021</b>&copy; Fernando Romero Forsthuber. All rights
          reserved.
        </span>
      </div>
      <style jsx>
        {`
          footer {
            background: url("./Recurso\ 1.png");
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            width: 100%;
            height: 200px;
            display: flex;
            flex-direction: row;
            align-items: center;
            font-family: Arial, Helvetica, sans-serif;
            padding: 30px 100px;
            filter: sepia(60%);
          }
          .logo-footer{
            width: 200px
          }
          .tittle-footer {
            color: #ffffff;
            font-weight: bold;
            width: 150px;
          }
          .copyright span {
            margin-top: 10px;
            font-size: 12px;
          }

          .tittle-footer h4 {
            font-size: 25px;
          }

          .tittle-footer h5 {
            font-size: 11px;
          }

          .copyright {
            color: aliceblue;
            margin-left: auto;
          }

          .redes-sociales {
            margin-left: auto;
            width: fit-content;
            margin-right: 5px;
          }

          .redes-sociales a {
            color: #fff;
            margin-right: 10px;
          }

          .redes-sociales a i {
            font-size: 30px;
          }

          @media screen and (max-width: 780px) {
            footer {
              padding: 30px 60px;
            }
          }

          @media screen and (max-width: 450px) {
            footer {
              display: none;
              flex-direction: column;
              align-items: center;

              padding: 30px 30px;
            }

            .tittle-footer {
              text-align: center !important;
            }

            .circle {
              width: 80px;
              height: 80px;
              margin: 0 auto;
            }

            .circle h4 {
              font-size: 6px;
            }

            .copyright {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              margin-top: 23px;
              margin-left: 0;
            }

            .redes-sociales {
              margin: 0;
            }

            .copyright span {
              text-align: center;
            }
          }
        `}
      </style>
    </footer>
  );
}
