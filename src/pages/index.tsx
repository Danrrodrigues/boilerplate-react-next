import { useState } from 'react'
import Main from 'components/Main'
import Button from 'components/Button'
import TextField from 'components/TextField'

import { Email, Lock, ErrorOutline } from '@styled-icons/material-outlined'

import { FormLink, FormWrapper, FormLoading, FormError } from 'components/Form'

export default function Home() {
  const [formError, setFormError] = useState('')
  const handleSubmit = async (event: React.FormEvent) => {}
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
          <TextField name="email" placeholder="Texto teste" />
          <Button type="submit" size="large" fullWidth>
            <span>Send email</span>
          </Button>
          <FormLink>Don’t have an account? </FormLink>
        </form>
      </FormWrapper>
    </>
  )
}
