import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    //const fetchData = async () => {
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
    //   axios
    //     .get("https://jsonplaceholder.typicode.com/todos")
    //     .then((response) => {
    //       const { data } = response;
    //       console.log(data);
    //       setData(data);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // };

    const postData = async () => {
      //========== POST Async awit error handling===========
      // try {
      //   const data = {
      //     title: "NJ is the Best Striking in PSG",
      //     completed: true,
      //   };
      //   const response = await axios.post(
      //     "https://jsonplaceholder.typicode.com/todos",
      //     data
      //   );
      //   console.log(response.data);
      // } catch (error) {
      //   console.log(error);
      // }
      // =================POST with Promises(.then)==========
      // axios({
      //   method: "POST",
      //   url: "https://jsonplaceholder.typicode.com/todos",
      //   data: { title: "PSG is the best team", completed: true },
      // }).then((response) => {
      //   const { data } = response;
      //   console.log(data);
      // });
    };

    // fetchData();
    postData();
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
