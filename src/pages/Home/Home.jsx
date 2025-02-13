import NavBar from "../../components/NavBar/NavBar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import PostCard from "../../components/PostCard/PostCard.jsx";
import posts from "../../data/posts.js";
import './home.css'

export default function Home() {
    return (
        <>
            <NavBar />
            <div className="centerContainer">
                <div className="align-self-center  text-center">
                    <h1 className="welcomeToBlog">Welcome to My Blog</h1>
                    <h5 className="sharing">Sharing thoughts on tech, coding, and open source.</h5>
                </div>
                <h2 className="recents">Recent Posts</h2>
                {posts.map((post) => (
                    <PostCard post={post} key={post.id} />
                ))}
            </div>
            <Footer/>
        </>
    )
}