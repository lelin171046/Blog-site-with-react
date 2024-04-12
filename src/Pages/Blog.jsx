import { FaBookmark } from "react-icons/fa6";

import { useState } from 'react';
import { Link, Outlet, useLoaderData, } from 'react-router-dom';
import { saveBlog } from "../utilites";

const Blog = () => {
	const [tab, setTab] = useState([])

	const blog = useLoaderData();
	const { title, public_reactions_count, description, cover_image, published_at, created_at, id, reading_time_minutes, comments_count, tags } = blog

	const handleBookmarks = blog => {
		saveBlog(blog)
	}
	return (

		<div>
			<div className="max-w-2xl px-6 py-16 mx-auto space-y-12">
				<article className="space-y-8 dark:bg-gray-100 dark:text-gray-900">
					<div className="space-y-6">
						<h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">{blog.title}.</h1>
						<div className="flex  items-start justify-between w-full md:flex-row md:items-center dark:text-gray-600">


							<p className="text-sm">{reading_time_minutes}  min read {''} • {new Date(published_at).toLocaleDateString()}</p>

							<p className="flex-shrink-0 mt-3 text-sm md:mt-0">{comments_count} Comments • {public_reactions_count} views</p>
						</div>

						<div className="flex items-start -mx-4 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap dark:bg-gray-100 dark:text-gray-800">
							<Link to={''} onClick={() => setTab(0)} className={`flex items-center flex-shrink-0 px-5 py-3 ${tab === 0 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
									<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
								</svg>
								<span>Content</span>
							</Link>
							<Link to={`author`} onClick={() => setTab(1)} className={`flex items-center flex-shrink-0 px-5 py-3 ${tab === 1 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
									<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
									<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
								</svg>
								<span>Author</span>
							</Link>
							<div onClick={()=> handleBookmarks(blog)} className="p-3 ml-5 hover:scale-125 bg-opacity-20 cursor-pointer hover:bg-opacity-30">
							<FaBookmark size={20} />
							</div>
						</div>
					</div>
					
					<Outlet></Outlet>
				</article>

				{/* Bookmarks icons  */}
				
			</div>
		</div>
	);
};

export default Blog;