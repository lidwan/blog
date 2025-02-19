import {useParams, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import NotFound from "../NotFound/NotFound.jsx";
import posts from "../../data/posts.js";
import NavBar from "../../components/NavBar/NavBar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import './post.css'
import PostedOn from "../../components/PostedOn.jsx";
import UpdatedOnAndTags from "../../components/UpdatedOnAndTags.jsx";


export default function Post() {
    const { postId } = useParams();
    const post = posts.find((p) => p.id === postId);
    const [content, setContent] = useState("");
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    useEffect(() => {
        if (post) {
            fetch(`/posts/${post.id}.md`)
                .then((res) => res.text())
                .then(setContent)
                .catch((err) => console.error("Error loading markdown file:", err));
        }
    }, [post]);

    //runs on post change
    useEffect(() => {
        if (post){
            // changing the page title
            document.querySelector("title").innerHTML =`${post.title} | Loay's Blog`;

            const jsonLd = {
                "@context": "https://schema.org",
                "@type": "Article",
                "headline": post.title,
                "description": post.description,
                "author": {
                    "@type": "Person",
                    "name": "Loay Idwan"
                },
                "publisher": {
                    "@type": "Person",
                    "name": "Loay's Blog",
                    "url": "https://blog.loayidwan.com"
                },
                "datePublished": post.dateCreated,
                "dateModified": post.dateModified,
                "url": `https://blog.loayidwan.com/#/posts/${post.id}`,
            };
            // removing the old json-ld-script and replacing it by a new one for this post
            const oldJsonLd = document.getElementById("json-ld-script");
            if (oldJsonLd) {
                oldJsonLd.remove();
            }

            // inserting the new json-ld-script
            const script = document.createElement("script");
            script.type = "application/ld+json";
            script.id = "json-ld-script";
            script.textContent = JSON.stringify(jsonLd);
            document.head.appendChild(script);
        }
    }, [post])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if(!post)
        return <NotFound />


    return (
        <>
            <NavBar/>
            <div className="centerContainer">
                <PostedOn date={post.dateCreated}/>
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>
                <UpdatedOnAndTags date={post.dateModified} tags={post.tags.join(", ")} />
            </div>
            <div className="scrollUpButtonContainer">
                <button type="button" className="btn btn-dark" onClick={scrollToTop}>Scroll back up?</button>
            </div>
            <Footer/>
        </>
    );
}