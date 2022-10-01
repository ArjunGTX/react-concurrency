export const getPosts = () => {
  return Array.from(
    {
      length: 10000,
    },
    (_, k) => `Post ${k + 1}`
  );
};