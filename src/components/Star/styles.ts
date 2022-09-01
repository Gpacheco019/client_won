import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { StarProps } from '.'

const wrapperModifiers = {
  normal: () => css`
    width: 3rem;
    height: 3.3rem;
  `,

  large: () => css`
    width: 5rem;
    height: 5.9rem;
  `,

  hideOnMobile: () => css`
    ${media.lessThan('medium')`
      width: 5.8rem;
      height: 4.5rem;

      svg {
        height: 4.5rem;
        pointer-events: none;
      }

      .text {
        display: none;
      }
    `}
  `
}

export const Wrapper = styled.div<StarProps>`
  ${({ theme, color, size, hideOnMobile }) => css`
    color: ${theme.colors[color!]};

    ${!!size && wrapperModifiers[size]}
    ${!!hideOnMobile && wrapperModifiers.hideOnMobile}
  `}
`
