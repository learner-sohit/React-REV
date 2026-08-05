import { useState } from 'react';

const App = () => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted', title);
    setTitle('');
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter youy name"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button type="Submit"> Submit</button>
      </form>
    </div>
  );
};

export default App;
