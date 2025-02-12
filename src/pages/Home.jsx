import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import PostCard from "../components/PostCard";
import posts from "../data/posts.js";

export default function Home() {
    return (
        <>
            <NavBar />
            <div className="mainHomeContainer">
                <div className="welcomeTitle align-self-center  text-center">
                    <h1 className="mb-3">Welcome to My Blog</h1>
                    <h5>Sharing thoughts on tech, coding, and open source.</h5>
                </div>
                <h2 className="rec">Recent Posts</h2>
                {posts.map((post) => (
                    <PostCard post={post} key={post.id} />
                ))}
            </div>
            <Footer/>
        </>
    )
}