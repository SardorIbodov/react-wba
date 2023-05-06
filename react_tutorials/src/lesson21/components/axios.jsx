import axios from "axios";

import { useEffect } from "react";

const Axios = () => {
  useEffect(() => {
    axios({
      method: "POST",
      url: "https://jsonplaceholder.typicode.com/users",
      data: {name: "axios"},
			// timeout: 1000
    }).then((response) => console.log(response.data, "axios"));
  }, []);

  return <h1>Axios</h1>;
};

export default Axios;
