import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
`

export const LabelRate = styled.label`
  display: flex;
  margin-right: 3.2rem;
  cursor: pointer;

  :last-child {
    margin-right: 0;
  }
`

export const StarWrapper = styled.span.attrs({
  'data-testid': 'wrapper-star'
})`
  display: flex;
`

export const ValueRate = styled.input.attrs({
  'data-testid': 'value-rate'
})`
  display: none;
`
