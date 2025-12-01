import { Container, SocialIcons, Icon, MenuOptions } from "./styles";
import { useState } from "react";
import menu from "../../assets/icons/menu.svg";
import ig from "../../assets/icons/ig.svg";
import location from "../../assets/icons/location.svg";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Icon
        src={menu}
        alt="Menu"
        onClick={() => setOpen(!open)}
        style={{ cursor: "pointer" }}
      />

      {open && (
        <MenuOptions>
          <a href="#home">Home</a>
          <hr />
          <a href="#about">A Tatuadora</a>
          <hr />
          <a href="#services">Portfólio</a> <hr />
          <a href="#contact">Localização</a>
        </MenuOptions>
      )}
      <SocialIcons>
        <a
          href="https://www.instagram.com/vitorializ_tattoo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon src={ig} alt="Instagram" />
        </a>

        <a
          href="https://search.brave.com/search?q=jeferson+souza+tattoaria+ararangua&source=desktop&view=full&map_src=i&loc_id=loc4G4RHHQAJ6Y6MA3YQBDH57PSIYA7FOKU2AAAAAAA%3D&bbox=-50.128%2C-29.251%2C-48.855%2C-28.670&summary=1&conversation=fc72de27587da082bfed8d"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon src={location} alt="Location" />
        </a>
      </SocialIcons>
    </Container>
  );
};

export default Header;
