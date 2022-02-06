/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// import SignFormError from '../../components/SignForm/SignFormError';
import SignForm from '../../components/SignForm';
import { Container, Error } from './styles';
import * as AuthService from '../../services/auth';
/* ---> Component <---*/
const SigninPage = () => {
  const [emailAddress, setEmailAddress] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (emailAddress && pass) {
      AuthService.login(emailAddress, pass)
        .then(() => {
          history.push('/');
        })
        .catch((error: any) => {
          setError('Erro ao realizar login');
          console.log(error);
        });
    }
  };

  return (
    <>
      <Container>
        {error && <Error>{error}</Error>}
        <SignForm
          handleSubmit={handleSubmit}
          setPass={setPass}
          setEmailAddress={setEmailAddress}
        />
      </Container>
    </>
  );
};

export default SigninPage;
