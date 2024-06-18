import { useState } from 'react';

const initialItems = [
  { id: 1, description: 'Passports', quantity: 2, packed: false },
  { id: 2, description: 'Socks', quantity: 12, packed: true },
  { id: 3, description: 'Charger', quantity: 1, packed: false },
];

export default function App() {
  const [itemList, setItemList] = useState(initialItems);
  return (
    <div className='app'>
      <Logo />
      <Form itemList={itemList} setItemList={setItemList} />
      <PackingList itemList={itemList} />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🏝️ Far Away 🧳</h1>;
}

function Form({ itemList, setItemList }) {
  const [quantity, setQuantity] = useState(0);
  const [description, setDescription] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    const newItem = { description, quantity, packed: false, id: Date.now() };

    setItemList([...itemList, newItem]);
    console.log(itemList);
    setDescription('');
    setQuantity(1);
  }

  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <h3> What do you need for your 😎 trip?</h3>
      <select
        onChange={(e) => setQuantity(Number(e.target.value))}
        value={quantity}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        onChange={(e) => setDescription(e.target.value)}
        type='text'
        placeholder='Item...'
        value={description}
        required
      />
      <button>Add</button>
    </form>
  );
}

function Item({ item }) {
  return (
    <li id={item.id}>
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.description}: {item.quantity}{' '}
      </span>
      <button>❌</button>
    </li>
  );
}

function PackingList({ itemList }) {
  return (
    <div className='list'>
      <ul>
        <h2>List</h2>
        {itemList.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Stats() {
  return (
    <footer className='stats'>
      <em>🧳 You have X items on your list, and you already packed X (X%)</em>
    </footer>
  );
}
