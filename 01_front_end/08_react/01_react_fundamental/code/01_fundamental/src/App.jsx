import './App.css'
import Home from './pages/Index'

function App() {

  const value = true;
  return (
    <>
      <div className="ticks">
        {value? 'benar' : 'salah'}
        <Home/> 
      </div>
    </>
  )
}

export default App
