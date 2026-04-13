import React, { useState } from 'react';

function ToggleButtons() {
  const initialColors = Array(5).fill('gray');  
  const [buttonColors, setButtonColors] = useState(initialColors);

  const handleClick = (index) => {
    const newColors = [...buttonColors];

    // toggle only the clicked button
    newColors[index] =
      newColors[index] === 'gray' ? 'blue' : 'gray';

    setButtonColors(newColors);
  };

  return (
    <div>
      {buttonColors.map((color, index) => (
        <button
          key={index}
          style={{
            backgroundColor: color,
            padding: '10px',
            margin: '5px',
            border: 'none'
          }}
          onClick={() => handleClick(index)}
        >
          Button {index + 1}
        </button>
      ))}
    </div>
  );
}

export default ToggleButtons;