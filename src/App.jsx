import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Posts from "./components/Posts";
import Author from "./components/Author";
import styles from "./App.module.css";
import { BrowserRouter, Route, Routes } from "react-router";
import PostEl from "./components/PostEl";

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
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {" "}
              <NavBar />
              <main className={styles.main}>
                <Posts posts={posts} />
                <Author />
              </main>
            </>
          }
        ></Route>
        <Route path="/post/:id" element={<PostEl posts={posts} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
