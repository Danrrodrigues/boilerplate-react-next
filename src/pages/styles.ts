import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Content = styled.div`
  ${({ theme }) => css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas:
    ". . . .";
  `}
`

export const Row = styled.div`
  ${({ theme }) => css`

  display: flex;
  align-items: center;
  /* margin: 0 auto;
  flex-direction: row; */
  align-content: center;
  justify-content: space-between;
    /* margin-bottom: 1em; */
  `}
`
