import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 400px;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  .subtitle {
    color: blue;
  }
`;

// export const H1 = styled.h1`
//   color: "red";
//   backgroound-color: "black";
// `;

// export const Image = styled.img`
//   width: 100px;
//   height: 100px;
// `;

// export const Box = styled.div`
//   width: 200px;
//   height: 200px;
//   border: 1px solid red;
//   margin-top: 5px;
// `;

// export const SmallBox = styled(Box)`
//   width: 100px;
//   height: 100px;
// `;

// export const Box = styled.div`
//   width: ${(prop) => (prop.large ? "200px" : "100px")};
//   height: ${(prop) => (prop.large ? "200px" : "100px")};
//   border: 1px solid red;
//   margin-top: 5px;
// `;

const getSize = ({ type }) => {
  switch (type) {
    case "Large":
      return { desktop: "200px", mobile: "150px" };
    case "Medium":
      return { desktop: "150px", mobile: "100px" };
    case "Small":
      return { desktop: "100px", mobile: "50px" };
    default:
      return { desktop: "150px", mobile: "100px" };
  }
};

const center = css`
  display: flex;
  justify-content: center;
`;

export const Box = styled.div`
  ${center};
  width: ${(e) => getSize(e).desktop};
  height: ${(e) => getSize(e).desktop};
  border: 1px solid red;
  margin-top: 5px;

  @media screen and (max-width: 420px) {
    width: ${(e) => getSize(e).mobile};
    height: ${(e) => getSize(e).mobile};
  }
`;
