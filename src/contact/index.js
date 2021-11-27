import React, { useState } from "react";
import Link from "next/link";
import { CircularProgress, Snackbar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import emailjs from "emailjs-com";

const initialForm = {
  name: "",
  message: "",
  email: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [open, setOpen] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [openErrorEmpty, setOpenErrorEmpty] = useState(false);
  const [send, setSend] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseError = () => {
    setOpenError(false);
  };

  const handleCloseEmpty = () => {
    setOpenErrorEmpty(false);
  };

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  const actionError = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleCloseError}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  const actionErrorEmpty = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleCloseEmpty}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    for (let input in form) {
      if (form[input] == "") {
        setOpenErrorEmpty(true);
        return;
      }
    }
    if (!openErrorEmpty) {
      setSend(true);
      emailjs
        .sendForm(
          "service_vl3t78k",
          "template_9mxdbgd",
          e.target,
          "user_nhalFSLzn9EwtTldEcumg"
        )
        .then((data) => {
          setForm(initialForm);
          setOpen(true);
          setSend(false);
        })
        .catch((error) => {
          setOpenError(true);
          setSend(false);
        });
    }
  };

  return (
    <div className="section-contact">
      <Link href="/contact">
        <a className="contact-button">Contact me!</a>
      </Link>
      <form className="formulario" onSubmit={handleSubmit}>
        <div className="container-logo-contact">
          <img src="./logo_contact.png" alt="" />
        </div>
        <div>
          <div className="contenedor-input">
            <i className="far fa-user"></i>
            <input
              type="text"
              placeholder="Nombre/Name"
              name="name"
              onChange={handleChange}
              value={form.name}
            />
          </div>
          <div className="contenedor-input">
            <i className="fas fa-lock"></i>
            <input
              value={form.message}
              type="text"
              placeholder="Mensaje/Message"
              name="message"
              onChange={handleChange}
            />
          </div>
          <div className="contenedor-input">
            <i className="far fa-envelope"></i>
            <input
              type="email"
              placeholder="E-mail"
              name="email"
              onChange={handleChange}
              value={form.email}
            />
          </div>
          <div className="container-button">
            <button className="btn btn-submit" type="submit">
              {send ? (
                <CircularProgress className="circular" />
              ) : (
                <i className="fas fa-check"></i>
              )}
            </button>
            <button
              className="btn btn-delete"
              onClick={() => {
                setForm(initialForm);
              }}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
      </form>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        // onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Message was send succesfuly"
        action={action}
      />
      <Snackbar
        open={openError}
        autoHideDuration={6000}
        onClose={handleCloseError}
        message="Message Error"
        action={actionError}
      />
      <Snackbar
        open={openErrorEmpty}
        autoHideDuration={6000}
        onClose={handleCloseEmpty}
        message="You must complet all fields"
        action={actionErrorEmpty}
      />

      <style jsx>{`
        .contact-button {
          display: none;
          background-color: #00bf71;
          width: 150px;
          height: auto;
          padding: 10px;
          color: white;
          text-decoration: none;
          border-radius: 5px;
          position: absolute;
          bottom: 25px;
          left: 0;
          right: 0;
          margin: 0 auto;
          text-align: center;
        }
        .section-contact {
          height: 100vh;
          background-image: url("./picture 11.png");
          background-position: center center;
          background-repeat: no-repeat;
          background-size: 100% 100%;
          background-clip: border-box;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: flex-end;
          position: relative;
        }
        .formulario {
          background: #ffffff;
          width: 420px;
          height: auto;
          padding: 20px;
          border-radius: 10px;
          margin-right: 12%;
          margin-bottom: 10px;
          z-index: 100;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
            0 6px 6px rgba(0, 0, 0, 0.23);
        }

        .formulario img {
          width: 300px;
          z-index: 200;
          position: relative;
        }

        .formulario > div {
          width: 100%;
          position: relative;
        }

        .container-logo-contact {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .contenedor-input {
          width: 100%;
          height: 40px;
          background: #e2e2e2;
          border: 1px solid #b1b1b1;
          box-sizing: border-box;
          border-radius: 5px;
          display: flex;
          flex-direction: row;
          align-items: center;
          margin: 20px 0;
        }

        .contenedor-input input {
          width: 100%;
          height: 40px;
          background: transparent;
          font-family: Arial;
          font-style: normal;
          font-weight: bold;
          font-size: 16px;
          line-height: 16px;
          color: black;
          border: none;
          outline: none;
          margin-left: 20px;
        }

        .contenedor-input i {
          background: #f4f4f4;
          border-radius: 5px 0px 0px 5px;
          color: #b1b1b1;
          width: 70px;
          height: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
        }

        .container-button {
          width: auto;
          display: flex;
          flex-direction: row;
        }

        .container-button:nth-child(1) {
          margin-right: 10px;
        }

        .btn {
          width: 30%;
          height: 40px;
          border-radius: 5px;
          border: none;
          cursor: pointer;
        }

        .btn-submit {
          background-color: #00bf71;
          margin-right: 10px;
        }

        .btn-delete {
          background-color: #df4449;
        }
        .btn i {
          color: #fff;
        }

        @media screen and (max-width: 780px) {
          .section-contact {
            height: 640px;
            background-image: url("./Mobile/Contact-Movil.jpg");
          }
          .contact-button {
            display: block;
          }
          .formulario {
            display: none;
            background: #ffffff;
            width: 200px;
            height: auto;
            padding: 10px;
            border-radius: 10px;
            margin-right: 8%;
          }

          .formulario img {
            width: 150px;
            z-index: 200;
            position: relative;
          }
          .contenedor-input {
            width: 100%;
            height: 40px;
            background: #e2e2e2;
            border: 1px solid #b1b1b1;
            box-sizing: border-box;
            border-radius: 5px;
            display: flex;
            flex-direction: row;
            align-items: center;
            margin: 10px 0;
          }

          .contenedor-input input {
            width: 100%;
            height: 22px;
            font-size: 12px;
            line-height: 16px;
            margin-left: 20px;
          }
        }
        @media screen and (max-width: 450px) {
          .formulario img {
            width: 120px;
            z-index: 200;
            position: relative;
          }
          .btn {
            width: 30%;
            height: 30px;
            border-radius: 5px;
            border: none;
            cursor: pointer;
          }
        }
        @media screen and (max-width: 380px) {
          .formulario img {
            width: 120px;
            z-index: 200;
            position: relative;
          }
          .btn {
            width: 30%;
            height: 28px;
            border-radius: 5px;
            border: none;
            cursor: pointer;
          }
          .contenedor-input input {
            width: 100%;
            height: 18px;
            font-size: 12px;
          }
        }
      `}</style>
    </div>
  );
}
