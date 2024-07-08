import { useState } from 'react';
import Logo from './Logo';
import PackingList from './PackingList';
import Stats from './Stats';
import Form from './Form';
import TipCalculator from './TipCalculator';

const initialItems = [
  { id: 1, description: 'Passports', quantity: 2, packed: false },
  { id: 2, description: 'Socks', quantity: 12, packed: false },
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
  function handleClearList() {
    let confirmed = window.confirm(
      'Are you sure you want to delete all items?'
    );

    if (confirmed) setItemList([]);
  }
  return (
    <div className='app'>
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        onDeleteItem={handleDeleteItem}
        onToggle={handleTogglePack}
        itemList={itemList}
        onClearList={handleClearList}
      />
      <TipCalculator />
      <Stats itemList={itemList} />
    </div>
  );
}
