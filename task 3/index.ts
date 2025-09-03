const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const getData = (url: string): Promise<Comment[]> =>
  fetch(url).then((res) => res.json());

getData(COMMENTS_URL).then((data) => {
  console.log(data.map((d) => ({ ID: d.postId, Email: d.email })));
});