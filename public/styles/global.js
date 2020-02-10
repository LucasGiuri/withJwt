import styled from 'styled-components';
import { WHITE } from './colors';

export const Body = styled.body`
  width: 100%;
  margin: 0px;
  background: ${WHITE};

  .recharts-wrapper {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 12px;
  }
`;

export const Section = styled.section`
  padding-top: 22px;
  padding-bottom: 22px;
`;