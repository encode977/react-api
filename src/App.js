import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      //=========== GET with Async await=========
      // const result = await axios.get(
      //   "https://jsonplaceholder.typicode.com/todos"
      // );
      // const { data } = result;
      // console.log(data);
      // setData(data);

      //==========Async awit error handling===========
      // try {
      //   const result = await axios.get(
      //     "https://jsonplaceholder.typicode.com/todos"
      //   );
      //   const { data } = result;
      //   const value = data.data;
      //   setData(value);
      // } catch (error) {
      //   console.log(error);
      // }
      // =================GET with Promises(.then)==========
      axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then((response) => {
          const { data } = response;
          console.log(data);
          setData(data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    fetchData();
  }, []);

  return (
    <div className="app">
      {data?.slice(0, 8).map((item) => (
        <h4 key={item.id}>{item.title}</h4>
      ))}
    </div>
  );
}

export default App;
