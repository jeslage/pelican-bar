import styled, { css } from 'styled-components';

const StyledBox = styled.div`
  width: 100%;
  height: 300px;
  background: lightgreen;
  border-top: ${props => (!props.noTopBorder ? '5px solid #000' : '')};
  border-bottom: 5px solid #000;

  ${props =>
    props.background &&
    css`
      background: ${props.background};
    `}

  ${props =>
    props.size === 's' &&
    css`
      height: 150px;
    `}
`;

export default StyledBox;
