import React, { useState, useTransition, Suspense, useId } from "react";
import { flushSync } from "react-dom";
const Element = React.lazy(() => import("./components/suspense"));

const Lesson23 = () => {
  // 1 => Batching
  // const [number, setNumber] = useState(0);
  // const [type, setType] = useState("Even");
  // const plus = () => {
  //   flushSync(() => {
  //     setNumber(number + 1);
  //   });
  //   flushSync(() => {
  //     setType((number + 1) % 2 === 0 ? "Even" : "Odd");
  //   });
  // };
  // console.log("re-render");
  // return (
  //   <div>
  //     <h1>
  //       {number} - {type}
  //     </h1>
  //     <button onClick={plus}>Plus</button>
  //   </div>
  // );
  // 2 => useTranstion
  // const [value, setValue] = useState("");
  // const [list, setList] = useState([]);
  // const [isPending, startTransition] = useTransition();
  // const change = ({ target: { value } }) => {
  //   setValue(value);
  //   startTransition(() => createList(value));
  // };
  // const createList = (value) => {
  //   let l = [];
  //   for (let i = 1; i <= 10000; i++) {
  //     l.push(`${i}. ${value}`);
  //   }
  //   setList(l);
  // };
  // return (
  //   <div>
  //     <input type="text" onChange={change} />
  //     {isPending ? "Loading..." : list.map((item) => <p>{item}</p>)}
  //   </div>
  // );
  // 3 => useDeferredValue()
  // const [value, setValue] = useState("");
  // const change = ({ target: { value } }) => {
  //   setValue(value);
  // };
  // return (
  //   <div>
  //     <input type="text" onChange={change} />
  //     <List value={value} />
  //   </div>
  // );
  // 4 => Suspense
  // return (
  //   <Suspense fallback={<h1>Loading...</h1>}>
  //     <Element />
  //   </Suspense>
  // );
  // 5 => useId
  // const id1 = useId();
  // const id2 = useId();
  // const id3 = useId();
  // const id4 = useId();
  // return (
  //   <h1>
  //     {id1} - {id2} - {id3} - {id4}
  //   </h1>
  // );
};

export default Lesson23;
