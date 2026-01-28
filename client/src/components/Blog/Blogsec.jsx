import React, { useEffect, useState } from "react";
import HomeHeading from "../../common/HomeHeading";
import { getBlogs } from "../../Services/wordpress";
import { Link } from "react-router-dom";




const Blogsec = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getBlogs().then(setBlogs);
  }, []);
  return (
    <section className="topmain py-20">
      <div className="main w-full ">
        <div className=" w-full flex flex-col justify-center items-center gap-14">
          {/* Heading Section */}
          <HomeHeading
            mainHeading="Behind the Code: Ideas, Innovation & Tech"
            subHeading="Discover key trends and expert advice on building scalable web and mobile applications."
          />

          <div className="w-full px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {blogs.map((blog) => (
              <Link
                key={blog.id}
                to={`/blog/${blog.slug}`}
                className="border rounded-xl overflow-hidden hover:shadow-lg transition"
              >
                <img
                  src={blog._embedded?.["wp:featuredmedia"]?.[0]?.source_url}
                  alt={blog.title.rendered}
                  className="h-48 w-full object-cover "
                />

                <div className="p-4">
                  <h2
                    className="subHeading font-semibold leading-8"
                    dangerouslySetInnerHTML={{ __html: blog.title.rendered }}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogsec;
