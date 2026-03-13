import { ReactNode } from 'react'

interface AButtonProps {
  children: ReactNode
}

function AButton({ children }: AButtonProps) {
  return (
    <button>{children}</button>
  )
}

export default AButton