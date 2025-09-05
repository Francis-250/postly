import React, { useEffect, useState } from "react";
import axios from "axios";
import DOMPurify from "dompurify";

export default function SinglePost() {
  const [post, setPost] = useState([]);

  const getPost = async () => {
    try {
      const response = await axios.get("https://jsonfakery.com/blogs");
      setPost(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div className="mt-3 p-2 sm:px-[2vw] md:px-[4vw] lg:px-[9vw] max-w-4xl mx-auto">
      {post.slice(4, 5).map((item) => (
        <div key={item.id} className="flex flex-col gap-4">
          <div className="flex justify-between items-center py-4 border-b border-gray-100">
            <div className="flex gap-3 items-center">
              <img
                src={item.user.profile_pic}
                alt="author"
                className="h-12 w-12 rounded-full object-cover border-2 border-white shadow-sm"
              />
              <div className="flex flex-col">
                <p className="text-sm font-medium text-gray-800">
                  {item.user.role}
                </p>
                <p className="text-xs text-gray-500">{item.created_at}</p>
              </div>
            </div>
            <button className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
              Share
            </button>
          </div>

          <div className="py-4">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 leading-tight">
              {item.title}
            </h1>
            <p className="text-lg text-gray-600 font-medium">{item.subtitle}</p>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg my-2">
            <img
              src={item.featured_image}
              alt=""
              className="w-full h-auto object-cover"
            />
          </div>

          <article className="prose prose-lg max-w-none">
            <div className="bg-blue-50 p-6 mb-6 rounded-xl border-l-4 border-blue-500">
              <h1 className="font-bold text-lg text-gray-900 mb-2">Summary</h1>
              <p className="text-gray-700">{item.summary}</p>
            </div>
            <div
              className="prose prose-gray max-w-none"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(item.main_content),
              }}
            />
          </article>

          <div className="py-6 border-t border-gray-100 mt-4 flex justify-center">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors">
              Read More Articles
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
