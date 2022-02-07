import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import LogoNetflix from '../../assets/logo.png';

import { Container, RoutesMenu, Profile, Text, Button } from './styles';
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
interface NavbarProps {
  login: boolean;
}
const NavBar: React.FC<NavbarProps> = ({ login }) => {
  const [currentUser, setCurrentUser] = useState<Session | undefined>(
    undefined,
  );
  const history = useHistory();
  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
  }, []);
  const logOut = (): void => {
    AuthService.logout();
    setCurrentUser(undefined);
    history.push('/login');
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
          <li>{(!login && <Link to="/mylist">Minha Lista</Link>) || ''}</li>
        </ul>
      </RoutesMenu>
      {(!login && (
        <Profile>
          <div>
            {(currentUser && (
              <>
                <Text>
                  Olá, <strong>{currentUser.user.name}</strong>
                </Text>
                <Button onClick={() => logOut()}>Sair</Button>
              </>
            )) || (
              <strong>
                <Link to="/login">Entrar</Link>
              </strong>
            )}
          </div>
        </Profile>
      )) ||
        ''}
    </Container>
  );
};

export default NavBar;
