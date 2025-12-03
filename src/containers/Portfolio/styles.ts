import styled, { css, keyframes } from "styled-components";
import Lady from "../../assets/images/Lady-tattoo2.svg";

const fade = keyframes`
from { opacity: 0; }
to { opacity: 1; }
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background: linear-gradient(to bottom right, #2b0003, #000000);
  overflow: hidden;

  padding: clamp(1rem, 8vw, 10rem);

  @media (max-width: 900px) {
    padding: clamp(3rem, 5vw, 3rem);
    justify-content: center;
  }
`;

export const Slides = styled.div`
  width: clamp(50%, 55%, 60%);
  height: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
  justify-content: center;

  border: clamp(1px, 0.2vw, 2px) solid #b9b09f;

  position: relative;

  @media (max-width: 900px) {
    width: 100%;
    height: 100%;
  }
`;

export const TattooImage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    animation: ${fade} 0.6s ease;
    image-rendering: auto;
  }
`;

export const Arrow = styled.button<{ direction: "left" | "right" }>`
  position: absolute;

  bottom: clamp(120px, 19vw, 300px);

  background: none;
  border: none;

  font-size: clamp(22px, 4vw, 32px);

  color: #ffffffff;
  cursor: pointer;
  z-index: 3;

  ${(p) =>
    p.direction === "left"
      ? css`
          left: clamp(10px, 2vw, 30px);
        `
      : css`
          right: clamp(10px, 2vw, 30px);
        `}

  &:hover {
    opacity: 0.6;
  }

  /* Ajuste mobile: sobe mais */
  @media (max-width: 900px) {
    bottom: clamp(40px, 12vw, 120px);
  }
`;

export const LadyContainer = styled.div`
  width: clamp(30%, 45%, 60%);
  height: 100%;
  position: relative;

  border: clamp(1px, 0.2vw, 2px) solid #b9b09f;

  display: flex;
  justify-content: center;
  align-items: center;

  /* MOBILE: remove completamente */
  @media (max-width: 900px) {
    display: none;
  }
`;

export const LadyImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${Lady});
  background-size: cover;
  background-position: center;
  filter: brightness(0.9);

  @media (max-width: 900px) {
    display: none;
  }
`;

export const Logo = styled.img`
  position: absolute;
  width: clamp(6rem, 10vw, 15rem);
  z-index: 3;
`;
