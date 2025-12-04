import {
  AboutContainer,
  Name,
  AboutText,
  Portrait,
  Line,
} from "./styles";
import foto from "../../assets/images/vitoria.svg";

function About() {
  return (
    <AboutContainer id="about">
        <div>
          <Name>VITÓRIA LIZ</Name>
          <Line/>
            <AboutText>
              Tatuadora desde 2019, especializada em fine-line e minimalismo.
              <br />
              Nasceu em Gramado, no RS e reside em SC há anos, onde assumiu o
              estúdio de seu marido, Jeferson Souza.
              <br />
              Vitória sempre esteve envolvida artisticamente, seja através da
              literatura, música ou através da tatuagem.
              <br />
              Hoje a arte está presente em seu corpo e em sua história.
            </AboutText>
        </div>
        <Portrait src={foto} alt="Vitória Liz" />
    </AboutContainer>
  );
}
export default About;