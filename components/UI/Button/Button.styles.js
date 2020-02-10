import styled from 'styled-components';
import { WHITE, SECONDARY, OLD_GREY } from '../../../public/styles/colors';
import { device } from '../../../public/styles/devices';

export const Btn = styled.button`
  padding: 10px;
  color: ${props => props.isDisabled ? OLD_GREY : SECONDARY};
  cursor: ${props => props.isDisabled ? 'not-allowed' : 'pointer'};
  border-color: ${props => props.isDisabled ? OLD_GREY : SECONDARY};
  background-color: ${WHITE};
  font-size: 14px;
  
  @media ${device.mobile} {
    width: 49%;
  }
  
  @media ${device.tablet} {
    width: auto;
    margin-left: 14px;
  }
`;