import { ReactNode } from 'react'
import { Loader2 } from 'lucide-react'
import styles from './AButton.module.css'

interface AButtonProps {
  children: ReactNode
  onClick?: () => void
  disabled?: boolean
  ghost?: boolean
  loading?: boolean
}

function AButton({ children, onClick, disabled, ghost = false, loading = false }: AButtonProps) {
  return (
    <button 
      className={`${styles.button} ${ghost ? styles.ghost : ''}`} 
      onClick={onClick} 
      disabled={disabled || loading}
    >
      {children}
      {loading && <Loader2 className={styles.loading_icon} size={18} />}
    </button>
  )
}

export default AButton