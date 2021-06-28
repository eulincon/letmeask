import cx from 'classnames'
import { ReactNode } from 'react'
import styled from 'styled-components'

const QuestionStyled = styled.div`
  background: #fefefe;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.04);
  padding: 24px;
  margin-bottom: 8px;

  &.highlighted {
    background: #f4f0ff;
    border: 1px solid #835afd;

    footer .user-info span {
      color: #29292e;
    }
  }

  &.answered {
    background: #dbdcdd;
  }

  p {
    color: #29292e;
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;

    .user-info {
      display: flex;
      align-items: center;

      img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
      }

      span {
        margin-left: 8px;
        color: #737380;
        font-size: 14px;
      }
    }

    > div {
      display: flex;
      gap: 16px;
    }

    button {
      border: 0;
      background: transparent;
      cursor: pointer;
      transition: filter 0.2s;

      &.like-button {
        display: flex;
        align-items: flex-end;
        color: #737380;
        gap: 8px;

        &.liked {
          color: #835afd;

          svg path {
            stroke: #835afd;
          }
        }
      }

      &:hover {
        filter: brightness(0.7);
      }
    }
  }
`

type QuestionProps = {
  content: string
  author: {
    name: string
    avatar: string
  }
  children?: ReactNode
  isAnswered?: boolean
  isHighLighted?: boolean
}

export default function Question({
  isAnswered = false,
  isHighLighted = false,
  content,
  author,
  children,
}: QuestionProps) {
  return (
    <QuestionStyled
      className={cx(
        { answered: isAnswered },
        { highlighted: isHighLighted && !isAnswered }
      )}
    >
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div>{children}</div>
      </footer>
    </QuestionStyled>
  )
}
