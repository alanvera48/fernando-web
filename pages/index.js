import React, { useState } from "react";
import Started from "../src/components/started";
import Contact from "../src/contact";
import Header from "../src/header";
import Modal from "@mui/material/Modal";
import ModalInd from "../src/modals/index";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [link, setLink] = useState("");
  const handleOpen = (event) => {
    console.log(event.target.getAttribute("src"));
    setLink(event.target.getAttribute("src"));
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const link1 = "www.dasfilmbuero.com";
  const link2 = "https://dasfilmbuero.com/about";
  const link3 = "https://dasfilmbuero.com/team";
  const link4 = "https://dasfilmbuero.com/projects- 2/";
  const link5 = "https://vimeo.com/384728266";
  const link6 = "https://vimeo.com/384728671";
  const link7 = "https://vimeo.com/374098001";
  const link8 = "https://www.youtube.com/watch?v=6v0IWkYMX3s";
  const link9 =
    "https://www.austrianfilms.com/Interview/fernando_romero_forsthuber/namrud_EN";
  const link10 =
    "https://www.lavanguardia.com/cine/20190404/461442286373/jowan-safadi-enfant-terrible-rock-palestino-namrud-el-problematico.html";
  const link11 = "https://www.imdb.com/title/tt7262496/";
  const link12 = "https://www.dok-leipzig.de/film/20172096/namrud-troublemaker";
  const link13 = "https://www.filmin.es/pelicula/namrud";
  const link14 = "https://vimeo.com/384727540";
  const link15 = "https://vimeo.com/384727879";
  const link16 = "https://vimeo.com/374097356";
  const link17 = "https://www.youtube.com/watch?v=r8lz-xQFxzs";
  const link18 = "https://vimeo.com/384972163";
  const link19 = "https://vimeo.com/374098636";
  const link20 = "https://vimeo.com/384972488";
  const link21 =
    "https://www.freie-radios.online/sendung/film-als-kunstform-des-politischen-widerstands";
  const link22 =
    "https://www.listennotes.com/podcasts/welt-im-ohr/welt-im-ohr-reisen-durch-NL6XmVODHsp/";
  const link23 =
    "https://oead.at/en/news/article/2019/11/film-as-an-art-form-of-political-resistance";
  const link24 =
    "https://www.vorwaerts.de/artikel/namrud-freche-songs-gegen-betonkoepfe";
  const link25 = "https://www.instagram.com/educacion_ylibertad/";
  const link26 =
    "https://www.oeliug.at/2018/07/24/im-bildungskampf-gegen-den-neoliberalismus-adelante-maestros-ein-dokumentarfilm/";
  const link27 = "http://www.normalismorural.com/";
  const link28 =
    "https://guerrero.quadratin.com.mx/incluyen-a-la-normal-de-ayotzinapa-en-documental-austriaco/";
  const link29 = "https://www.carlotainternacional.com/";
  const link30 = "https://www.carlotainternacional.com/es/proyectos/";
  const link31 = "https://otrasvoceseneducacion.org/archivos/277572";
  const link32 = "https://o94.at/de/player/archive/655835/379142";
  const link33 =
    "https://otrasvoceseneducacion.org/archivos/tag/educacion-rural/page/8?print=pdf-search";
  const link34 =
    "https://242peliculasdespues.com/2019/04/04/namrud-de-fernando-romero-forsthuber/";
  const link35 =
    "https://www.derstandard.at/story/2000079414824/namrud-troublemaker-ein-nachdenklicher-stoerenfried";
  const link36 =
    "https://www.austrianfilms.com/interview/fernando_romero_forsthuber/namrud_DE";
  const link37 = "https://www.film-rezensionen.de/2018/05/namrud-troublemaker/";
  const link38 =
    "https://www.vienna.at/namrud-tro ublemaker-kritik-und-trailer-zum-fi lm/5779801";

  return (
    <div className="body-all">
      <Header></Header>
      <Started></Started>
      <div className="container-img img1">
        <div className="center" onClick={handleOpen} src={link1}></div>
        <div className="bottom-large">
          <div onClick={handleOpen} src={link2}></div>
          <div onClick={handleOpen} src={link3}></div>
          <div onClick={handleOpen} src={link4}></div>
        </div>
      </div>
      <div className="container-img img2">
        <div className="center" onClick={handleOpen} src={link5}></div>
        <div className="bottom-large">
          <div onClick={handleOpen} src={link6}></div>
          <div onClick={handleOpen} src={link7}></div>
          <div onClick={handleOpen} src={link8}></div>
        </div>
      </div>
      <div className="container-img img3">
        <div className="center" onClick={handleOpen} src={link9}></div>
        <div className="bottom bottom-secon">
          <div onClick={handleOpen} src={link10}></div>
          <div onClick={handleOpen} src={link11}></div>
          <div onClick={handleOpen} src={link12}></div>
        </div>
        <div className="bottom-bot" onClick={handleOpen} src={link13}></div>
      </div>
      <div className="container-img img4">
        <div className="center" onClick={handleOpen} src={link14}></div>
        <div className="bottom-large">
          <div onClick={handleOpen} src={link15}></div>
          <div onClick={handleOpen} src={link16}></div>
          <div onClick={handleOpen} src={link17}></div>
        </div>
      </div>
      <div className="container-img img5">
        <div
          className="center center-short"
          onClick={handleOpen}
          src={link18}
        ></div>
        <div className="bottom bottom-short">
          <div onClick={handleOpen} src={link19}></div>
          <div onClick={handleOpen} src={link20}></div>
          <div onClick={handleOpen} src={link21}></div>
        </div>
        <div className="bottom bottom-short">
          <div onClick={handleOpen} src={link22}></div>
          <div onClick={handleOpen} src={link23}></div>
          <div onClick={handleOpen} src={link24}></div>
        </div>
      </div>
      <div className="container-img img6">
        <div className="center" onClick={handleOpen} src={link25}></div>
        <div className="bottom-large">
          <div onClick={handleOpen} src={link26}></div>
          <div onClick={handleOpen} src={link27}></div>
          <div onClick={handleOpen} src={link28}></div>
        </div>
      </div>
      <div className="container-img img7">
        <div className="center" onClick={handleOpen} src={link29}></div>
        <div className="bottom-center" onClick={handleOpen} src={link30}></div>
      </div>
      <div className="container-img img8">
        <div className="center" onClick={handleOpen} src={link31}></div>
        <div className="bottom-large">
          <div onClick={handleOpen} src={link32}></div>
          <div onClick={handleOpen} src={link33}></div>
          <div onClick={handleOpen} src={link34}></div>
        </div>
      </div>
      <div className="container-img img9">
        <div className="center" onClick={handleOpen} src={link35}></div>
        <div className="bottom-large">
          <div onClick={handleOpen} src={link36}></div>
          <div onClick={handleOpen} src={link37}></div>
          <div onClick={handleOpen} src={link38}></div>
        </div>
      </div>
      <Contact></Contact>
      <Modal open={open} onClose={handleClose}>
        <ModalInd element={link}></ModalInd>
      </Modal>
      <style jsx>
        {`
          .body-all {
            display: flex;
            flex-direction: column;
          }
          .container-img {
            height: 1550px;
            background-position: center center;
            background-repeat: no-repeat;
            background-size: 100% 100%;
            background-clip: border-box;
            cursor: pointer;
            z-index: 100;
            position: relative;
            display: flex;
            flex-direction: column;
          }

          .img1 {
            background-image: url("./picture 2.jpg");
          }
          .img2 {
            background-image: url("./picture 3.jpg");
          }
          .img3 {
            background-image: url("./picture 4.jpg");
            height: 2150px;
          }
          .img4 {
            background-image: url("./picture 5.jpg");
          }
          .img5 {
            background-image: url("./picture 6.jpg");
            height: 2180px;
          }
          .img6 {
            background-image: url("./picture 7.jpg");
          }
          .img7 {
            background-image: url("./picture 8.jpg");
          }
          .img8 {
            background-image: url("./picture 9.jpg");
          }
          .img9 {
            background-image: url("./picture 10.jpg");
          }

          .center {
            width: 100%;
            height: 60%;
          }
          .bottom {
            width: 100%;
            height: 20%;
            display: flex;
            flex-direction: row;
          }

          .bottom div {
            width: 33%;
          }

          .bottom-secon {
            width: 100%;
            height: 20%;
          }
          .bottom-bot {
            height: 30%;
            width: 100%;
          }

          .center-short {
            height: 40% !important;
          }
          .bottom-short {
            height: 30%;
          }

          .bottom-center {
            height: 50%;
            width: 100%;
          }

          .bottom-large {
            height: 50%;
            width: 100%;
            display: flex;
            flex-direction: row;
          }

          .bottom-large > div {
            width: 33%;
          }

          @media screen and(max-width: 450px ) and (max-height: 900px) {
            .container-img {
              height: 388px;
            }
            .img1 {
              background-image: url("./Mobile/Das-FilmBuro.jpg");
            }
            .img2 {
              background-image: url("./Mobile/Arabes-Judios.jpg");
            }
            .img3 {
              background-image: url("./Mobile/Namrud.jpg");
              height: 538px !important;
            }
            .img4 {
              background-image: url("./Mobile/Arte-Palestino.jpg");
            }
            .img5 {
              background-image: url("./Mobile/Kurdos.jpg");
              height: 547px !important;
            }
            .img6 {
              background-image: url("./Mobile/Educacion-Y-Libertad.jpg");
            }
            .img7 {
              background-image: url("./Mobile/Carlota-Int.jpg");
            }
            .img8 {
              background-image: url("./Mobile/Ayotzinapa.jpg");
            }
            .img9 {
              background-image: url("./Mobile/Namrud-Prensa.jpg");
            }
          }
          @media screen and(max-width: 768px)and (max-height: 1050px) {
            .container-img {
              height: 600px;
            }
            .img1 {
              background-image: url("./Mobile/Das-FilmBuro.jpg");
            }
            .img2 {
              background-image: url("./Mobile/Arabes-Judios.jpg");
            }
            .img3 {
              background-image: url("./Mobile/Namrud.jpg");
              height: 900px !important;
            }
            .img4 {
              background-image: url("./Mobile/Arte-Palestino.jpg");
            }
            .img5 {
              background-image: url("./Mobile/Kurdos.jpg");
              height: 870px !important;
            }
            .img6 {
              background-image: url("./Mobile/Educacion-Y-Libertad.jpg");
            }
            .img7 {
              background-image: url("./Mobile/Carlota-Int.jpg");
            }
            .img8 {
              background-image: url("./Mobile/Ayotzinapa.jpg");
            }
            .img9 {
              background-image: url("./Mobile/Namrud-Prensa.jpg");
            }
          }
          }
        `}
      </style>
    </div>
  );
}
