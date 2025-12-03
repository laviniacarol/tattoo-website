import styled from "styled-components";
import AboutBg from "../../assets/images/About.svg"; 

export const AboutContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  background: url(${AboutBg}) center/cover no-repeat;
  background: 
    linear-gradient(to top, #0a000050, #00000018),
    url(${AboutBg}) center/cover no-repeat;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(10px, 6vw, 60px);

  color: #f8f4f2ff;

  margin-top: clamp(-70px, -15vw, -50px);

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
    gap: clamp(0px, 10vw, 80px);
  }
`;

export const Name = styled.h1`
  font-family: "Vasquz", sans-serif;

  font-size: clamp(28px, 4vw, 40px);
  margin-bottom: clamp(8px, 1vw, 0px);
  margin-top: clamp(20px, 3vw, 120px);
  padding: clamp(0px, 1vw, 25px);


  text-transform: uppercase;
  color: #f8f4f2ff;
  letter-spacing: clamp(0.5px, 0.4vw, 2px);

  @media (max-width: 900px) {
    margin-top: clamp(220px, 5vw, 40px);
  }

   @media (min-width: 900px) {
   padding-left: 80px;
   margin-top: 80px;

`;

export const Line = styled.hr`
  height: clamp(1px, 0.4vw, 2px);
  background-color: #f8f4f2ff;
  width: clamp(160px, 4vw, 70px);
  margin-left: clamp(90px, 0vw, 20px);
  border: none;
  margin-bottom: clamp(5px, 3vw, 5px);

  @media (min-width: 820px) {
    width: 160px;
    margin-left: 80px;
  }

  @media (max-width: 900px) {
    margin: 0 auto;
`;




export const TextBox = styled.div`
  background: #fff;
  padding: clamp(5px, 3vw, 25px);
  border-radius: 4px;
`;

export const AboutText = styled.p`
  font-family: "Qasbyne", sans-serif;
  font-size: clamp(22px, 3vw, 24px);
  line-height: 1.3;
  padding: clamp(10px, 2vw, 20px);
  font-weight: 400;
  margin: 0;
  width: clamp(240px, 70vw, 500px);
  margin: 0 auto;
  color: #faf5f3ff;

  @media (min-width: 900px) {
   padding-left: 80px;
`

export const Portrait = styled.img`
  width: clamp(240px, 32vw, 420px);
  height: auto;
  padding-top: clamp(0px, 2vw, 60px);

  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 900px) {
    align-self: center; 
    margin-top: clamp(0px, 10vw, 120px);
  }

  @media (min-width: 900px) {
    height: 350px;
  }
`;
