import React, {
    useState,
    useEffect,
    isValidElement,
    type ReactNode,
    type HTMLAttributes,
  } from "react";
  import { sampleBlogs, type BlogPost } from "./sampleBlogs";
  //importing a type means it is importing the type so can make instances of it 
  //or create objects that accept that exact instance
  
  interface BlogEntryProps extends HTMLAttributes<HTMLElement> {
    entry: BlogPost;
  }
  //extends so means that BlogEntryProps is a extension? like it is now a supserset of HTMLelement?
  
  function BlogEntry({ entry, ...rest }: BlogEntryProps) {
    const { title, date, contentPreview } = entry;
    
    return (
      <article
        className="w-full bg-black/70 text-white rounded-md p-4 hover:blur-[2.1px] transition"
        role="button"
        tabIndex={0}
        {...rest}
      >
        <h2 className="text-xl font-bold">{title}</h2>
        <time className="text-sm text-gray-300">{date}</time>
        <div className="mt-2">{contentPreview}</div>
      </article>
    );
  }
  
  interface ProjectsProps {
    posts?: BlogPost[];
  }
  
  export default function Projects({ posts = sampleBlogs }: ProjectsProps) {
    const [selectedPost, setSelectedPost] = useState<number>(-1);
  
    useEffect(() => {
      // You can react to selectedPost changes here if needed
    }, [selectedPost]);
  
    const isList = selectedPost === -1;
    const selected = posts[selectedPost];
  
    return (
      <div className="fixed top-0 w-screen h-[92vh] bg-gray-800 md:top-[8vh] flex flex-col md:flex-row justify-center items-center p-0 bg-gradient-to-b from-slate-600 to-gray-800">
        <div className="lg:w-3/4 bg-gray-500 h-full flex flex-col items-start justify-start p-4 w-full overflow-y-scroll gap-3 bg-gradient-to-r from-slate-900 to-slate-700 text-white">
          {!isList && selected && (
            <div
              className="w-full h-auto bg-black rounded-lg p-5 flex flex-col items-start justify-start cursor-pointer"
              onClick={() => {
                setSelectedPost(-1);
              }}
            >
              <p className="text-3xl font-bold">{selected.title}</p>
              <time className="text-lg text-gray-300">{selected.date}</time>
              <div className="mt-2">
                {selected.contentPreview}
                {selected.contentRest}
              </div>
            </div>
          )}
  
          {isList && <p className="text-3xl font-bold">Recent Projects By Ernie</p>}
  
          {isList &&
            posts.map((post, idx) => (
              <BlogEntry
                key={post.title + idx}
                entry={post}
                onClick={() => setSelectedPost(idx)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setSelectedPost(idx);
                }}
              />
            ))}
        </div>
      </div>
    );
  }
  
  /** Example usage:
  <Projects />
  // Or:
  <Projects posts={customPosts} />
  */
  