import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';

function App() {

  const [items, setItems] = useState([
    {
        id: 1,
        checked: true,
        item: "One half pound bag of Cocoa Covered"
    },
    {
        id: 2,
        checked: false,
        item: "Item 2"
    },
    {
        id: 3,
        checked: false,
        item: "Item 3"
    }
]);


const handleCheck = (id) => {
  //console.log(`key: ${id}`)
  const listItems = items.map((item) => item.id === id ? { // Funkcija map() se koristi za ponavljanje niza i manipulisanje ili promenu stavki podataka. U React-u, funkcija map() se najčešće koristi za prikazivanje liste podataka u DOM-u.
      ...item,
      checked: !item.checked
  } : item);
  setItems(listItems);
  localStorage.setItem('shoppinglist', JSON.stringify(listItems)); // cuva u lokalnoj memoriji
}


const handleDelete = (id) => {
  // console.log(id)
  const listItems = items.filter((item) => item.id !== id) // filter ce stvoriti novi niz i on ce imati samo id-ove koji nisu jednaki id-ju itema
  setItems(listItems);
  localStorage.setItem('shoppinglist', JSON.stringify(listItems)); // cuva u lokalnoj memoriji
}

  return (
    <div className="App">
        <Header title="Groceries"/>
        {/* <Header /> */}
        <Content // poziva iz Content komponente sve njegove iteme
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
        <Footer length={items.length} />
    </div>
  );
}

export default App;
