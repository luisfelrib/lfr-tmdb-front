/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import SectionMovies from '../../components/SectionMovies';

import { Container, Loading, Error, Success } from './styles';
import api from '../../services/api';
import * as UserService from '../../services/user';
import * as AuthService from '../../services/auth';

interface MovieProps {
  id: string;
  name?: string;
  title?: string;
  release_date: string;
  poster_path: string;
  type: string;
}

interface SectionsMoviesProps {
  id: number;
  name: string;
  movies: MovieProps[];
}

const Home: React.FC = () => {
  const [sectionsMovies, setSectionsMovies] = useState<SectionsMoviesProps[]>(
    [],
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const history = useHistory();

  const apiRoutes: { name: string; route: string }[] = [
    { name: 'Filmes da semana', route: '/movie' },
    { name: 'Series da semana', route: '/tv-show' },
  ];

  useEffect(() => {
    const urlsAxios = apiRoutes.map(({ route }) => {
      return api.get(route);
    });

    if (sectionsMovies.length === 0) {
      Promise.all([...urlsAxios])
        .then(responses => {
          const responsesApi = responses.map((response, index) => ({
            id: index,
            name: apiRoutes[index].name,
            movies: response.data,
          }));

          setSectionsMovies(responsesApi);
          setLoading(false);
        })
        .catch(errors => {
          console.log(errors);
        });
    }
  }, [apiRoutes, sectionsMovies]);

  const handleAdd = (item: MovieProps): void => {
    const user = AuthService.getCurrentUser();
    if (user) {
      const itemToAdd = {
        tmdbId: item.id,
        title: item.title,
        release_date: item.release_date,
        poster_path: item.poster_path,
        type: item.type,
      };
      UserService.AddToMyList(itemToAdd)
        .then((response: any) => {
          console.log(response);
          setSuccess('Item adicionado a sua lista');
          setTimeout(() => {
            setSuccess('');
          }, 2000);
        })
        .catch((errors: any) => {
          console.log(errors);
          if (errors.response && errors.response.data) {
            const message = errors.response.data.message
              ? errors.response.data.message
              : null;
            if (message === 'SequelizeUniqueConstraintError') {
              setError('Este item já está na sua lista');
              setTimeout(() => {
                setError('');
              }, 2000);
            }
          }
        });
      return;
    }
    setError('Você precisa estar logado para adicionar a sua lista');
    setTimeout(() => {
      setError('');
    }, 2000);
  };

  const handleClick = (item: MovieProps): void => {
    history.push(`/details/${item.type}/${item.id}`);
  };

  return (
    <Container>
      {success && <Success>{success}</Success>}
      <NavBar login={false} />
      {loading ? (
        <Loading>
          <div>
            <span />
            <strong>LFR</strong>
          </div>
        </Loading>
      ) : (
        <>
          {error && <Error>{error}</Error>}
          <div style={{ marginTop: 50 }}>
            {sectionsMovies.map(sectionMovie => (
              <SectionMovies
                {...sectionMovie}
                key={sectionMovie.id}
                handleAdd={handleAdd}
                handleClick={handleClick}
              />
            ))}
          </div>
        </>
      )}
    </Container>
  );
};

export default Home;
