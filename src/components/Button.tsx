import { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'

const ButtonStyled = styled.button`
  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  background: #835afd;
  color: #fff;
  padding: 0 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: 0;

  transition: 0.2s;

  img {
    margin-right: 8px;
  }

  &.outlined {
    background: #fff;
    border: 1px solid #835afd;
    color: #835afd;
  }

  &:not(:disabled):hover {
    filter: brightness(0.9);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean
}

function Button({ isOutlined = false, ...props }: ButtonProps) {
  return (
    <ButtonStyled className={`${isOutlined ? 'outlined' : ''}`} {...props} />
  )
}

export default Button
