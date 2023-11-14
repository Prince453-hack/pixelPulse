import { useEffect, useState } from "react";
import Post from "./Post";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setPosts(snapshot.docs);
      }
    );

    return unsubscribe;
  }, [db]);

  return (
    <div>
      {posts.map((posts) => (
        <Post
          key={posts.id}
          id={posts.id}
          username={posts.data().username}
          userImg={posts.data().profileImg}
          img={posts.data().image}
          caption={posts.data().caption}
        />
      ))}
    </div>
  );
}
