import { useEffect, useState } from "react";

const HomePage = () => {

    const [posts, setPosts] = useState([]);

    const [isRed, setIsRed] = useState(false);

    const handleLike = () => {
        setIsRed(!isRed)
    }

    useEffect(() => {

        async function fetchPosts() {
            const fetchPost = await fetch("https://dummyjson.com/posts")
            const postJson = await fetchPost.json();

            setPosts(postJson.posts)
        }
        fetchPosts()

    }, []);


    const blogPostTemplete = posts.map((post) => {
        return (
            <div className="bg-white p-10 rounded flex items-center space-x-10 shadow" key={post.id}>
                <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="React Logo" className="w-28" />

                <div className="space-y-1">
                    <h4 className="text-xl font-semibold">{post.title}</h4>
                    <p>{post.body}</p>
                    <div className="flex items-center gap-x-2 my-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="1.5em" viewBox="0 0 48 48" onClick={handleLike}><path fill={isRed ? "red" : "white"} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326C31 40 44 30 44 19c0-6.075-4.925-11-11-11c-3.72 0-7.01 1.847-9 4.674A10.99 10.99 0 0 0 15 8"></path></svg>
                        {post.reactions.likes}

                        {post.tags.map((tag, index) => {
                            return <div key={`tags-${tag}-${index}`} className="px-2 py-0 rounded bg-green-500 text-white">{tag}</div>
                        })}

                    </div>
                </div>
            </div>
        )
    })
    return (
        <div className="m-10 space-y-5">
            <h4 className="text-2xl font-semibold">Welcome to My Blog</h4>
            {blogPostTemplete}
        </div>
    )
};

export default HomePage;