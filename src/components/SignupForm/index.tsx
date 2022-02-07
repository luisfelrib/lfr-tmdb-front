/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { Wrapper, Form, Button, FormInput, Title } from './styles';

interface LoginProps {
  handleSubmit: any;
  setEmailAddress: any;
  setPass: any;
  setName: any;
}
const SignupForm: React.FC<LoginProps> = ({
  handleSubmit,
  setEmailAddress,
  setPass,
  setName,
}) => {
  return (
    <>
      <Wrapper>
        <Form onSubmit={handleSubmit} method="POST">
          <Title>Cadastro</Title>
          <FormInput
            type="text"
            placeholder="Nome completo"
            onChange={({ target }: any) => setName(target.value)}
          />
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
          <Button type="submit">Cadastrar</Button>
        </Form>
      </Wrapper>
    </>
  );
};

export default SignupForm;
