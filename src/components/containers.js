import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import ModalInd from "../modals";

export default function Containers({ element }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <div className="container-img">
        <div className="center" onClick={handleOpen}></div>
        <div className="bottom">
          <div onClick={handleOpen}></div>
          <div onClick={handleOpen}></div>
          <div onClick={handleOpen}></div>
        </div>
      </div>
      <Modal open={open} onClose={handleClose}>
        <ModalInd element={element} ></ModalInd>
      </Modal>
      <style jsx>
        {`
          .container-img {
            background-image: url("${element.imageRoute}");
            height: 220vh;
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

          .center {
            width: 100%;
            height: 50%;
          }
          .bottom {
            width:100%;
            height: 50%;
            display: flex;
            flex-direction: row;
          }

          .bottom div {
            width: 30%;
          }
          @media screen and (max-width: 780px) {
            .container-img {
              height: "80vh" : "100vh"};
              background-image: url("${element.imageMobile}");
            }
          }
          @media screen and (max-width: 450px) {
            .container-img {
              height: ${element.imageLittle ? "75vh" : "100vh"};
            }
          }
          @media screen and (max-width: 380px) {
            .container-img {
              height: ${element.imageLittle ? "68vh" : "100vh"};
            }
          }
        `}
      </style>
    </>
  );
}
