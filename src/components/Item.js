export default function Item({ onDeleteItem, onToggle, item }) {
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
