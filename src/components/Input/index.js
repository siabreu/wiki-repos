import React from 'react'
import { InputContainer } from './styles';

function Input({value, onChange}) {
  return (
    <InputContainer>
      <input
        value={value}
        onChange={onChange}
        placeholder="username/reponame"
        autoFocus
        onFocus={e => e.currentTarget.select()}
      />
    </InputContainer>
  )
}

export default Input