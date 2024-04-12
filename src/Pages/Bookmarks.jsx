import { useEffect, useState } from "react";
import Blogscard from "../Component/Cards/Blogscard";
import { getBlogs, deleteBlog} from "../utilites";
import Emtystate from "../EmtyBook/Emtystate";
import { Link } from "react-router-dom";



const Bookmarks = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
        const storedBlogs = getBlogs()
        setBlogs(storedBlogs)
    },[])

    const  handleDelete = id =>{
		deleteBlog(id)
        const storedBlogs = getBlogs()
        setBlogs(storedBlogs)
	}

    if(blogs.length < 1 ) return <div className="flex flex-col gap-5 justify-center items-center  min-h-[calc(100vh-116px)]"> <h2>No Bookmark found</h2>
    <Link to='/blogs' className="relative inline-block px-4 py-2 font-medium group">
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover bg-yellow-100"></span>
                <span className="relative text-black group-hover:text-black">Read Blogs</span>
              </Link></div>  
    return (
        <div className="grid px-4 sm:px-8 lg:px-12 py-8 justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{
				blogs.map(blogs=> <Blogscard handleDelete={handleDelete} deletable={true} blog={blogs} key={blogs.id}></Blogscard>)
			}
			
		</div>
        
    );
};

export default Bookmarks;