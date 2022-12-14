import React from "react";
import styled from "@emotion/styled";
import Celular from "../../../public/icons/celular.svg";
import Whatsapp from "../../../public/icons/whatsapp.svg";
import Email from "../../../public/icons/email.svg";

const ContactLabels = ({ horario, celular, email, className="" }) => {
  return (
    <StyledContactLabels version={className}>
      <section className={`contact-method ${className}`}>
        <Whatsapp />
        <div>
          <h4 className="method-title">Whatsapp</h4>
          <section className="text-info">
            <p className="text">{celular}</p>
            <p className="horario">Horario: {horario}</p>
          </section>
        </div>
      </section>
      <section className={`contact-method ${className}`}>
        <Celular />
        <div>
          <h4 className="method-title">Teléfono</h4>
          <section className="text-info">
            <p className="text">{celular}</p>
            <p className="horario">Horario: {horario}</p>
          </section>
        </div>
      </section>
      <section className={`contact-method ${className}`}>
        <Email />
        <div>
          <h4 className="method-title">Correo</h4>
          <section className="text-info">
            <p className="text">{email}</p>
            <p className="horario"> Horario: {horario}</p>
          </section>
        </div>
      </section>
    </StyledContactLabels>
  );
};

const StyledContactLabels = styled.section`
  padding-top: 1.5rem;
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .contact-method {
    display: flex;
    gap: 0.75rem;
    svg {
      margin-top: 0.25rem;
      min-width: min-content;
    }

    .text-info {
      display: flex;
      .text::after {
        content: " - ";
      }
      .horario {
        margin-left: 0.3rem;
      }
    }
  }

  .vende-version{
    .text-info{
      flex-direction: column;
      .text::after {
        content: "";
      }
      .horario {
        margin-left: 0rem;
      }
    }
  }

  @media (min-width: 900px) {
    flex-direction: ${({version})=> version !== 'vende-version' && "row" };
    padding-top: 2.5rem;
    .contact-method {
      padding: 0 1rem;
      border-left: 0.5px solid var(--light-gray);

      .method-title {
        font-size: 16px;
        line-height: 16.94px;
      }

      .text-info {
        flex-direction: column;
        .text::after {
          content: "";
        }
        .horario {
          margin-left: 0;
        }
      }
    }
    .contact-method:first-of-type{
        border: none;
    }

    .vende-version{
      padding: 0 ;
      border: none;
    }
  }
`;

export default ContactLabels;
