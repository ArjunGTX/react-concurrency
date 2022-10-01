import React, { useDeferredValue } from "react";

interface Props {
  posts: string[];
}

export const Posts: React.FC<Props> = ({ posts }) => {
  const deferredPosts = useDeferredValue(posts);
  
  return (
    <ul>
      {deferredPosts.map((post) => (
        <li key={post}>{post}</li>
      ))}
    </ul>
  );
};
