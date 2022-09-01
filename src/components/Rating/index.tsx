import { useState, ChangeEvent } from 'react'
import Star from '../Star'
import * as S from './styles'

export type RatingProps = {
  count?: number
  onChange(event: ChangeEvent<HTMLInputElement>): void
}

const Rating = ({ count = 5, onChange }: RatingProps) => {
  const [rating, setRating] = useState(0)

  const handleRating = (valueRating: number) => () => {
    setRating(valueRating)
  }

  return (
    <S.Wrapper>
      {Array(count)
        .fill(0)
        .map((_item, index) => {
          const valueRating = (index += 1)
          return (
            <S.LabelRate key={index}>
              <S.ValueRate
                value={valueRating}
                type="radio"
                name="rating"
                onClick={handleRating(valueRating)}
                onChange={onChange}
              />
              <S.StarWrapper>
                <Star
                  width={30}
                  height={28}
                  color={valueRating <= rating ? 'yellow' : 'gray'}
                />
              </S.StarWrapper>
            </S.LabelRate>
          )
        })}
    </S.Wrapper>
  )
}

export default Rating
