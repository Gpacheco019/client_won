import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Rating from '.'

const onChangeMock = jest.fn()

describe('<Rating />', () => {
  it('should render the rating correctly', () => {
    const { container } = renderWithTheme(
      <Rating count={5} onChange={onChangeMock} />
    )

    expect(screen.getAllByRole('img')).toHaveLength(5)
    expect(screen.getAllByTestId('value-rate')).toHaveLength(5)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render five stars default if not passed value', () => {
    renderWithTheme(<Rating onChange={onChangeMock} />)
    expect(screen.getAllByRole('img')).toHaveLength(5)
  })

  it('should called correctly click', () => {
    renderWithTheme(<Rating onChange={onChangeMock} />)

    const input = screen.getAllByTestId('value-rate')[0]
    const svg = screen.getAllByTestId('wrapper-star')[0].firstChild
    fireEvent.click(input)

    expect(onChangeMock).toHaveBeenCalledTimes(1)
    expect(svg).toHaveStyle({ color: '#FFD12D' })
  })
})
