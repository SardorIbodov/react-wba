// import { useDeferredValue, useMemo } from "react";

// const List = ({ value }) => {
//   const defValue = useDeferredValue(value);
//   const list = useMemo(() => {
//     let l = [];
//     for (let i = 1; i <= 10000; i++) {
//       l.push(`${defValue}\n`);
//     }
//     return l;
//   }, [defValue]);
//   return defValue === value ? list : "loading";
// };

// export default List;
