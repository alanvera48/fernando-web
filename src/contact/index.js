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
    <div className="section-contact">
      <div className="formulario">
        <div className="container-logo-contact">
          <img src="./logo_contact.png" alt="" />
        </div>
        <form method="post" onSubmit={handleSubmit}>
          <div className="contenedor-input">
            <i className="far fa-user"></i>
            <input type="text" placeholder="Nombre/Name" name="name" />
          </div>
          <div className="contenedor-input">
            <i className="fas fa-lock"></i>
            <input type="text" placeholder="Mensaje/Message" name="message" />
          </div>
          <div className="contenedor-input">
            <i className="far fa-envelope"></i>
            <input type="email" placeholder="E-mail" name="email" />
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

        .formulario form {
          width: 100%;
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
            height: 60vh;
          }
          .formulario {
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
          .section-contact {
            height: 55vh;
          }
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
            height: 55vh;
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
