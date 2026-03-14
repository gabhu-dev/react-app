import { useState, useRef, useEffect } from 'react'
import styles from './ASelect.module.css'
import { ChevronDown } from 'lucide-react'

export interface ASelectOption {
  value: string
  label: string
}

interface ASelectProps {
  options: ASelectOption[]
  value: string
  onChange: (value: string) => void
  label?: string
  placeholder?: string
}

function ASelect({ options, value, onChange, label, placeholder = 'Select...' }: ASelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const selectedOption = options.find(opt => opt.value === value)
  const displayValue = selectedOption ? selectedOption.label : placeholder

  return (
    <div className={styles.select} ref={wrapperRef}>
      {label && <span className={styles.select__label}>{label}</span>}
      <div className={styles.select__container}>
        <div 
          className={`${styles.select__trigger} ${isOpen ? styles['select__trigger--open'] : ''}`} 
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={styles.select__value}>{displayValue}</span>
          <ChevronDown
            className={`${styles.select__icon} ${isOpen ? styles['select__icon--open'] : ''}`}
            size={24} />
        </div>
        
        {isOpen && (
          <ul className={styles.select__list}>
            {options.map((option) => (
              <li
                key={option.value}
                className={`${styles.select__option} ${value === option.value ? styles['select__option--selected'] : ''}`}
                onClick={() => {
                  onChange(option.value)
                  setIsOpen(false)
                }}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default ASelect
