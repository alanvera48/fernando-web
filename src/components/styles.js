import css from "styled-jsx/css";

export default css`
  .img-section {
    width: 100%;
  }

  .section {
    height: 780px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-clip: border-box;
  }
  .section-1 {
    background-image: url("./Mobile/Home-movil.png");
    z-index: 100;
    position: relative;
    display: none;
  }

  .section-2 {
    background-image: url("./Mobile/Hashtag-Movil.jpg");
    position: relative;
    width: 100%;
    top: -20px;
    display: none;
  }

  .iconos {
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 550px;
    right: 20px;
    z-index: 900;
  }

  .iconos a {
    color: #ffffff;
    cursor: pointer;
  }

  .iconos a i {
    font-size: 40px;
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

  @media screen and(max-width: 450px ) and (max-height: 900px) {
    .img-section {
      display: none !important;
    }
    .section {
      height: 670px !important;
      display: block;
    }
  }

  @media screen and(max-width: 1024px)and (max-height: 768px) {
    .img-section {
      display: none !important;
    }
    .section {
      height: 640px;
      display: block;
    }
  }

  @media screen and(max-width: 600px)and (max-height: 960px) {
    .img-section {
      display: none !important;
    }
    .section {
      height: 105vh;
      display: block;
    }
  }
  @media screen and (max-width: 450px) {
    /* .section {
      height: 100vh !important;
    } */
    .iconos a i {
      font-size: 30px;
    }
  }

  @media screen and (max-width: 380px) {
    /* .section {
      height: 100vh !important;
    } */
  }
`;
