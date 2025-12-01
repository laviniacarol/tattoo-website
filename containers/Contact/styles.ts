import styled from "styled-components";

export const Background = styled.section`
  width: 100%;
  min-height: 100vh;

  background: radial-gradient(
    circle at center,
    #3b0000 0%,
    #250000 40%,
    #120000 70%,
    #000000 100%
  );

  display: flex;
  justify-content: center;
  align-items: center;
  padding: clamp(20px, 4vw, 60px) 0;
`;

export const Frame = styled.div`
  width: 100%;
  text-align: center;
  font-family: "Qasbyne", sans-serif;
  max-width: 1540px;

  border: 1px solid white;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  padding-top: clamp(20px, 5vw, 60px);
  font-size: clamp(1.8rem, 4vw, 3rem);
  color: #fff;
  font-weight: bold;
`;

export const Line = styled.div`
  width: clamp(150px, 25vw, 300px);
  height: 2px;
  background: #fff;
  border-radius: 4px;
  margin: clamp(6px, 2vw, 20px) auto clamp(20px, 5vw, 40px);
`;

export const InnerContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  gap: clamp(20px, 4vw, 80px);

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const LeftBox = styled.div`
  width: 100%;
  max-width: clamp(280px, 70vw, 650px);
  border: 1px solid white;

  padding: clamp(30px, 5vw, 50px);
  margin-left: 25vw;

  margin-bottom: clamp(40px, 10vw, 120px);

  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 900px) {
    margin-left: 3vw;
    max-width: 80%;
  }
`;


export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(10px, 3vw, 25px);
`;

export const InfoText = styled.p`
  font-size: clamp(1.2rem, 3.5vw, 2.2rem);
  color: #fff;
  line-height: 1.4;
`;

export const WppIcon = styled.img`
  width: clamp(50px, 10vw, 90px);
  align-self: center;
  cursor: pointer;
`;

export const RightImage = styled.img`
  width: clamp(180px, 30vw, 380px);
  height: auto;
`;
