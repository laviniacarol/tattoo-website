import { Button, HeroContainer, LetterImg, Tattoo } from "./styles";
import letter from "../../assets/images/Letter.png";

function Hero() {
  return (
    <HeroContainer>
      <LetterImg src={letter} alt="Letter" />
      <Tattoo>TATTOO</Tattoo>
      <Button
        as="a"
        href="https://api.whatsapp.com/send/?phone=5548998495280&text&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
      >
        Faça seu orçamento
      </Button>
    </HeroContainer>
  );
}

export default Hero;
