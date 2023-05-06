import Fetch from "../components/fetch";
import Axios from "../components/axios";
import axios from "axios";

const Root = () => {
  axios.interceptors.request.use((request) => {
    request.headers.Authorization = "Bearer token";
    return request;
  });
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <Fetch />
      <Axios />
    </div>
  );
};

export default Root;
