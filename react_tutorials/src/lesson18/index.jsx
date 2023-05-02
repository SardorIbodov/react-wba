import React, { useState, useEffect } from "react";

const Lesson18 = () => {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(null);

  const getData = (id) => {
    return fetch(
      `https://jsonplaceholder.typicode.com/users${id ? `/${id}` : ``}`
    ).then((response) => response.json());
  };

  useEffect(() => {
    getData().then((response) => setData(response));
  }, []);

  const getInfo = (id) => {
    getData(id).then((response) => setSelected(response));
  };

  return (
    <div>
      <h1>Fetch</h1>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          {data.map((item) => {
            return (
              <h2 key={item.id}>
                {item.id}. {item.name}{" "}
                <button
                  onClick={() => {
                    getInfo(item.id);
                  }}
                >
                  Show more
                </button>
              </h2>
            );
          })}
        </div>
        {selected ? (
          <div>
            <h2>Name: {selected?.name}</h2>
            <h2>Username: {selected?.username}</h2>
            <h2>Email: {selected?.email}</h2>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Lesson18;
