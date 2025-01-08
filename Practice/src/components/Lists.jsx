import React, { useState } from 'react';
import ListItem from './ListItem';

export default function List(props) {
  const [fruits, setFruits] = useState([
    { id: 5271, name: "Oranges", completed: true },
    { id: 7825, name: "Apples", completed: false },
    { id: 8391, name: "Strawberries", completed: false },
  ]);
  const [show, setShow] = useState(true);
  
  function handleDelete(id) {
    setFruits(fruits.filter(fruit => fruit.id !== id));
  }

  return (
    <>
    <div className="App">
        <h1>Fruit List {props.title }</h1>
        <ul>
            <button className='trigger' onClick={() => setShow(!show)}>Toggle</button>
            { show && fruits.map((fruit) => (
                <ListItem key={fruit.id} fruit={fruit} handleDelete={handleDelete} />
            )) }
        </ul>
    </div>


    <div className='box'>
        <p className=''></p>
    </div>
    </>
  );
}
