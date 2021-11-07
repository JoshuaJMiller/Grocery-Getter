import { useState } from "react"
import gorcer3 from './grocer3.png';
import Items from './components/Items'
import AddItemForm from './components/AddItemForm'

function App() {

  const [items, setItems] = useState
  (
    [
        {
          id: 1,
          text: 'Sample Entry',
        },
       
    ]
  )

  const addItem = (item) =>
  {
    const id = Math.floor(Math.random() * 10000) + 1
    const newItem = {id, ...item}
    setItems([...items, newItem])
  }

  const deleteItem = (id) =>
  {
    setItems(items.filter((item) => item.id !== id))
  }


  return (
    <div className="container">
      <header className='header'>
        <img src={gorcer3} alt="Logo" height={200}/>
       <div>
         <h1>Grocery Getter</h1>
         <p>Groceries are just a click away!</p>
       </div>
      </header>
     
      <AddItemForm text='add' onAdd={addItem}/>

      {
        items.length > 0 ? (<Items items={items} onDelete={deleteItem}/>) : ('no items to display')
      }
    </div>
  );
}

export default App;
