import React, { useEffect, useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';

import LogoNetflix from '../../assets/logo.png';

import { Container, RoutesMenu, Profile } from './styles';

const NavBar: React.FC = () => {
  const [isBlack, setIsBlack] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => setIsBlack(window.scrollY > 10));

    // Executa quando a pagina for desconstruida
    return () => {
      window.removeEventListener('scroll', () =>
        setIsBlack(window.scrollY > 10),
      );
    };
  }, []);

  return (
    <Container isBlack={isBlack} style={{ position: 'absolute', top: 0 }}>
      <RoutesMenu>
        <img src={LogoNetflix} alt="dahdjahdkja" />
        <ul>
          <li style={{ fontWeight: 'bold' }}>Inicio</li>
          <li>Minha Lista</li>
        </ul>
      </RoutesMenu>
      <Profile>
        <button type="button">
          <img
            src="https://occ-0-761-185.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABR8DzEDMx6x6rgkSexM2EYh44oQISc8fyEFr6WnraR9_HyniHFDRbXRrElpLThfL9OYFOueAItK7VIEb2xH7AqA.png?r=c71"
            alt="imagem profile usuario"
          />
          <FaCaretDown />
        </button>
      </Profile>
    </Container>
  );
};

export default NavBar;
