import React, { useCallback, useMemo, useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaPlus } from 'react-icons/fa';

import {
  Container,
  ContentMovies,
  Movie,
  MovieCard,
  MovieCardControll,
  ButtonLetf,
  ButtonRight,
} from './styles';

interface MovieProps {
  id: string;
  name?: string;
  title?: string;
  release_date: string;
  poster_path: string;
  type: string;
}

interface SectionMoviesProps {
  movies: MovieProps[];
  name: string;
  handleAdd: any;
}

const SectionMovies: React.FC<SectionMoviesProps> = ({
  name,
  movies,
  handleAdd,
}) => {
  const [marginContent, setMarginContent] = useState(0);

  const MAX_WIDTH_CONTENT = useMemo(() => movies.length * 220, [movies]);

  const handleScrollMovies = useCallback(
    direction => {
      setMarginContent(stateMargin => {
        const newValue = stateMargin + (direction === 'left' ? -400 : 400);

        const isError =
          MAX_WIDTH_CONTENT + newValue < window.innerWidth || newValue === 400;

        return isError ? stateMargin : newValue;
      });
    },
    [MAX_WIDTH_CONTENT],
  );

  return (
    <Container>
      <h1>{name}</h1>

      <ButtonLetf type="button" onClick={() => handleScrollMovies('right')}>
        <FaChevronLeft />
      </ButtonLetf>

      <ContentMovies
        style={{ marginLeft: marginContent, width: MAX_WIDTH_CONTENT }}
      >
        {movies.map(movie => (
          <Movie key={movie.id}>
            <img
              src={movie.poster_path}
              alt={`Capa do filme/seriado ${movie.title}`}
            />
            <MovieCard>
              <p>{movie.title}</p>
              <p>Ano de Lançamento:</p>
              <strong>{movie.release_date.split('-')[0]}</strong>
              <MovieCardControll
                title="Adicionar a minha lista"
                onClick={() => handleAdd(movie)}
              >
                <span>
                  <FaPlus />
                </span>
              </MovieCardControll>
            </MovieCard>
          </Movie>
        ))}
      </ContentMovies>

      <ButtonRight type="button" onClick={() => handleScrollMovies('left')}>
        <FaChevronRight />
      </ButtonRight>
    </Container>
  );
};

export default SectionMovies;
