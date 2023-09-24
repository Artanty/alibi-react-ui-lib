import React, { ReactNode } from "react"

export type ButtonProps = {
  onClick(): void
  children: ReactNode
  variant: 'primary' | 'success'
  isDisabled: boolean
}

export function Button({children, onClick, isDisabled, variant }: ButtonProps) {
  const className: string = `button button-${variant}`;
  return (
    <button onClick={onClick} disabled={isDisabled} className={className}>
      {children}
    </button>
  )

}