import React from "react";

export default function Header() {
  return (
    <header>
      <a href="/">
        <img
          src="./Fernando-RF-Logotipo.png"
          alt="fernando-romero"
          className="logo-header"
        />
      </a>
      <style jsx>
        {`
          header {
            font-family: Arial, Helvetica, sans-serif;
            font-style: normal;
            font-weight: normal;
            align-items: center;
            color: #ffffff;
            position: absolute;
            padding: 40px 100px;
            z-index: 200;
          }

          header a {
            text-decoration: none;
            color: #fff;
          }
          header img {
            width: 200px;
          }
          @media screen and(max-width: 780px) {
            header a img {
              width: 100px;
            }
          }
          @media screen and (max-width: 450px) {
            header {
              padding: 10px;
              width: 100%;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }
            header a img {
              width: 150px;
            }
          }
        `}
      </style>
    </header>
  );
}
