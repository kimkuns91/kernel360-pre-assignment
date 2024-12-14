import styled from "styled-components";

export const Template = styled.div`
  padding: 0 30px;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 18px;
`;

export const Mentors = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(354px, 1fr));
  // column-gap: 10px;
  row-gap: 32px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;
