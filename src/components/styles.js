import css from "styled-jsx/css";

export default css`
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
    background-image: url("./section_2.png");
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
    .section-1 {
      height: 100vh !important;
      background-image: url("./Mobile/Home-movil.png");
    }

    .section-2 {
      height: 75vh !important;
      background-image: url("./Mobile/Hashtag-Movil.jpg");
    }
  }

  @media screen and (max-width: 450px) {
    .section {
      height: 75vh !important;
    }
  }

  @media screen and (max-width: 380px) {
  }
`;
