import styled from 'styled-component'

export const Button = styled.Button`
  outline: none;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.color || 'blue'};
  border-radius: 10px;
  color: white;
  width: 100px;

  margin: 10px;
  &:hover {
    opacity: 0.5;
  }
  cursor: pointer;
`
