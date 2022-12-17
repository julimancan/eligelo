import styled from "@emotion/styled";
import React, { useState } from "react";
import DropdownArrow from "./Resultados/DropdownArrow";

type PreguntaItemProps = {
    pre: {
        pregunta: string,
        respuesta: string
    },
}

const PreguntaItem = ({pre}:PreguntaItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <StyledItem
      className="item-pregunta"
      onClick={() => setIsOpen(!isOpen)}
      isOpen={isOpen}
    >
      <h2 className="pregunta">{pre.pregunta}</h2>
      <p className="respuesta">{pre.respuesta}</p>
      <DropdownArrow isOpen={isOpen} />
    </StyledItem>
  );
};


interface StyledItemProps {
    isOpen: boolean;
  }

const StyledItem = styled.li<StyledItemProps>`
  position: relative;
  border: 1px solid #dedede;
  border-radius: 8px;
  background-color: white;
  padding: 1.125rem 1.5rem;
  display: grid;
  overflow: hidden;
  height: ${({ isOpen }) => (isOpen ? `auto` : "57px")};
  transition: height 0.15s;

  /* DropdownArrow */
  div {
    top: 1rem;
    right: 2rem;
    background-color: var(--primary-blue);
    &::after {
      transform: translate(0, -5px);
      background-color: var(--primary-blue);
    }
  }
  .pregunta {
    margin-bottom: 1.125rem;
  }
`;

export default PreguntaItem;