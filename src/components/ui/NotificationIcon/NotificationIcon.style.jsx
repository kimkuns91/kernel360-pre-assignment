import styled from "styled-components";

export const NotificationWrapper = styled.div`
  position: relative;
  display: inline-block; /* 배지 위치 조정을 위해 필요한 속성 */
  width: 52px;
  height: 52px;
  border: 1px solid #e0e0e0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`;

export const Badge = styled.span`
  position: absolute;
  top: 12px;
  right: 14px;
  width: 10px;
  height: 10px;
  background-color: red;
  border-radius: 50%;
  border: 2px solid #fff;
`;
