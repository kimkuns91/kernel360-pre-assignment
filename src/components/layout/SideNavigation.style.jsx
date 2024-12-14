import styled from "styled-components";

export const SideNavigation = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  width: 252px;
  height: 100%;
  border-right: 1px solid #f5f5f7;
`;
export const CategoryList = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  border-radius: 8px;
  gap: 10px;
  font-size: 14px;
  background: ${({ isActive }) => (isActive ? "#f1f5f9" : "transparent")};
  color: ${({ isActive }) => (isActive ? "#191919" : "#8e92bc")};
  color: #8e92bc;
  cursor: pointer;
  transition: background 0.3s, color 0.3s;
  &:hover {
    background: #f5f5f7;
    color: #191919;
  }
`;

export const CategoryItem = styled.span``;
