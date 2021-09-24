import React, { useState } from "react";
import axios from "axios";

function Todo() {
  const [data, setData] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    const article = { name: "NJ is the Best Striking in PSG" };

    // const data = await axios.post("https://reqres.in/api/articles", article);
    // setData(data);

    axios
      .post("https://reqres.in/api/articles", article)
      .then((response) => {
        setData(response.data.data.id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateData = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="todo">
      <h2>Todo Form</h2>
    </div>
  );
}

export default Todo;
