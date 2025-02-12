import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import PostCard from "../components/PostCard.jsx";


function Home() {
    return (
        <>
            <NavBar />
            <div className="mainHomeContainer">
                <PostCard/>
            </div>
            <Footer/>
        </>
    )
}

export default Home
