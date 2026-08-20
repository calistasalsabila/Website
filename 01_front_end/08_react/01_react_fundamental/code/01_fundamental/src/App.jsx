import './App.css'
import Home from './pages/Index'
import { GlobalContext } from './context'

function App() {

  const user = {
    username: 'calista'
  }
  return (
    <>
      <div className="ticks">
        <GlobalContext.Provider value={user}>
          <Home  /> 
        </GlobalContext.Provider>

      </div>
    </>
  )
}

export default App
