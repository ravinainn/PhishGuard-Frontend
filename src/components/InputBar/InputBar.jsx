import React from 'react'
import styled from 'styled-components'

const InputBar = ({placeHolder, buttonText, width}) => {
  return (
    <InputBarSection>
      <Input placeholder={placeHolder} />
      <InputButton>{buttonText}</InputButton>
    </InputBarSection>
  )
}

export default InputBar

const InputBarSection = styled.div`
  width: 100%;
  margin-top: 2.88rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`

const Input = styled.input`
  width: 100%;
  height: 3rem;
  border-radius: 1rem;
  background: ${({ theme }) => theme.palette.white};
  padding-left: 0.89rem;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;

  &::placeholder{
    font-size: 1.1rem;
    font-style: normal;
    font-weight: 400;
    color: ${({ theme }) => theme.placeholder};
  }
`

const InputButton = styled.button`
  width: 28.836%;
  text-align: center;
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 400;
  color: ${({ theme }) => theme.palette.white};
  background-color: ${({ theme }) => theme.palette.secondary};
  padding: 0.45rem;
  border-radius: 1rem;
`