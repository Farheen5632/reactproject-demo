import Callingfuntion from "./Callingfuntion"
import Greeting from "./Greeting"
import PropsReact from "./PropsReact"


function App() {

  return (
    <>
     <Greeting/> 
     <PropsReact name="Raghwendra"  age={27}/>
      <h1>Test Button Click</h1>
      <Callingfuntion />
    </>
  )
}

export default App
