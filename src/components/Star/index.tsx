import * as S from './styles'

export type StarProps = {
  color?: 'gray' | 'yellow'
  size?: 'normal' | 'large'
  width?: number
  height?: number
  hideOnMobile?: boolean
  onClick?: () => void
}

const Star = ({
  color = 'gray',
  size = 'normal',
  hideOnMobile = false,
  onClick,
  width = 34,
  height = 32
}: StarProps) => (
  <S.Wrapper
    color={color}
    size={size}
    hideOnMobile={hideOnMobile}
    onClick={onClick}
  >
    {color === 'yellow' ? (
      <svg
        width={width}
        height={height}
        viewBox="0 0 34 32"
        fill="none"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17 25.7833L27.3 32L24.5666 20.2833L33.6666 12.4L21.6833 11.3833L17 0.333344L12.3166 11.3833L0.333313 12.4L9.43331 20.2833L6.69998 32L17 25.7833Z"
          fill="currentColor"
        />
      </svg>
    ) : (
      <svg
        width={width}
        height={height}
        viewBox="0 0 34 32"
        fill="none"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M33.6666 12.4L21.6833 11.3667L17 0.333344L12.3166 11.3833L0.333313 12.4L9.43331 20.2833L6.69998 32L17 25.7833L27.3 32L24.5833 20.2833L33.6666 12.4ZM17 22.6667L10.7333 26.45L12.4 19.3167L6.86665 14.5167L14.1666 13.8833L17 7.16668L19.85 13.9L27.15 14.5333L21.6166 19.3333L23.2833 26.4667L17 22.6667Z"
          fill="currentColor"
        />
      </svg>
    )}
  </S.Wrapper>
)

export default Star
