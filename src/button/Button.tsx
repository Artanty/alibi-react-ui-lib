import React, { ReactNode } from "react"
import './Button.css' 

export type ButtonProps = {
  onClick(): void
  children: ReactNode
  variant: 'primary' | 'success'
  isDisabled: boolean
}

export function Button({
  children = 'Button Name', 
  onClick, 
  isDisabled, 
  variant = 'primary'
}: ButtonProps) {
  const className: string = `button button-${variant}`;
  return (
    <button onClick={onClick} disabled={isDisabled} className={className}>
      {children}
    </button>
  )

}