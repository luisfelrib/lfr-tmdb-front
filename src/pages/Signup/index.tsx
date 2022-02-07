/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import SignupForm from '../../components/SignupForm';
import { Container, Error, Success, Loading } from './styles';
import NavBar from '../../components/NavBar';
import api from '../../services/api';
/* ---> Component <---*/
const Signup: React.FC = () => {
  const [emailAddress, setEmailAddress] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (emailAddress && pass && name) {
      api
        .post('/user', {
          name,
          email: emailAddress,
          pass,
        })
        .then(() => {
          setError('');
          setSuccess('Cadastro realizado com Sucesso. Redirecionando...');
          setLoading(true);
          setTimeout(() => {
            history.push('/login');
          }, 1000);
        })
        .catch((error: any) => {
          // setError(error);
          if (error.response && error.response.data) {
            const message = error.response.data.message
              ? error.response.data.message
              : null;
            if (message === 'SequelizeUniqueConstraintError') {
              setError('Tente outro e-mail');
              setTimeout(() => {
                setError('');
              }, 2000);
              return;
            }
            if (typeof message === 'object') {
              setError('Todos os campos devem ser válidos');
              setTimeout(() => {
                setError('');
              }, 2000);
            }
          }
        });
    }
  };

  return (
    <>
      <Container>
        <NavBar login />
        {success && <Success>{success}</Success>}
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
            <SignupForm
              handleSubmit={handleSubmit}
              setPass={setPass}
              setEmailAddress={setEmailAddress}
              setName={setName}
            />
          </>
        )}
      </Container>
    </>
  );
};

export default Signup;
