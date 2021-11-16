import React from "react";

export default function Header() {
  return (
    <header>
      <a href="/">
        <h1>FERNANDO</h1>
        <h2>ROMERO - HUSTFUSTER</h2>
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

          header a h1 {
            font-size: 28px;
          }

          header a h2 {
            font-size: 13px;
          }
          @media screen and (max-width: 450px) {
            header {
              padding: 10px;
            }
            header a h1 {
              font-size: 18px;
            }

            header a h2 {
              font-size: 8px;
            }
          }
        `}
      </style>
    </header>
  );
}
