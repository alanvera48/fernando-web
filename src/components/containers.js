import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import ModalInd from "../modals";

export default function Containers({ element }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <div className="container-img" onClick={handleOpen}></div>
      <Modal open={open} onClose={handleClose}>
        <ModalInd element={element}></ModalInd>
      </Modal>
      <style jsx>
        {`
          .container-img {
            background-image: url("${element.imageRoute}");
            height: 190vh;
            background-position: center center;
            background-repeat: no-repeat;
            background-size: 100% 100%;
            background-clip: border-box;
            cursor: pointer;
            z-index: 100;
            position: relative;
          }
          @media screen and (max-width: 780px) {
            .container-img {
              height: 90vh;
              background-image: url("${element.imageMobile}");
            }
          }
          @media screen and (max-width: 450px) {
            .container-img {
              height: 72vh;
            }
          }
          @media screen and (max-width: 380px) {
            .container-img {
              height: 50vh !important;
            }
          }
        `}
      </style>
    </>
  );
}
