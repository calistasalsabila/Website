import './App.css'
import Article from './componennts/Article'
function App() {

  return (
    <>
      <div className="ticks">
        <Article name="Calista" titles={["dokja", "hamin", "peter"]}/>
        <br />
        <Article name="Iscal" titles={["dino", "apato"]} />
      </div>
    </>
  )
}

export default App
