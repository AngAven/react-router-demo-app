import {createContext, useEffect, useState} from "react";
import {generatePosts} from '../../fake/posts'
import axios from "axios";

const BlogContext = createContext(null)

const BlogProvider = ({children}) => {
    const [blogPosts, setBlogPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setIsLoading(true)
                const {data} = await axios.get('https://my.api.mockaroo.com/posts.json?key=d48cf750')

                setBlogPosts(data)
                setIsLoading(false)
            } catch (error) {
                console.log('Fetching error blog posts: ', error)
                setError(error)
                setIsLoading(false)
                setBlogPosts(generatePosts(100))
            }
        }

        fetchPosts().then()
    }, []);

    return (
        <BlogContext.Provider value={{
            blogPosts,
            setBlogPosts,
        }}>
            {children}
        </BlogContext.Provider>
    )
}

export {
    BlogContext,
    BlogProvider,
}