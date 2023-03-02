const api = "https://jsonplaceholder.typicode.com/posts";

export const getNewsData = (limit: number) => {
  return `${api}?_limit=${limit}`;
};
