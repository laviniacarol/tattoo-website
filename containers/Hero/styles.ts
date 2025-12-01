import styled from "styled-components";
import imageHero from "../../assets/images/Teste.png";

export const HeroContainer = styled.section`
  background-image: url(${imageHero});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  padding: 0px;
`;

export const LetterImg = styled.img`
  width: clamp(180px, 35vw, 580px);
  height: auto;

  @media (max-width: 768px) {
    margin: 0;
  }
`;

export const Button = styled.button`
  padding: clamp(4px, 2vw, 15px) clamp(5px, 4vw, 40px);
  background-color: transparent;
  border: 2px solid #b9b09f;
  font-size: clamp(24px, 3vw, 34px);
  color: #b9b09f;
  font-family: "Vasquz", sans-serif;
  letter-spacing: 2px;

  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    background-color: rgba(185, 176, 159, 0.1);
    transform: scale(1.05);
  }
`;

export const Tattoo = styled.h1`
  font-size: clamp(26px, 5vw, 50px);
  color: #b9b09f;
  font-weight: 300;
  font-family: "Qasbyne", sans-serif;
  padding-left: clamp(18px, 1vw, 50px);
  letter-spacing: 5px;

  @media (max-width: 768px) {
    letter-spacing: 3px;
  }
`;
