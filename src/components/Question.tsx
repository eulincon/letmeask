import styled from 'styled-components'

const QuestionStyled = styled.div`
  background: #fefefe;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.04);
  padding: 24px;
  margin-bottom: 8px;

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
  }
`

type QuestionProps = {
  content: string
  author: {
    name: string
    avatar: string
  }
}

export default function Question({ content, author }: QuestionProps) {
  return (
    <QuestionStyled>
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
      </footer>
    </QuestionStyled>
  )
}
