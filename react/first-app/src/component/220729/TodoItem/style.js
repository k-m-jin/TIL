import styled from 'styled-components'

export const ItemContainer = styled.div`
  ${({ theme }) => theme.common.flexAround};
  flex-shrink: 0;

  background-color: ${({ theme }) => theme.palette.yellow};
  opacity: ${({ isChecked }) => (isChecked ? '0.5' : '1')};
  border-radius: 10px;
  color: black;
  width: 90%;
  height: 5rem;
  margin: 0.5rem;

  font-family: 'NotoSansBold';
`

export const ItemButton = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`

export const ItemText = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  width: 30%;
`
