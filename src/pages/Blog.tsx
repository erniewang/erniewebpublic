const Blog = () => {
  return (
    <div className="fixed top-0 w-screen h-[92vh] bg-gray-800 md:top-[8vh] flex flex-col md:flex-row justify-center items-center p-0 bg-gradient-to-b from-slate-600 to-gray-800">
        <div className="bg-gradient-to-r from-slate-500 to-slate-800 lg:w-3/4 bg-gray-500 h-full items-start justify-start p-4 w-full overflow-y-scroll bg-gradient-to-r from-slate-900 to-slate-700 text-white">
        <p className="text-3xl"><b>Recent Posts By Ernie</b></p>
        </div>
    </div>
  );
};

export default Blog;