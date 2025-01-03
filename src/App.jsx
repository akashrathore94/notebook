import { useEffect, useState } from "react";
import NavBar from "./assets/components/NavBar";
import Posts from "./assets/components/Posts";
import Author from "./assets/components/Author";
import styles from "./App.module.css";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(function () {
    async function fetchPosts() {
      const res = await fetch("https://dummyjson.com/posts");
      const data = await res.json();
      setPosts(data.posts);
    }

    fetchPosts();
  }, []);

  return (
    <>
      <NavBar />
      <main className={styles.main}>
        <Posts posts={posts} />
        <Author />
      </main>
    </>
  );
}

export default App;
