/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import MyList from '../../components/MyList';
import * as AuthService from '../../services/auth';
import * as UserService from '../../services/user';
import { Container, Loading } from './styles';

interface ListItem {
  id: string;
  tmdbId: string;
  name?: string;
  title?: string;
  release_date: string;
  poster_path: string;
  type: string;
}

const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [myList, setMylist] = useState<Array<ListItem>>([]);
  const [currentUser, setCurrentUser] = useState<any>({});

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (!user) {
      return;
    }
    setCurrentUser(user);
    UserService.getMyList()
      .then((response: any) => {
        console.log(response);
        setMylist(response.data);
        setLoading(false);
      })
      .catch((errors: any) => {
        console.log(errors);
      });
  }, []);

  const handleRemove = (id: BigInt): void => {
    console.log(id);
  };

  return (
    <Container>
      <NavBar login />
      {currentUser ? (
        <Redirect to="/login" />
      ) : (
        <>
          {loading ? (
            <Loading>
              <div>
                <span />
                <strong>LFR</strong>
              </div>
            </Loading>
          ) : (
            <>
              <div style={{ marginTop: 50 }}>
                <MyList myList={myList} handleRemove={handleRemove} />
              </div>
            </>
          )}
        </>
      )}
    </Container>
  );
};

export default Home;
