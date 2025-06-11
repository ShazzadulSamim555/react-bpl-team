
import './App.css'
import Available from './component/Available'
import Header from './component/Header'
import Navbar from './component/Navbar'
import Players from './component/Players'

function App() {
  
  return (
    <div  className="mx-5 lg:mx-10 my-5 lg:my-10 bebas flex flex-col gap-10">
      <Navbar></Navbar>
      
      <Header></Header>

      <Available></Available>

      <Players></Players>
      
    </div>
  )
}

export default App
