import React from "react";
import Head from "next/head";
import Footer from "../footer";
import Header from "../header";
// import styles from "./effects";
// import Contact from "../contact";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Fernando Romero - Forsthuber</title>
        <meta name="description" content="" />
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossorigin="anonymous"
        />
        <link rel="icon" href="./logo.png" />
      </Head>
      {children}
      <Footer></Footer>
      <style jsx global>
        {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            scroll-behavior: smooth;
            font-family: Arial;
            font-style: normal;
          }

          body{
            background: #202125
          }
        `}
      </style>
    </>
  );
}
