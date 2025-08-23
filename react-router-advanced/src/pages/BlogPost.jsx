import { useParams } from "react-router-dom";

function BlogPost() {
  const { id } = useParams();
  return (
    <div className="p-4">
      <h1>Blog Post ID: {id}</h1>
      <p>This is a dynamically rendered blog post with ID {id}.</p>
    </div>
  );
}
export default BlogPost;
