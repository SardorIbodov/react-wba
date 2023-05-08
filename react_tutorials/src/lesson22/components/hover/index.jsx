import highOrder from "../highOrder";

const Hover = ({ count, setCount }) => {
  return (
    <div>
      <h1>Hover Component</h1>
      <button onMouseOver={setCount}>Hovered {count} times</button>
    </div>
  );
};

export default highOrder(Hover);
