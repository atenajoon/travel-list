export default function Stats({ itemList }) {
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
