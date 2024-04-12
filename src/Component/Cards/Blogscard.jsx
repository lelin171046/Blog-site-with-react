import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import placeHolderImage from '../Footer/404.jpg'




const Blogscard = ({ blog, deletable, handleDelete }) => {
	const { title, description, cover_image, published_at, id } = blog;
	
	return (
		<div className="flex relative">
			<Link to={`/blog/${id}`} className="max-w-sm mx-auto group border-2 border-primary transition hover:scale-105 border-opacity-30 hover:border-secondary  hover:no-underline focus:no-underline dark:bg-gray-50">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={cover_image || placeHolderImage} />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
					<span className="text-xs dark:text-gray-600">{new Date(published_at).toLocaleDateString()}</span>
					<p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
				</div>
			</Link>
			{deletable && <div onClick={()=>handleDelete(id)} className="absolute bg-primary p-3 rounded-full hover:scale-105 -top-5 -right-3">
				<MdDeleteForever size={20} />
				</div>}
		</div>

	)
};

export default Blogscard;