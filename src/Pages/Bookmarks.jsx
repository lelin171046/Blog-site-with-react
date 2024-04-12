import { useEffect, useState } from "react";
import Blogscard from "../Component/Cards/Blogscard";
import { getBlogs, deleteBlog} from "../utilites";
import Emtystate from "../EmtyBook/Emtystate";



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

    if(blogs.length < 1 ) return <div className="flex flex-col justify-center items-center  min-h-[calc(100vh-116px)]">No Bookmark found</div>  
    return (
        <div className="grid px-4 sm:px-8 lg:px-12 py-8 justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{
				blogs.map(blogs=> <Blogscard handleDelete={handleDelete} deletable={true} blog={blogs} key={blogs.id}></Blogscard>)
			}
			
		</div>
        
    );
};

export default Bookmarks;