import { Outlet } from 'react-router-dom'
import ANavbar from '../ANavbar'

function MainLayout() {
  return (
    <>
      <ANavbar />
      <main style={{ paddingTop: '80px' }}> {/* Space for fixed navbar */}
        <Outlet />
      </main>
    </>
  )
}

export default MainLayout
