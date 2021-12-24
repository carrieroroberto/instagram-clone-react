import { useEffect, useState } from "react";
import "./App.css";
import HeaderBar from "./components/HeaderBar/HeaderBar";
import Post from "./components/Post/Post";
import db from "../firebase";

export default function App() {
  // state
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          post: doc.data
        }))
      );
    });
  }, []);

  //app
  return (
    <div className="app">
      {/* header bar */}
      <HeaderBar />

      {/* posts*/}
      {posts.map(({ id, post }) => (
        <Post
          key={id}
          username={post.username}
          avatar={post.avatar}
          image={post.image}
          likes={post.likes}
          caption={post.caption}
        />
      ))}
    </div>
  );
}
