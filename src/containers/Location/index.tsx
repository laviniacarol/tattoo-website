import LadyImage from "../../assets/images/Lady-tattoo.png";

import { Container, MainContent, Title, Line, Left, Street } from "./styles";

export default function Location() {
  return (
    <Container>
      <Left src={LadyImage} alt="Lady Tattoo" />

      <MainContent>
        <Title>Localização do estúdio</Title>
        <Line />
        <Street>
            Rod. Mun. Carlos Cardoso, 785 - Lagoão, Araranguá - SC, 88900-000, Brasil
        </Street>
          <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3490.8866502813867!2d-49.491205099999995!3d-28.961086299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95222f07c7207c27%3A0xbab543adc34313c2!2sJeferson%20Souza%20Tattoaria!5e0!3m2!1spt-BR!2sbr!4v1764337237367!5m2!1spt-BR!2sbr"
          width="100%"
          height="350"
          style={{ border: 0, borderRadius: "12px", marginTop: "20px" }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </MainContent>
    </Container>
  );
}
