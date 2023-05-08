import highOrder from "../highOrder";

const Click = ({ count, setCount }) => {
  return (
    <div>
      <h1>Click Component</h1>
      <button onClick={setCount}>Clicked {count} times</button>
    </div>
  );
};

export default highOrder(Click);
