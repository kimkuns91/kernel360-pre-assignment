import styled from "styled-components";

export const CardWrapper = styled.div`
  width: ${({ variant }) => (variant === "recent" ? "328px" : "354px")};
  background: white;
  border-radius: 8px;
  padding: 20px;
  margin-left: ${({ variant }) => (variant === "recent" ? "30px" : "0")};
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border: 1px solid #777;
  object-fit: cover;
  border-radius: 50%;
`;
export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const Name = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #141522;
`;
export const Role = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #54577a;
`;

export const FollowButton = styled.div`
  cursor: pointer;
  color: #546fff;
  font-size: 14px;
  font-weight: 500;
`;

export const FollowedButton = styled.div`
  cursor: pointer;
  color: #54577a;
  font-size: 14px;
  font-weight: 500;
`;

export const Content = styled.div`
  color: #8e92bc;
  margin: 24px 0;
  font-size: 14px;
  font-weight: 500;
`;

export const Info = styled.div`
  display: flex;
  font-size: 14px;
  font-weight: 500;
`;

export const Task = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 5px;
`;
export const Reviews = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 5px;
`;
