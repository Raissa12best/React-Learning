import {useRef} from 'react'
 export default function MyComponent() {
  const inputRef = useRef(null);

  function handleFocus() {
    inputRef.current.focus();
  }

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleFocus}>Focus the input</button>
    </div>
  );
}