import React from "react";
import styled from "styled-components";
import Celular from "../../../public/icons/celular.svg";
import Whatsapp from "../../../public/icons/whatsapp.svg";
import Email from "../../../public/icons/email.svg";

const ContactLabels = ({ horario, celular, email }) => {
  return (
    <StyledContactLabels>
      <section>
        <Whatsapp />
        <div>
          <h4>Whatsapp</h4>
          <p>
            {celular} - Horario: {horario}
          </p>
        </div>
      </section>
      <section>
        <Celular />
        <div>
          <h4>Teléfono</h4>
          <p>
            {celular} - Horario: {horario}
          </p>
        </div>
      </section>
      <section>
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

const StyledContactLabels = styled.section``;

export default ContactLabels;
