const Card = (props) => {
  const { user } = props;

  return (
    <div className="card">
      <h1>{user}</h1>
      <img
        src="https://images.unsplash.com/photo-1764352104218-2d3a899ce36c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0Mnx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, vero.
      </p>
      <button>view profile</button>
    </div>
  );
};

export default Card;
