import { useState } from 'react';

export default function Form({ onAddItem }) {
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
