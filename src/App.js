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
  return (
    <div className='add-form'>
      <h3> What do you need for your 😎 trip?</h3>
    </div>
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
          <Item item={item} />
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
