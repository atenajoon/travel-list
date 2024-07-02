import { useState } from 'react';

const initialItems = [
  { id: 1, description: 'Passports', quantity: 2, packed: false },
  { id: 2, description: 'Socks', quantity: 12, packed: true },
  { id: 3, description: 'Charger', quantity: 1, packed: false },
];

export default function App() {
  const [itemList, setItemList] = useState(initialItems);

  function handleAddItem(newItem) {
    setItemList([...itemList, newItem]);
  }
  function handleDeleteItem(itemToDelete) {
    const newList = itemList.filter((item) => item.id !== itemToDelete.id);
    setItemList([...newList]);
  }
  function handleTogglePack(itemToPack) {
    const packedItemList = itemList.map((item) =>
      item.id === itemToPack.id ? { ...item, packed: !item.packed } : item
    );
    setItemList(packedItemList);
  }
  return (
    <div className='app'>
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        onDeleteItem={handleDeleteItem}
        onToggle={handleTogglePack}
        itemList={itemList}
      />
      <Stats itemList={itemList} />
    </div>
  );
}

function Logo() {
  return <h1>🏝️ Far Away 🧳</h1>;
}

function Form({ onAddItem }) {
  const [quantity, setQuantity] = useState(0);
  const [description, setDescription] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    const newItem = { description, quantity, packed: false, id: Date.now() };
    onAddItem(newItem);
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

function Item({ onDeleteItem, onToggle, item }) {
  return (
    <li id={item.id}>
      <input
        onClick={() => onToggle(item)}
        name='packed'
        value={item.packed}
        type='checkbox'
      />
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.description}: {item.quantity}{' '}
      </span>
      <button onClick={() => onDeleteItem(item)}>❌</button>
    </li>
  );
}

function PackingList({ onDeleteItem, onToggle, itemList }) {
  return (
    <div className='list'>
      <ul>
        <h2>List</h2>
        {itemList.map((item) => (
          <Item
            onDeleteItem={onDeleteItem}
            onToggle={onToggle}
            item={item}
            key={item.id}
          />
        ))}
      </ul>
    </div>
  );
}

function Stats({ itemList }) {
  if (!itemList.length)
    return (
      <p className='stats'>
        {' '}
        <em>Start adding your items to the list!🚀</em>
      </p>
    );
  const numItems = itemList.length;
  const numPacked = itemList.filter((item) => item.packed).length;
  const percentPacked = (numPacked * 100) / numItems;
  return (
    <footer className='stats'>
      <em>
        {percentPacked === 100
          ? 'You got everything! Ready to go ✈️'
          : ` 🧳 You have ${numItems} items on your list, and you already packed
        ${numPacked} (${percentPacked}%)`}
      </em>
    </footer>
  );
}
