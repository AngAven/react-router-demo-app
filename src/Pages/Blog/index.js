import {Link, Outlet} from "react-router-dom";
import {generatePosts} from "../../fake/posts";
import {useContext, useState} from "react";
import {BlogContext} from "../../Components/Context";

const Blog = () => {
    const {blogPosts} = useContext(BlogContext)

    return (
        <>
            <h1 className={'font-extrabold text-center my-4'}>Blog Entries</h1>
            <Outlet/>
            <div className={'flex flex-col items-center gap-y-5'}>
                {blogPosts.map((post) => (
                    <BlogLink
                        key={post.uid}
                        uid={post.uid}
                        title={post.title}
                        slug={post.slug}
                        content={post.content}
                        author={post.author}
                    />
                ))}
            </div>
        </>
    )
}
const BlogLink = ({slug, title, content, author}) => {
    return (
        <li className={'list-none border rounded-2xl flex flex-col w-100'}>
            <Link to={`/blog/${slug}`}>
            <div className={'p-2'}>
                <h3 className={'font-bold'}>
                   - {title} -
                </h3>
                <p className={'w-80 text-ellipsis overflow-hidden whitespace-nowrap'}>{content}</p>
                <span className={'font-thin'}>{author}</span>
            </div>
            </Link>
        </li>
    )
}

export {Blog};