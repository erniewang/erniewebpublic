import { sampleBlogs, type BlogPost } from "./sampleBlogs";
import { useState,useEffect } from "react";

//the entry for a componet
interface BlogEntryProps {
  entry: BlogPost;
  onClick?: () => void; // optional prop example
}

// 3) A BlogEntry renders a single post
function BlogEntry({ entry, onClick }: BlogEntryProps) {
  const { title, date, contentPreview } = entry;

  return (
    <article
      className="w-full bg-black/70 text-white rounded-md p-4 hover:blur-[0.1px] blur-[1px] transition"
      onClick={onClick}
      role="button"
    >
      <h2 className="text-xl font-bold">{title}</h2>
      <time className="text-sm text-gray-300">{date}</time>
      <div className="mt-2">{contentPreview}</div>
    </article>
  );
}

interface BlogProps {
  posts?: BlogPost[];
}

export default function Blog({ posts = sampleBlogs }: BlogProps) {
  const [selectedPost,setSelectedPost] = useState(-1);

  useEffect(() => {
  }, [selectedPost]);

  return (
    <div className="fixed top-0 w-screen h-[92vh] bg-gray-800 md:top-[8vh] flex flex-col md:flex-row justify-center items-center p-0 bg-gradient-to-b from-slate-600 to-gray-800">
      <div className="lg:w-3/4 bg-gray-500 h-full flex flex-col items-start justify-start p-4 w-full overflow-y-scroll gap-3 bg-gradient-to-r from-slate-900 to-slate-700 text-white">
        {(selectedPost != -1) && 
            <div className="w-full h-auto bg-black rounded-lg p-5 flex flex-col items-start justify-start"
            onClick={() => {setSelectedPost(-1)}}>
                <p className="text-3xl font-bold">{posts[selectedPost].title}</p>
                <time className="text-lg text-gray-300">{posts[selectedPost].date}</time>
                <div className="mt-2">
                    {posts[selectedPost].contentPreview}
                    {posts[selectedPost].contentRest}
                </div>
            </div>}
        {(selectedPost === -1 ) && <p className="text-3xl font-bold">Recent Posts By Ernie</p>}
        {(selectedPost === -1 ) && posts.map((post, idx) => (
            <BlogEntry
              key={post.title + idx}
              entry={post}
              onClick={() => setSelectedPost(idx)}
            />
        ))}
      </div>
    </div>
  );
}

/** Example usage:
// Use default sample blogs
<Blog />

// Or pass custom posts
<Blog posts={customPosts} />
*/
