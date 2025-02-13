import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import NotFound from "../NotFound/NotFound.jsx";
import posts from "../../data/posts.js";
import NavBar from "../../components/NavBar/NavBar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import './post.css'


export default function Post() {
    const { postId } = useParams();
    const post = posts.find((p) => p.id === postId);
    const [content, setContent] = useState("");

    useEffect(() => {
        if (post) {
            fetch(`/posts/${post.id}.md`)
                .then((res) => res.text())
                .then(setContent)
                .catch((err) => console.error("Error loading markdown file:", err));
        }
    }, [post]);

    if(!post)
        return <NotFound />

    return (
        <>
            <title>{ `${post.title} | Loay's Blog` }</title>
            <NavBar/>
            <div className="centerContainer">
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>
            </div>
            <Footer/>
        </>
    );
}