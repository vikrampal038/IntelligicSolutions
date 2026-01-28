import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleBlog } from "../Services/wordpress";

const BlogDetail = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    getSingleBlog(slug).then(setBlog);
  }, [slug]);

  if (!blog) return null;

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <img
        src={blog._embedded?.["wp:featuredmedia"]?.[0]?.source_url}
        className="w-full rounded-xl mb-6"
      />

      <h1
        className="text-3xl font-bold mb-6"
        dangerouslySetInnerHTML={{ __html: blog.title.rendered }}
      />

      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: blog.content.rendered }}
      />
    </article>
  );
};

export default BlogDetail;
