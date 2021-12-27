import { useEffect, useState } from "react";
import "./App.css";
import Post from "./components/Post/Post";
import db from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { Modal, Button, Input } from "@material-ui/core";

export default function App() {
  // state
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);

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
      <div className="header_bar">
        <img
          className="header_bar_logo"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="logo"
        />
        <div className="header_bar_buttons">
          <Button onClick={() => setOpen(true)}>Accedi</Button>
          <Button onClick={() => setOpen(true)}>Registrati</Button>
        </div>
      </div>

      {/* modal */}
      <Modal className="modal" open={open} onClose={() => setOpen(false)}>
        <div className="modal_content">
          <Input type="text" placeholder="Inserisci il tuo username" />
          <Input type="email" placeholder="Inserisci la tua email" />
          <Input type="password" placeholder="Inserisci la tua password" />
          <Button>Registrati</Button>
        </div>
      </Modal>

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
