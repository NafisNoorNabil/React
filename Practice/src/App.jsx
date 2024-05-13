import Card from "./Card.jsx"
import Student from "./Student.jsx"
import List from "./List.jsx"

function App() {
  const items=["Keyborad","Mouse","Bottle", "Monitor"]
  const items2=["Mug","Phone","Headphone", "CPU"]
  return(
    <>
      <Card />
      <Card />
      <Card />
      <Student name="Nabil" age={24}/>
      <Student name="Siam" age={23}/>
      <Student />

      <List list={items}/>
      <List list={items2}/>
    </>

  )

}

export default App
