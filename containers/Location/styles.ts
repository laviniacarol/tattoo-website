import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  width: 100%;
  padding: clamp(40px, 8vw, 80px) clamp(20px, 10vw, 150px);
  background: linear-gradient(to bottom right, #2b0003, #000000);
  justify-content: center;
  gap: 0;

  @media (max-width: 900px) {
    flex-direction: column;
    padding: clamp(20px, 6vw, 40px);
  }
`;

export const Left = styled.img`
  border: 1px solid white;
  width: 50%;
  height: auto;
  max-height: 650px;
  object-fit: cover;

  @media (max-width: 900px) {
    width: 100%;
    max-height: 400px;
    margin-bottom: 20px;
  }
`;

export const Street = styled.p`
  font-size: clamp(16px, 2vw, 20px);
  font-family: "Qasbyne", sans-serif;
  color: white;
  margin-bottom: 20px;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  border: 1px solid white;
  padding: clamp(20px, 4vw, 60px) clamp(15px, 3vw, 30px);

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: clamp(28px, 4vw, 45px);
  margin-bottom: clamp(10px, 2vw, 20px);
  font-family: "Vasquz";
  color: white;
`;

export const Line = styled.hr`
  width: clamp(150px, 30vw, 280px);
  border: 1px solid #ffffff;
  margin-bottom: clamp(15px, 3vw, 25px);
`;
