import {useNavigate, useParams} from "react-router-dom";
import {useContext} from "react";
import {BlogContext} from "../../Components/Context";
import {ArrowUturnLeftIcon} from '@heroicons/react/16/solid'
import {useAuth} from "../../Components/Context/auth";

const Index = () => {
    const {blogPosts} = useContext(BlogContext)
    const params = useParams()
    const blogPost = blogPosts.find(post => post.slug === params.slug)
    const navigate = useNavigate()
    const {user} = useAuth()

    const returnToBlog = () => {
        navigate('/blog')
    }

    return (
        <div className={'w-80'}>
            <div className={'flex items-center w-80'}>
                <button
                    className={'border rounded-xl font-thin p-1 cursor-pointer bg-blue-500 text-white m-4 flex items-center gap-x-2'}
                    onClick={() => returnToBlog()}
                >
                    <ArrowUturnLeftIcon className={'w-5'}/>
                </button>
                <h2>{blogPost.title}</h2>
            </div>
            <div className={'w-80 flex flex-col gap-y-2 p-5'}>

            <p className={'font-thin'}>Author: {blogPost.author}</p>
            <p>{blogPost.content}</p>
            </div>

            {user?.isAdmin && (
                <button className={'border '}>Delete blog</button>
            )}
        </div>
    );
};

export {Index};