
import './App.css'
// import Counter from './components/counter'
// import Posts from './components/useEffect'

// function App() {
//   // const [count, setCount] = useState(0)
//   // const [items,setItems]=useState([])
//   // const [resourceType,setResourceType] = useState('posts');
//   //     useEffect(()=>{
//   //     fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
//   //       .then((response) => response.json())
//   //       .then((json) => setItems(json));
//   //     },[resourceType])
//   // function decrement(){
//   //   setCount(prev=>prev -1)
    
//   // }
//   // function increment(){
//   //   setCount(prev => prev +1);
//   // }

//   return (
//     <>
//     <Counter/>
//     <Posts/>
//     {/* <button onClick={decrement}>
//           Decrease
//          </button>
           
//          <span>{count}</span>
//          <button onClick={increment}>
//           Increase
//          </button>
//           <div>
//         <button onClick={()=>setResourceType('posts')}>Posts</button>
//          <button onClick={()=>setResourceType('users')}>Users</button>
//           <button onClick={()=>setResourceType('comments')}>Comments</button>
//         </div>
//         <h1>{resourceType}</h1>
//         {items.map(item=>{
//           return <pre>{JSON.stringify(item)}</pre>
//         })}
        
//      */}
//     </>
//   )
// }

// export default App
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
    {id:4, name: 'Guava'},
    // ...
  ];

  return <ItemList items={initialItems} />;
};

export default App;
