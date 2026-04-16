import { useEffect, useState } from "react";

const useGetUserById = (userId) => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    // fetch users
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        const foundUser = users.find((u) => u.id === userId);
        setUser(foundUser);
      })
      .catch(() => setError("Error fetching user"));

    // fetch posts
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((allPosts) => {
        const userPosts = allPosts.filter(
          (post) => post.userId === userId
        );
        setPosts(userPosts);
      })
      .catch(() => setError("Error fetching posts"))
      .finally(() => setLoading(false));
  }, [userId]);

  return { user, posts, loading, error };
};

export default useGetUserById;