import React, { useState } from "react";

const initialForm = {
  name: "",
  message: "",
  email: "",
};
export default function Contact() {
  const [form, setForm] = useState(initialForm);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {};
    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });
    fetch("/api/mail", {
      method: "post",
      body: JSON.stringify(formData),
    });
  };
  return (
    <div className="contact-screen">
      <div className="formulario">
        <form method="post" onSubmit={handleSubmit}>
          <div className="contenedor-input">
            <i className="far fa-user"></i>
            <input type="text" placeholder="Nombre/Name" name="name" />
          </div>
          <div className="contenedor-input">
            <i className="far fa-envelope"></i>
            <input type="email" placeholder="E-mail" name="email" />
          </div>
          <div className="contenedor-input textarea">
            <i className="fas fa-lock"></i>
            <textarea
              type="text"
              placeholder="Mensaje/Message"
              name="message"
            ></textarea>
          </div>
          <div className="container-button">
            <button className="btn btn-submit">
              <i className="fas fa-check"></i>
            </button>
            <button className="btn btn-delete">
              <i className="fas fa-times"></i>
            </button>
          </div>
        </form>
      </div>
      <style jsx>{`
        .contact-screen {
          height: 100vh;
          background-image: url("./Mobile/Ventana-Contacto.jpg");
          background-position: center center;
          background-repeat: no-repeat;
          background-size: 100% 100%;
          background-clip: border-box;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .formulario {
          position: absolute;
          bottom: 50px;
          background: #ffffff;
          width: 420px;
          padding: 20px;
          border-radius: 10px;
          z-index: 100;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
            0 6px 6px rgba(0, 0, 0, 0.23);
        }
        .formulario form {
          width: 100%;
          height: 100%;
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
        .textarea {
          height: 200px !important;
        }
        .textarea textarea {
          width: 100%;
          height: 200px;
          background: transparent;
          font-family: Arial;
          font-style: normal;
          font-weight: bold;
          font-size: 12px;
          line-height: 16px;
          color: black;
          border: none;
          outline: none;
          padding: 10px 20px;
          box-sizing: border-box;
          resize: vertical;
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
          .contact-button {
            display: block;
          }
          .formulario {
            background: #ffffff;
            width: 90%;
            padding: 10px;
            border-radius: 10px;
            margin-top: 40px;
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
          .container-img {
            height: 55vh;
          }
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
          .section-contact {
            height: 70vh;
          }
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
