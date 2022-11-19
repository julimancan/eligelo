import React from "react";
import styled from "styled-components";
import Celular from "../../../public/icons/celular.svg";
import Whatsapp from "../../../public/icons/whatsapp.svg";
import Email from "../../../public/icons/email.svg";

const ContactLabels = ({ horario, celular, email }) => {
  return (
    <StyledContactLabels>
      <section className="contact-method">
        <Whatsapp />
        <div>
          <h4>Whatsapp</h4>
          <p>
            {celular} - Horario: {horario}
          </p>
        </div>
      </section>
      <section className="contact-method">
        <Celular />
        <div>
          <h4>Teléfono</h4>
          <p>
            {celular} - Horario: {horario}
          </p>
        </div>
      </section>
      <section className="contact-method">
        <Email />
        <div>
          <h4>Correo</h4>
          <p>
            {email} - Horario: {horario}
          </p>
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

    .contact-method{
        display: flex;
        gap: 0.75rem;
        svg{
            margin-top: .25rem;
        }
    }
`;

export default ContactLabels;
