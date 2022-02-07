/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import {
  Container,
  Row,
  Column,
  ColumnImage,
  Movie,
  Title,
  Overview,
  Year,
  Text,
  Vote,
} from './styles';

interface ItemDetails {
  item: any;
}
const ItemDetails: React.FC<ItemDetails> = ({ item }) => {
  return (
    <Container>
      <Row>
        <ColumnImage>
          <Movie>
            <img
              src={item.poster_path}
              alt={`Capa do filme/seriado ${item.title || item.name}`}
            />
          </Movie>
        </ColumnImage>
        <Column>
          <Title>{item.title || item.name}</Title>
          <Year>
            {item.first_air_date && item.first_air_date.split('-')[0]}
            {item.release_date && item.release_date.split('-')[0]}
          </Year>
          <Overview>{item.overview}</Overview>
          <Text>
            Genêros:{' '}
            {item.genres &&
              item.genres.map(
                (e: any, index: BigInt) => `${index ? ',' : ''} ${e.name}`,
              )}
          </Text>
          <Vote>Nota: {item.vote_average}</Vote>
        </Column>
      </Row>
    </Container>
  );
};

export default ItemDetails;
