import {useParams} from "react-router-dom";
import {useContext} from "react";
import {BlogContext} from "../../Components/Context";

const BlogPost = () => {
    const {blogPosts} = useContext(BlogContext)
    const params = useParams()
    const blogPost = blogPosts.find(post => post.slug === params.slug)

    return (
        <div className={'w-80'}>
            <h2>{blogPost.title}</h2>
            <p>Author: {blogPost.author}</p>
            <p>{blogPost.content}</p>
        </div>
    );
};

export {BlogPost};