import  { useState, useMemo } from 'react';
const filterItems = (items, searchTerm) => {
  console.log('Filtering items (expensive operation)...');
  return items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

const ItemList = ({ items }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [count, setCount] = useState(0);

  const filteredItems = useMemo(() => {
    return filterItems(items, searchTerm);
  }, [items, searchTerm]); 

  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>
        Increment Count: {count}
      </button>
      <input
        type="text"
        placeholder="Search items..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredItems.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  const initialItems = [
    // ... an array of a large number of items
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Cherry' },
    // ...
  ];

  return <ItemList items={initialItems} />;
};

export default App;
