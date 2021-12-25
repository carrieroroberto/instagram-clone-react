import { useEffect, useState } from "react";
import "./App.css";
import HeaderBar from "./components/HeaderBar/HeaderBar";
import Post from "./components/Post/Post";
import db from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export default function App() {
  // state
  const [posts, setPosts] = useState([]);

  const col = collection(db, "posts");

  useEffect(() => {
    let newPosts = [...posts];
    getDocs(col).then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        newPosts.push({ id: doc.id, data: doc.data() });
      });
      setPosts(newPosts);
    });
  }, []);

  //app
  return (
    <div className="app">
      {/* header bar */}
      <HeaderBar />

      {/* posts */}
      {posts.map((post) => (
        <Post
          key={post.id}
          username={post.data.username}
          image={post.data.image}
          avatar={post.data.avatar}
          likes={post.data.likes}
          caption={post.data.caption}
        />
      ))}
    </div>
  );
}
