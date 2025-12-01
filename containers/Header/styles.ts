import styled from "styled-components";

export const Container = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px 40px;
  background: transparent;
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
`;

export const Icon = styled.img`
  height: 35px;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.7;
  }
`;

export const MenuOptions = styled.div`
  position: fixed;
  top: clamp(45px, 10vw, 55px);
  left: clamp(15px, 6vw, 45px);
  z-index: 9999;

  padding:
    clamp(10px, 1.8vw, 15px)
    clamp(15px, 3vw, 25px);

  border-radius: 2px;

  display: flex;
  flex-direction: column;
  gap: clamp(6px, 1.2vw, 12px);

  font-size: clamp(22px, 3vw, 26px);
  font-family: Qasbyne, sans-serif;

  background: linear-gradient(
    to bottom,
    rgba(167, 165, 147, 0.99) 86%,
    rgba(7, 0, 0, 0.14) 108%
  );
  backdrop-filter: blur(4px);

  a {
    color: #351e18ff;
    text-decoration: none;
    font-weight: 500;
    padding: 0;

    &:hover {
      color: #f7f6f6ff;
    }
  }

  hr {
    width: 100%;
    border: none;
    border-top: 0.5px solid #351e18;
    opacity: 0.6;
  }
`;
