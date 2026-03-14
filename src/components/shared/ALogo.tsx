import styles from './ALogo.module.css'
import { ShoppingBag } from 'lucide-react'

function ALogo() {
  return (
    <div className={styles.logo}>
      <ShoppingBag size={24} />
      APP SHOP
    </div>
  )
}

export default ALogo