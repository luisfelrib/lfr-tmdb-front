/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';

import NavBar from '../../components/NavBar';
import SectionMovies from '../../components/SectionMovies';

import { Container, Loading } from './styles';
import api from '../../services/api';

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
          // setFeaturedMovieId(75006);
          // Criando efeito de loading
          // setTimeout(() => setLoading(false), 800);
        })
        .catch(errors => {
          console.log(errors);
        });
    }
  }, [apiRoutes, sectionsMovies]);

  return (
    <Container>
      <NavBar />
      {loading ? (
        <Loading>
          <div>
            <span />
            <strong>N</strong>
          </div>
        </Loading>
      ) : (
        <>
          {/* <FeaturedMovie movieId={featuredMovieId} /> */}
          <div style={{ marginTop: 50 }}>
            {sectionsMovies.map(sectionMovie => (
              <SectionMovies {...sectionMovie} key={sectionMovie.id} />
            ))}
          </div>
        </>
      )}
    </Container>
  );
};

export default Home;
