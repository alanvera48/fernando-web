import css from "styled-jsx/css";

export default css`
  .letter-effect {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 5;
    transform: scale(0.8) rotate(343deg);
    top: 5%;
    right: 11%;
  }
  .section {
    height: 95vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-clip: border-box;
  }
  .section-1 {
    background-image: url("./Home.png");
    z-index: 100;
    position: relative;
    height: 100vh !important;
  }

  .section-2 {
    position: relative;
    width: 100%;
    top: -60px;
    height: 93vh;
  }
  .section-2::after {
    content: "";
    width: 100%;
    height: 110%;
    top: 0;
    position: absolute;
    right: 0;
    background-color: #0000000a;
    z-index: 2;
  }
  .section-2 img {
    width: 100%;
    height: 107%;
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
    .section-1 {
      height: 60vh !important;
    }
  }

  @media screen and (max-width: 450px) {
    .section-1 {
      height: 40vh !important;
    }
    .section-2 {
      height: 42vh !important;
    }
    .section-2 img {
      width: 100%;
      height: 120%;
    }
  }

  @media screen and (max-width: 380px) {
    .section-2 {
      height: 37vh !important;
    }
  }
`;
