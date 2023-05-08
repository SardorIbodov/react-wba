import { useState } from "react";

const highOrder = (Component) => {
  const Updated = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
      setCount(count + 1);
    };
    return <Component count={count} setCount={increment} />;
  };
  return Updated;
};

export default highOrder;
