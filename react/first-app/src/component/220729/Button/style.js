import styled, { keyframes } from 'styled-component'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
    
  }
`

export const Button = styled.Button`
  outline: none;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme.common.flexCenter}

  background-color: ${(isClicked) => (isClicked ? 'gray' : 'blue')};
  /* background-color: ${({ theme }) => theme.palette.orange}; */
  border-radius: 10px;
  color: white;
  width: 100px;

  margin: 10px;
  &:hover {
    opacity: 0.5;
  }
  cursor: pointer;

  animation-name: ${fadeIn};
  animation-duration: 1s;
  animation-timing-function: ease-out;
`
