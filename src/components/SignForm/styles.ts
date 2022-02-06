import styled from 'styled-components';

export const Wrapper = styled.div`
  /* border: 1px solid green; */
  display: flex;
  flex-direction: column;
  min-height: 570px;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  width: 100%;
  margin: auto;
  max-width: 450px;
  padding: 60px 68px 40px;
  margin-bottom: 100px;
  margin-top: 100px;

  @media (max-width: 550px) {
    padding: 40px 20px 40px;
    min-height: 500px;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;
`;
export const Button = styled.button`
  background: #e50914;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  margin: 0 0 12px;
  padding: 16px;
  border: 0;
  color: white;
  cursor: pointer;

  &:disabled {
    opacity: 0.3;
  }
`;
export const FormInput = styled.input`
  background: #333;
  border-radius: 4px;
  border: 0;
  color: #fff;
  height: 50px;
  line-height: 50px;
  padding: 5px 20px;
  margin-bottom: 20px;
`;
export const Text = styled.p`
  color: #8c8c8c;
  font-size: 16px;
  font-weight: 500;
`;
export const Title = styled.h1`
  color: #fff;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 28px;
`;
