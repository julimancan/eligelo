import styled from "@emotion/styled"

const Tag = ({ text }) => {
  return (
    <StyledTag>
      {text} <span>X</span>
    </StyledTag>
  );
};


const StyledTag = styled.button`
  max-width: 210px; 
  background: #ffffff;
  padding: 4px 8px;
  border: none;
  box-shadow: 0px 4px 8px rgba(38, 50, 56, 0.1),
    0px 2px 4px rgba(38, 50, 56, 0.11), 0px 0px 2px rgba(38, 50, 56, 0.12);
  border-radius: 4px;
`;

export default Tag