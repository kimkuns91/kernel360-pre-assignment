import styled from "styled-components";

export const AvatarWrapper = styled.div`
  width: ${({ size }) => size || "52px"};
  height: ${({ size }) => size || "52px"};
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
  cursor: pointer;
`;

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
