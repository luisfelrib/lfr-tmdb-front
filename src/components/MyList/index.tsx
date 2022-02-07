/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { FaMinus } from 'react-icons/fa';

import {
  Container,
  Movie,
  MovieCard,
  MovieCardControll,
  Image,
} from './styles';

interface ListItem {
  id: string;
  tmdbId: string;
  name?: string;
  title?: string;
  release_date: string;
  poster_path: string;
  type: string;
}

interface List {
  handleRemove: any;
  handleClick: any;
  myList: ListItem[];
}

const MyList: React.FC<List> = ({ myList, handleRemove, handleClick }) => {
  return (
    <Container>
      {myList.map(movie => (
        <Movie key={movie.id}>
          <Image
            onClick={() => handleClick(movie)}
            src={movie.poster_path}
            alt={`Capa do filme/seriado ${movie.title}`}
          />
          <MovieCard>
            <p>{movie.title}</p>
            <p>Ano de Lançamento:</p>
            <strong>{movie.release_date.split('-')[0]}</strong>
            <MovieCardControll
              onClick={() => handleRemove(movie.id)}
              title="Remover da minha lista"
            >
              <span>
                <FaMinus />
              </span>
            </MovieCardControll>
          </MovieCard>
        </Movie>
      ))}
    </Container>
  );
};

export default MyList;
