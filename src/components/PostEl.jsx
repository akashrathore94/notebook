import { useParams } from "react-router";
import styles from "./PostEl.module.css";

function PostEl({ posts }) {
  const { id } = useParams();
  const post = posts.filter((post) => post.id === Number(id));

  return (
    <div className={styles.post}>
      <div className={styles.cont}>
        <div className={styles.imgCont}></div>
        <p
          style={{
            marginBottom: "10px",
            display: "flex",
            fontWeight: "600",
            gap: "10px",
          }}
        >
          {post[0]?.title}{" "}
          <span style={{ marginLeft: "auto" }}>Views: {post[0]?.views}</span>{" "}
        </p>
        <p>{posts[0]?.body}</p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10px",
            fontWeight: "600",
          }}
        >
          <p>Likes: {posts[0]?.reactions.likes}</p>
          <p>Dislikes: {posts[0]?.reactions.dislikes}</p>
        </div>
      </div>
    </div>
  );
}

export default PostEl;
