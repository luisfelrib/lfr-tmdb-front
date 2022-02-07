/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
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
  const history = useHistory();

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (!user) {
      history.push('/login');
      return;
    }
    UserService.getMyList()
      .then((response: any) => {
        // console.log(response);
        setMylist(response.data);
        setLoading(false);
      })
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .catch((errors: any) => {
        // console.log(errors);
      });
  }, [history]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleRemove = (id: BigInt): void => {
    // console.log(id);
  };

  const handleClick = (item: ListItem): void => {
    history.push(`/details/${item.type}/${item.tmdbId}`);
  };

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
          <div style={{ marginTop: 50 }}>
            <MyList
              myList={myList}
              handleRemove={handleRemove}
              handleClick={handleClick}
            />
          </div>
        </>
      )}
    </Container>
  );
};

export default Home;
