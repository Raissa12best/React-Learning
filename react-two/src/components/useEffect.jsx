import {useEffect} from 'react'
function Posts(){
    const [resourceType,setResourceType] = useState('posts');
    useEffect(()=>{
       fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        .then((response) => response.json())
        .then((json) => setItems(json));
    },[resourceType])

return (
    <>
    <div>
        <button onClick={()=>setResourceType('posts')}>Posts</button>
         <button onClick={()=>setResourceType('users')}>Users</button>
          <button onClick={()=>setResourceType('comments')}>Comments</button>
        </div>
        <h1>{resourceType}</h1>
        </>
)
}
export default Posts;