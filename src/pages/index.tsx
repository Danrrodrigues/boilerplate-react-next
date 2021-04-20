import { useState } from 'react'
import Main from 'components/Main'
import Button from 'components/Button'
import TextField from 'components/TextField'

import { ErrorOutline } from '@styled-icons/material-outlined'
import * as S from './styles'

import { FormLink, FormWrapper, FormError } from 'components/Form'

export default function Home() {
  const [formError, setFormError] = useState('')
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setFormError('Teste')
  }
  return (
    <>
      <Main />
      <FormWrapper>
        {!!formError && (
          <FormError>
            <ErrorOutline /> {formError}
          </FormError>
        )}
        <form onSubmit={handleSubmit}>
          <S.Content>
            <S.Row
              style={{ flex: 1, justifyContent: 'right', alignItems: 'right' }}
            >
              <TextField name="email" placeholder="Texto teste" />
            </S.Row>
            <S.Row
              style={{ flex: 1, justifyContent: 'left', alignItems: 'left' }}
            >
              <Button type="submit" size="medium">
                <span>Send email</span>
              </Button>
            </S.Row>
          </S.Content>
          {/* <FormLink>Don’t have an account? </FormLink> */}
        </form>
      </FormWrapper>
    </>
  )
}
