import { ReactNode } from 'react'
import styles from './AButton.module.css'

interface AButtonProps {
  children: ReactNode
  onClick?: () => void
  disabled?: boolean
}

function AButton({ children, onClick, disabled }: AButtonProps) {
  return (
    <button 
      className={styles.button} 
      onClick={onClick} 
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default AButton