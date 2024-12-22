import blogPosts from "../data/blog.json";

const HomePage = () => {

    const blogPostTemplete = blogPosts.map((post) => {
        return (
            <div className="bg-white p-10 rounded flex items-center space-x-10 shadow">
                <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="React Logo" className="w-28" />

                <div className="space-y-1">
                    <h4 className="text-xl font-semibold">{post.title}</h4>
                    <p>{post.desc}</p>
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