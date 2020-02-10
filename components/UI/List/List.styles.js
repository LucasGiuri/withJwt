import styled from 'styled-components';
import { SECONDARY } from '../../../public/styles/colors';

export const Grid = styled.div`
  div {
    border-top: none;
  }
`;

export const ButtonContainer = styled.div`
  padding.top: 16px;  
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const FiltersContainer = styled.div`
  padding: 14px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  border-bottom: 1px solid ${SECONDARY};
  font-family: 'Roboto', sans-serif;
  font-size: 22px;
  color: ${SECONDARY};
`;

export const AvgFilter = styled.div`
  display: flex;
  justify-content: space-between;
  flex-basis: 30%;
`;