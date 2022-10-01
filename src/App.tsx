import { useState } from "react";
import { Posts } from "./components";
import { getPosts } from "./fake-api";

export const App = () => {
  const [search, setSearch] = useState("");

  const filteredPosts = getPosts().filter((post) => post.includes(search));

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={handleSearchChange}
        placeholder="search"
      />
      <Posts posts={filteredPosts} />
    </div>
  );
};

export default App;
