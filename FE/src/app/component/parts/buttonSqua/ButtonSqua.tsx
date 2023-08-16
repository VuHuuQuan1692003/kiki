import { type } from 'os'
import React, { Children, FunctionComponent } from 'react'
import { css } from '@emotion/react'
interface ButtonComponent {
  props?: any
  className?: string,
  children?: React.ReactNode
  outline?: boolean
}

const ButtonSqua: FunctionComponent<ButtonComponent> = ({ children, className, outline = false }) => {
  return (
    <button css={cssButton(outline)} className={className}>
      {children}
    </button>
  )
}

export default ButtonSqua
const cssButton = (outline: boolean) => css`
background-color: ${outline ? '#EF4444' : '#fff'};
color: ${outline ? 'white' : '#2597F3'};
    height: auto;
    font-size: 1.5rem;
`