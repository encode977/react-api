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

    //==========GET Async awit error handling===========
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

    //const postData = async () => {
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
    // };

    // const UpdateData = async () => {
    //=========== PUT with Async await=========
    // const response = await axios.put(
    //   "https://jsonplaceholder.typicode.com/todos/1",
    //   {
    //     title: "FCB is the Best team",
    //     completed: true,
    //   }
    // );
    // const { data } = response;
    // console.log(response);
    //==========PUT Async awit error handling===========
    //   try {
    //     const response = await axios.put(
    //       "https://jsonplaceholder.typicode.com/todos/1",
    //       {
    //         title: "FCB is the best team",
    //         completed: true,
    //       }
    //     );
    //     const { data } = await response;
    //     console.log(data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // =================PUT with Promises(.then)==========
    // axios
    //   .put("https://jsonplaceholder.typicode.com/todos/1", {
    //     title: "FCB is the best team",
    //     completed: true,
    //   })
    //   .then((response) => {
    //     const { data } = response;
    //     console.log(data);
    //   });
    // };

    const deleteData = async () => {
      //=========== DELETE with Async await=========
      // const response = await axios.delete(
      //   "https://jsonplaceholder.typicode.com/todos/1"
      // );
      // console.log(response);
      //==========DELETE Async awit error handling===========
      // try {
      //   const res = await axios.delete(
      //     "https://jsonplaceholder.typicode.com/todos/1"
      //   );
      //   console.log(res);
      // } catch (error) {
      //   console.log(error);
      // }

      // =================DELETE with Promises(.then)==========
      axios
        .delete("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    // fetchData();
    // postData();
    //UpdateData();

    deleteData();
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
