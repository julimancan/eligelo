import React from "react";
import styled from "@emotion/styled";

type DetailsProps = {
  vehicleInfo: any;
};

const Details = ({ vehicleInfo }: DetailsProps) => {
  return (
    <StyledDetails>
      <h3>Detalles</h3>
      <ul className="details-list">
        <li>
          <h4>Año</h4>
          <p>{vehicleInfo?.year}</p>
        </li>
        <li>
          <h4>Marca</h4>
          <p>{vehicleInfo?.brand.name}</p>
        </li>
        <li>
          <h4>Modelo</h4>
          <p>{vehicleInfo?.model.name}</p>
        </li>
        <li>
          <h4>Kilometraje</h4>
          <p>{vehicleInfo?.mileage}</p>
        </li>
        <li>
          <h4>Color</h4>
          <p>{vehicleInfo?.color}</p>
        </li>
        <li>
          <h4>Placa</h4>
          <p>{vehicleInfo?.plate}</p>
        </li>
        <li>
          <h4>Transmisión</h4>
          <p>{vehicleInfo?.transmission}</p>
        </li>
        <li>
          <h4>Tracción</h4>
          <p>{vehicleInfo?.traction}</p>
        </li>
        <li>
          <h4>Dirección</h4>
          <p>{vehicleInfo?.steering}</p>
        </li>
        <li>
          <h4>Tipo de vehiculo</h4>
          <p>{vehicleInfo?.type}</p>
        </li>
        <li>
          <h4>Combustible</h4>
          <p>{vehicleInfo?.fuelType}</p>
        </li>
        <li>
          <h4>Aire acondicionado</h4>
          <p>{!!vehicleInfo?.airConditioner ? "Si" : "No"}</p>
        </li>
        <li>
          <h4>Frenos ABS</h4>
          <p>{!!vehicleInfo?.absBreaks ? "Si" : "No"}</p>
        </li>
        <li>
          <h4>Motor</h4>
          <p>{vehicleInfo?.motor}</p>
        </li>
        <li className="peritaje">
          <h4>Datos de peritaje</h4>
          <div className="datos"></div>
        </li>
      </ul>
    </StyledDetails>
  );
};

const StyledDetails = styled.section`
  /* width: 100%; */
  .details-list {
    display: grid;
    gap: 1rem;
    li {
      display: flex;
      align-items: center;
      border-bottom: 0.5px solid #dedede;
    }
    h4,
    p {
      flex: 1;
    }
    .peritaje {
      flex-direction: column;
      align-items: flex-start;
      border: none;
      gap: 1rem;
      .datos {
        width: 100%;
        min-height: 158px;
        border: 1px solid #dedede;
        border-radius: 8px;
      }
    }
  }
`;

export default Details;
