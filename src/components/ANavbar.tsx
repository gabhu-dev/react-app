import styles from './ANavbar.module.css'

function ANavbar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/details">Details</a>
        </li>
      </ul>
    </nav>
  )
}

export default ANavbar