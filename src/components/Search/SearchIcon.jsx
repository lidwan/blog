import {useEffect, useState} from "react";
import posts from "../../data/posts.js";
import PostCard from "../PostCard/PostCard.jsx";
import './searchIcon.css'
import { useLocation } from 'react-router-dom';


// this is probably overengineered but hey, it works.
export default function SearchIcon() {
    const [userInput, setUserInput] = useState("");
    const [filteredPosts, setFilteredPosts] = useState([]);
    const location = useLocation();

    useEffect(() => {
        if (document.querySelector('.search-container-overlay').classList.contains('active'))
            hideOverLayAndRest();
    }, [location]);

    const handleSearchIconClick = () => {
        document.querySelector('.search-container-overlay').classList.add('active');
        window.addEventListener("keydown", handleKeyDown);
        document.querySelector(".overlayExitButton").addEventListener(
            "click",
            hideOverLayAndRest
        );
        document.body.classList.add("no-scroll");
        document.querySelector(".inputField").focus();
    }

    const handleUserInput = (e) => {
        const tmpUserInput = e.target.value.toLowerCase();
        setUserInput(tmpUserInput);

        setFilteredPosts(posts.filter((post) => {
            return post.title.toLowerCase().includes(tmpUserInput) || post.description.toLowerCase().includes(tmpUserInput)
        }))
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
            hideOverLayAndRest();
        }
    }

    const hideOverLayAndRest = () => {
        document.querySelector('.search-container-overlay').classList.remove('active');
        window.removeEventListener("keydown", handleKeyDown);
        document.querySelector(".overlayExitButton").removeEventListener(
            "click",
            hideOverLayAndRest
        )
        document.body.classList.remove("no-scroll")
        document.querySelector(".navbar-toggler").classList.add("collapsed");
        document.querySelector(".navbar-collapse").classList.remove("show")
        setUserInput("");
        setFilteredPosts([]);
    }

    return (
        <>
            <div className="search-container-overlay">
                <div className="centerContainer">
                    <p className="ifYouWishParagraph">
                        If you wish to exit the search press the Esc key,<br/>
                        Or click the exit button below.
                    </p>
                    <button className="btn overlayExitButton">Exit search</button>
                    <input type="text"
                           placeholder="Please enter your search query"
                           onInput={handleUserInput}
                           value={userInput}
                           className="inputField"
                    />
                    {filteredPosts.map((post) => (
                        <PostCard post={post} key={post.id} />
                    ))}
                </div>
            </div>
            <li className="nav-item searchIconContainer">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                     className="bi bi-search searchIcon" viewBox="0 0 16 16" onClick={handleSearchIconClick}>
                    <path
                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>
            </li>
        </>
    )
}