import styles from './AInputSearch.module.css'
import { Search } from 'lucide-react'

function AInputSearch({ value, onChange }: { value: string, onChange: (v: string) => void }) {
  return (
    <div className={styles['search']}>
      <Search className={styles['search__icon']} />
      <input
        className={styles['search__field']}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Buscar por nombre..."
      />
    </div>
  )
}

export default AInputSearch