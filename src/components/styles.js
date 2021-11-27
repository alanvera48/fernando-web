import css from "styled-jsx/css";

export default css`
  .section {
    height: 780px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-clip: border-box;
  }
  .section-1 {
    background-image: url("https://i.ibb.co/1rP8w1s/Home.jpg");
    z-index: 100;
    position: relative;
  }

  .section-2 {
    background-image: url("https://i.ibb.co/rs1nyv3/section-2.jpg");
    position: relative;
    width: 100%;
    top: -20px;
  }

  h2 {
    margin: 0;
  }

  a {
    color: #ccc;
  }

  section {
    padding: 20px;
  }

  @media screen and(max-width: 780px) {
    .section{
      height: 640px !important;
    }
    .section-1 {
      background-image: url("./Mobile/Home-movil.png");
    }

    .section-2 {
      background-image: url("./Mobile/Hashtag-Movil.jpg");
    }
  }

  @media screen and (max-width: 450px) {
    /* .section {
      height: 100vh !important;
    } */
  }

  @media screen and (max-width: 380px) {
    /* .section {
      height: 100vh !important;
    } */
  }
`;
