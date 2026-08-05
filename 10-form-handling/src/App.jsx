const App = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter youy name" />
        <button type="Submit"> Submit</button>
      </form>
    </div>
  );
};

export default App;
