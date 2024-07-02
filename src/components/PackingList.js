import { useState } from 'react';
import Item from './Item';

export default function PackingList({
  onDeleteItem,
  onToggle,
  itemList,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState('packed');
  let sortedItems;

  if (sortBy === 'input') sortedItems = itemList;
  if (sortBy === 'description')
    sortedItems = itemList
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === 'packed')
    sortedItems = itemList
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className='list'>
      <ul>
        <h2>List</h2>
        {sortedItems.map((item) => (
          <Item
            onDeleteItem={onDeleteItem}
            onToggle={onToggle}
            item={item}
            key={item.id}
          />
        ))}
      </ul>
      <div className='actions'>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value='input'>Sort by Input Order</option>
          <option value='description'>Sort by Description</option>
          <option value='packed'>Sort by Packed Status</option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
}
