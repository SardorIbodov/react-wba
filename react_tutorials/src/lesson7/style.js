import styled, { css, keyframes } from "styled-components";

const rotateAnimation = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`;

export const Container = styled.div`
  margin: 20px;
`;

const center = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.div`
  width: 200px;
  height: 40px;
  margin-top: 5px;
  ${center};
  background-color: coral;
  color: white;
  cursor: pointer;
  border-radius: 10px;

  :active {
    transform: scale(0.98);
    opacity: 0.7;
  }
`;

export const ActiveButton = styled(Button)`
  height: 50px;
`;

export const Rotate = styled.div`
  width: 100px;
  height: 100px;
  margin-top: 5px;
  margin-bottom: 5px;
  border: 2px solid coral;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${rotateAnimation} 2s linear infinite;
`;
