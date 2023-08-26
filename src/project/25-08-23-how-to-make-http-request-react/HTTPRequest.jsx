import "./App.css";
import "./main.css";
import { useState, useEffect } from "react";

export default function HTTPRequest() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      // .then((json) => console.log(json));
      .then((json) => setData(json));
  }, []);

  function getPosts() {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      // .then((json) => console.log(json));
      .then((json) => setData(json));
  }

  return (
    <div className="container">
      <h1 className="title">HTTP Request</h1>

      <button className="btn" onClick={getPosts}>
        Get posts
      </button>
      {loading ? (
        <h2 className="mt-2">LOADING...</h2>
      ) : (
        <ul>
          {data.map((post) => (
            <li className="alert alert-info" key={post.id}>
              <div className="mr-1">{post.id}</div>
              <h3>{post.title}</h3>
              <p className="text-gray">{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
