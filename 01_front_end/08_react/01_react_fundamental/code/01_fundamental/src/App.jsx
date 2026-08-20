import './App.css'
import Home from './pages/Index'
import { GlobalContext } from './context'
import { RouterProvider } from 'react-router-dom'
import {router} from './routers'

function App() {

  const user = {
    username: 'calista'
  }
  return (
    <>
      <div className="ticks">
        <GlobalContext.Provider value={user}>
          {/* <Home  />  hilang karena dah di ganti sama router */}
          <RouterProvider router={router} />
        </GlobalContext.Provider>


      </div>
    </>
  )
}

export default App
