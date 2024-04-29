import Card from "./Card.jsx"
import Student from "./Student.jsx"


function App() {
  return(
    <>
      <Card />
      <Card />
      <Card />
      <Student name="Nabil" age={24}/>
      <Student name="Siam" age={23}/>
      <Student />
    </>

  )

}

export default App
