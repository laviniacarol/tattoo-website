import IconWpp from "../../assets/icons/wpp.svg";
import Statue from "../../assets/images/Statue.svg";

import {
  Background,
  Frame,
  Title,
  Line,
  InnerContent,
  LeftBox,
  InfoBox,
  InfoText,
  WppIcon,
  RightImage,
} from "./styles";

export default function Contact() {
  return (
    <Background>
      <Frame>
        <Title>Faça seu orçamento</Title>
        <Line />

        <InnerContent>
          <LeftBox>
            <InfoBox>
              <InfoText>
                Informe uma média dos cm,
                <br />
                local da tatuagem e arte
                <br />
                para um orçamento com a
                <br />
                tatuadora.
              </InfoText>

              <a
                href="https://api.whatsapp.com/send/?phone=5548998495280&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WppIcon src={IconWpp} alt="Whatsapp" />
              </a>
            </InfoBox>
          </LeftBox>

          <RightImage src={Statue} alt="Estátua" />
        </InnerContent>
      </Frame>
    </Background>
  );
}
