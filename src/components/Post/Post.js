import "./Post.css";
import { Avatar } from "@mui/material";
import like from "./like.png";

function Post({ username, avatar, image, likes, caption }) {
  return (
    <div className="post">
      <div className="post_username">
        <Avatar
          className="post_avatar"
          sx={{ height: "32px", width: "32px" }}
          alt=""
          src={avatar}
        />
        <h4>{username}</h4>
      </div>
      <img className="post_image" src={image} alt="post" />
      <div className="post_action">
        <img src={like} alt="like" />
      </div>
      <div className="post_like">
        <b>Piace a {likes} persone</b>
      </div>
      <div className="post_caption">
        <div className="post_caption_text">
          <h4>{username}</h4>
          <p>{caption}</p>
        </div>
      </div>
      <div className="post_add_comments">
        <input type="text" placeholder="Aggiungi un commento..." />
        <h4>Pubblica</h4>
      </div>
    </div>
  );
}

export default Post;
