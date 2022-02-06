import React, { useEffect, useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import LogoNetflix from '../../assets/logo.png';

import { Container, RoutesMenu, Profile, Text } from './styles';
import * as AuthService from '../../services/auth';

interface User {
  id: BigInteger;
  name: string;
  email: string;
}
interface Session {
  accessToken: string;
  user: User;
}
const NavBar: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<Session | undefined>(
    undefined,
  );
  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
  }, []);
  const logOut = (): void => {
    AuthService.logout();
    setCurrentUser(undefined);
  };
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
          <li style={{ fontWeight: 'bold' }}>
            <Link to="/">Inicio</Link>
          </li>
          {currentUser && (
            <li>
              <Link to="/mylist">Minha Lista</Link>
            </li>
          )}
        </ul>
      </RoutesMenu>
      <Profile>
        <button type="button">
          {(currentUser && (
            <>
              <Text>
                Olá, <strong>{currentUser.user.name}</strong>
              </Text>
              <FaCaretDown />{' '}
            </>
          )) || (
            <strong>
              <Link to="/login">Entrar</Link>
            </strong>
          )}
        </button>
      </Profile>
    </Container>
  );
};

export default NavBar;
