/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Link } from 'react-router-dom';

import { Wrapper, Form, Button, FormInput, Text, Title } from './styles';

interface LoginProps {
  handleSubmit: any;
  setEmailAddress: any;
  setPass: any;
}
const SignForm: React.FC<LoginProps> = ({
  handleSubmit,
  setEmailAddress,
  setPass,
}) => {
  return (
    <>
      <Wrapper>
        <Form onSubmit={handleSubmit} method="POST">
          <Title>Entrar</Title>
          <FormInput
            type="text"
            placeholder="E-mail"
            onChange={({ target }: any) => setEmailAddress(target.value)}
          />
          <FormInput
            type="password"
            placeholder="Senha"
            autoComplete="off"
            onChange={({ target }: any) => setPass(target.value)}
          />
          <Button type="submit">Entrar</Button>
          <Text>
            Novo usuário?
            <Link to="/signup">
              <strong> Faça o cadastro.</strong>
            </Link>
          </Text>
        </Form>
      </Wrapper>
    </>
  );
};

export default SignForm;
