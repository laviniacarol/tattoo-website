import { Container, SocialIcons, Icon, MenuOptions } from "./styles";
import { useState, useRef, useEffect } from "react";
import menu from "../../assets/icons/menu.svg";
import ig from "../../assets/icons/ig.svg";
import location from "../../assets/icons/location.svg";

const Header = () => {
  const [open, setOpen] = useState(false);
const menuRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setOpen(false);
    }
  };

  if (open) document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, [open]);


  return (
    <Container>
      <Icon
        src={menu}
        alt="Menu"
        onClick={() => setOpen(!open)}
        style={{ cursor: "pointer" }}
      />

      {open && (
        <MenuOptions ref={menuRef}>
          <a href="#home">Home</a>
          <hr />
          <a href="#about">A Tatuadora</a>
          <hr />
          <a href="#services">Portfólio</a>
          <hr />
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
          href="https://search.brave.com/search?q=jeferson+souza+tattoaria+ararangua"
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
