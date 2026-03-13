import { RouterProvider } from 'react-router-dom'
import router from './router'
import ANavbar from './components/ANavbar'

function App() {
  return (
    <>
      <ANavbar />
      <RouterProvider router={router} />
    </>
  )
}

export default App
