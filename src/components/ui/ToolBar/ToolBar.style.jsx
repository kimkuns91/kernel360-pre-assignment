import styled from "styled-components";

export const ToolBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 30px;
  background: #fff;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 480px;
  border-radius: 10px;
  border: 1px solid #f5f5f7;
  background: #fff;
  padding: 16px 28px;
  gap: 10px;
`;
export const Input = styled.input`
  flex: 1;
  font-size: 12px;
  font-weight: 400;
  border: none;
  outline: none;
`;

export const Lens = styled.div`
  cursor: pointer;
  width: 20px;
  height: 25px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;

export const Button = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 16px 20px;
  border-radius: 10px;
  border: 1px solid #f5f5f7;
  font-size: 12px;
  font-weight: 700;
`;
