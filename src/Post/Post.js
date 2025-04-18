import React, { useEffect, useState } from "react";

const Post = () => {


const url =  "http://20.244.56.144/evaluation-service/:userid/posts ";

const [posts, setPost] = useState([]);

return (
    <>
        <h2 align="center">Search by the username</h2>
        <SearchBar posts={posts} setPost={setPost} />

        <ul>
            {posts.map((post) => (
                <li key={post.id}>
                    <h3>{post.user.username}</h3>
                    <p>{post.content}</p>
                </li>
            ))}
        </ul>
    </>
);
};
export default Post;



const SearchBar = ({ posts }) => {
  const [searchTerm, setSearchTerm] = useState("");
  

  const handlerSearch = () => {
fetch(`http://20.244.56.144/evaluation-service/${searchTerm}/posts`)
  .then((response) => response.json())
  .then((data) => {
    const filteredPosts = data.posts || [];
    setPost(filteredPosts);
  })
  .catch((error) => console.error("Error fetching posts:", error));
    
  };

  return (
    <div align="center">
      <input
        type="text"
        placeholder="Search by username"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handlerSearch}>Search</button>
      <div>
        {filteredPosts.map((post) => (
          <div key={post.id}>
            <h3>{post.user.username}</h3>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export { SearchBar };
