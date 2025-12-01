import { useEffect, useState } from "react";

import {
  Container,
  Logo,
  Slides,
  Arrow,
  TattooImage,
  LadyContainer,
  LadyImage,
} from "./styles";

import LogoImage from "../../assets/logo2.svg";

import Img1 from "../../assets/images/ButterflyTat.png";
import Img2 from "../../assets/images/RabitTat.png";
import Img3 from "../../assets/images/MarshTat.png";
import Img4 from "../../assets/images/ScorpionTat.png";
import Img5 from "../../assets/images/BirdTat.png";

const images = [Img1, Img2, Img3, Img4, Img5];

export default function Portfolio() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  return (
    <Container>
      <Slides>
        <Arrow direction="left" onClick={prev}>◀</Arrow>

        <TattooImage>
          <img src={images[index]} alt="tattoo" />
        </TattooImage>

        <Arrow direction="right" onClick={next}>▶</Arrow>
      </Slides>

      <LadyContainer>
        <LadyImage />
        <Logo src={LogoImage} alt="logo" />
      </LadyContainer>
    </Container>
  );
}
