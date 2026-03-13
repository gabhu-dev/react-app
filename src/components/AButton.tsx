import { ReactNode } from 'react'
import styles from './AButton.module.css'

interface AButtonProps {
  children: ReactNode
}

function AButton({ children }: AButtonProps) {
  return (
    <button className={styles.button}>
      {children}</button>
  )
}

export default AButton