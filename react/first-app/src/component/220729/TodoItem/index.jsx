import React from 'react'
import * as S from './style'
import { GrCheckbox, GrCheckboxSelected } from 'react-icons/gr'
import { AiOutlineCloseCircle } from 'react-icons/ai'

function TodoItem({ itemData, todoCheckHandler, todoRemoveHandler }) {
  const { id, date, content, checked } = itemData

  return (
    <S.ItemContainer isChecked={checked}>
      <S.ItemButton onClick={() => todoCheckHandler(id)}>
        {checked ? <GrCheckboxSelected /> : <GrCheckbox />}
      </S.ItemButton>
      <S.ItemText>{date}</S.ItemText>
      <S.ItemText>{content}</S.ItemText>
      <S.ItemButton onClick={() => todoRemoveHandler(id)}>
        <AiOutlineCloseCircle />
      </S.ItemButton>
    </S.ItemContainer>
  )
}

export default TodoItem
