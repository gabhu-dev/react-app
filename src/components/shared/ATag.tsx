import { ReactNode } from 'react'
import styles from './ATag.module.css'

interface ATagProps {
  children: ReactNode
  color?: 'default' | 'red'
}

function ATag({ children, color = 'default' }: ATagProps) {
  return (
    <span className={`${styles.tag} ${styles[`tag--${color}`]}`}>
      {children}
    </span>
  )
}

export default ATag
