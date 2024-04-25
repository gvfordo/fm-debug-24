import type { MetaFunction } from "@remix-run/node";
import { useState, useEffect } from "react";
import { indexBy } from "../utility";

export const meta: MetaFunction = () => {
  return [
    { title: "Debugging Exercise" },
    { name: "description", content: "Find the issues." },
  ];
};

export default function Index() {
  const [posts, updatePosts] = useState([]);
  const [usersById, updateUsersById] = useState({});

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/pots").then((posts) =>
      updatePosts(posts)
    ));
    fetch("https://jsonplaceholder.typicode.com/users").then((users) =>
      updateUsersById(users)
    );
  }, []));

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <header className="App-header">
        <div className="App-header-content">
          <h1 className="App-title">Debugging App</h1>
        </div>
      </header>
      <section className="posts">
        {posts.map((post) => {
          return (
            <article
              style={{
                margin: "10px 0",
                padding: 10,
                border: "1px solid #ccc",
              }}
            >
              <p style={{ textDecoration: "underline", fontWeight: "bold" }}>
                {post.title}
              </p>
              <p>{post.userId}</p>
              <p>{post.body}</p>
            </article>
          );
        })}
      </section>
    </div>
  );
}
