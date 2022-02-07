/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import ItemDetails from '../../components/ItemDetails';

import { Container, Loading } from './styles';
import api from '../../services/api';

const Details: React.FC = () => {
  const [item, setItem] = useState(true);
  const [loading, setLoading] = useState(true);
  const { type, id } = useParams<{ id?: string; type?: string }>();

  useEffect(() => {
    // console.log(type, id);
    if (type && id) {
      const apiType = type === 'tv' ? 'tv-show' : type;
      api
        .get(`/${apiType}/${id}`)
        .then((response: any) => {
          setLoading(false);
          setItem(response.data);
        })
        .catch((errors: any) => {
          // console.log(errors);
        });
    }
  }, [type, id]);

  return (
    <Container>
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
          <ItemDetails item={item} />
        </>
      )}
    </Container>
  );
};

export default Details;
