import { useState } from "react";
import styles from "./Posts.module.css";
import Title from "./Title";

function Posts({ posts }) {
  if (posts.length === 0) return null;
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [filterPost, setFilterPost] = useState(posts);

  function handleSearch(e) {
    setSearch(e.target.value);
    setFilterPost(
      posts.filter((post) =>
        post.title.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  }

  function handleSort(e) {
    setSort(e.target.value);
    if (e.target.value == "views")
      setFilterPost((filterPost) =>
        filterPost.sort((a, b) => a.views - b.views)
      );
    else if (e.target.value == "likes")
      setFilterPost((filterPost) =>
        filterPost.sort((a, b) => a.reactions.likes - b.reactions.likes)
      );
    else if (e.target.value == "dislikes")
      setFilterPost((filterPost) =>
        filterPost.sort((a, b) => a.reactions.dislikes - b.reactions.dislikes)
      );
    else setFilterPost(posts);
  }

  return (
    <div>
      <Title text="Recently Added" />

      <div style={{ marginBottom: "20px" }}>
        <div style={{ marginBottom: "10px" }}>
          <label>Search Posts :</label>
          <input value={search} onChange={handleSearch} />
        </div>

        <div>
          <label>Sort By:</label>

          <select value={sort} onChange={handleSort}>
            <option value="default">Default</option>

            <option value="views">Views</option>
            <option value="likes">Likes</option>
            <option value="dislikes">Dislikes</option>
          </select>
        </div>
      </div>
      <div>
        {filterPost.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
}

function Post({ post, handleClick }) {
  return (
    <div
      key={post.id}
      className={styles.postCont}
      onClick={() => handleClick(post)}
    >
      <div className={styles.postImg}></div>
      <div
        className={styles.postDesc}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "400px",
        }}
      >
        <p>{post.title}</p>

        <div>
          <p>views: {post.views}</p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>Likes : {post.reactions.likes}</div>
            <div>Dislikes : {post.reactions.dislikes}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;

// import { useState } from "react";
// import styles from "./Posts.module.css";
// import Title from "./Title";

// function Posts({ posts }) {
//   if (posts.length === 0) return null;
//   const [search, setSearch] = useState("");
//   const [sort, setSort] = useState("");
//   //   let filterPost = posts;
//   const [filterPost, setFilterPost] = useState(posts);

//   function handleSearch(e) {
//     setSearch(e.target.value);
//     setFilterPost(
//       posts.filter((post) =>
//         post.title.toLowerCase().includes(e.target.value.toLowerCase())
//       )
//     );
//   }

//   function handleSort(e) {
//     setSort(e.target.value);
//     if (e.target.value == "views")
//       setFilterPost((filterPost) =>
//         filterPost.sort((a, b) => a.views - b.views)
//       );
//     else if (e.target.value == "likes")
//       setFilterPost((filterPost) =>
//         filterPost.sort((a, b) => a.reactions.likes - b.reactions.likes)
//       );
//     else if (e.target.value == "dislikes")
//       setFilterPost((filterPost) =>
//         filterPost.sort((a, b) => a.reactions.dislikes - b.reactions.dislikes)
//       );
//     else setFilterPost(posts);
//   }

//   function handleOpenPost(post) {
//     console.log(post);
//   }

//   return (
//     <div>
//       <Title text="Recently Added" />

//       <div style={{ marginBottom: "20px" }}>
//         <div style={{ marginBottom: "10px" }}>
//           <label>Search Posts :</label>
//           <input value={search} onChange={handleSearch} />
//         </div>

//         <div>
//           <label>Sort By:</label>

//           <select value={sort} onChange={handleSort}>
//             <option value="default">Default</option>

//             <option value="views">Views</option>
//             <option value="likes">Likes</option>
//             <option value="dislikes">Dislikes</option>
//           </select>
//         </div>
//       </div>
//       <div>
//         {filterPost.map((post) => (
//           <Post post={post} key={post.id} handleClick={handleOpenPost} />
//         ))}
//       </div>
//     </div>
//   );
// }

// function Post({ post, handleClick }) {
//   return (
//     <div
//       key={post.id}
//       className={styles.postCont}
//       onClick={() => handleClick(post)}
//     >
//       <div className={styles.postImg}></div>
//       <div
//         className={styles.postDesc}
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "space-between",
//           width: "400px",
//         }}
//       >
//         <p>{post.title}</p>

//         <div>
//           <p>views: {post.views}</p>
//           <div style={{ display: "flex", justifyContent: "space-between" }}>
//             <div>Likes : {post.reactions.likes}</div>
//             <div>Dislikes : {post.reactions.dislikes}</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Posts;
