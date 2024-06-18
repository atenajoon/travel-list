import { useState } from 'react';

const initialItems = [
  { id: 1, description: 'Passports', quantity: 2, packed: false },
  { id: 2, description: 'Socks', quantity: 12, packed: true },
  { id: 3, description: 'Charger', quantity: 1, packed: false },
];

export default function App() {
  return (
    <div className='app'>
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🏝️ Far Away 🧳</h1>;
}

function Form() {
  const [description, setDescription] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    console.log(description);
    setDescription('');
  }

  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <h3> What do you need for your 😎 trip?</h3>
      <select>
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

function PackingList() {
  return (
    <div className='list'>
      <ul>
        <h2>List</h2>
        {initialItems.map((item) => (
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
