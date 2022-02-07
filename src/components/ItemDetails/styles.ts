import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  display: flex;
  padding: 40px 40px 0;
  align-items: center;
  justify-content: center;
  flex-flow: row wrap;
  position: relative;
  /* Corta o conteúdo quando ele estourar as bordas do componente */
  overflow-x: hidden;
  overflow-y: hidden;

  h1 {
    z-index: 7;
  }

  > button {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;

    height: 100%;
    z-index: 6;
    background: rgba(20, 20, 20, 0.8);
    border: 0;

    svg {
      width: 100px;
      height: 40px;
      color: ${({ theme }) => theme.colors.primary};
    }

    visibility: hidden;

    &:hover {
      svg {
        width: 150px;
        height: 45px;
      }
    }
  }

  &:hover {
    button {
      visibility: visible;
    }
  }

  ${media.lessThan('medium')`
    padding: 10px 20px 0;

    /* overflow: scroll;
    -webkit-overflow-scrolling: touch; */
    h1 {
      font-size: 28px;
    }
    > button {
      svg {
        width: 25px;
        height: 25px;
        color: ${({ theme }) => theme.colors.primary};
      }

      &:hover {
        svg {
          width: 30px;
          height: 30px;
        }
      }
    }
  `}
`;

export const Movie = styled.div`
  position: relative;
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  align-items: flex-end;

  img {
    position: relative;
    z-index: 5;
    width: 400px;
    transform: scale(0.9);
    transition: all ease 0.6s;
  }

  ${media.lessThan('medium')`
    width: 150px;

    &:hover {
      img {
        border-radius: 0px;
        transform: scale(1);
      }
    }
  `}
`;

export const Row = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: -200px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  width: 60em;
`;

export const ColumnImage = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 30%;
  flex: 1;
  align-items: flex-end;
  width: 30%;
`;

export const Title = styled.h1`
  font-size: 45px;
  margin-top: 60px;
`;

export const Year = styled.h2`
  font-size: 20px;
  padding-bottom: 35px;
`;

export const Text = styled.h3`
  font-size: 20px;
  padding-bottom: 20px;
`;

export const Overview = styled.p`
  font-size: 25px;
  padding-bottom: 30px;
`;

export const Vote = styled.h4`
  font-size: 30px;
  padding-top: 40px;
`;
