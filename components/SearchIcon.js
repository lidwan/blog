"use client"

import {useEffect, useState} from "react";
import posts from "@/lib/posts";
import PostCard from "./PostCard";
import { usePathname } from 'next/navigation'


// this is probably overengineered but hey, it works.
export default function SearchIcon() {
    const [userInput, setUserInput] = useState("");
    const [filteredPosts, setFilteredPosts] = useState([]);      
    const pathname = usePathname()

    useEffect(() => {
        function handleUrlChange() {
            hideOverLayAndRest();
        }
        handleUrlChange()
    }, [pathname])
    
    useEffect (() => {
        document.querySelector(".searchIconContainer").addEventListener("click", handleSearchIconClick);
    })

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
        setUserInput("");
        setFilteredPosts([]);
    }

    return (
        <>
<div className={"search-container-overlay p-[5vh]"}>
    <div className={"mt-[2vh] flex flex-col gap-6 justify-center items-center"}>
        <p className={"self-center"}>
            If you wish to exit the search press the Esc key,<br />
            Or click the exit button below.
        </p>
        <div className={"w-[100%] flex justify-center"}>
            <button className={"overlayExitButton p-[8px] rounded-lg bg-[#42428a] hover:bg-[#5353ad] text-lg"}>
                Exit search
            </button>
        </div>
        <input
            type="text"
            placeholder="Please enter your search query"
            onInput={handleUserInput}
            value={userInput}
            className={"inputField text-black"}
        />
        <div className={"pb-[5vh] flex flex-col w-full max-h-[60vh] overflow-y-auto"}>
            {filteredPosts.map((post) => (
                <div className={"sm:max-w-[85%] xl:w-[50%]  self-center p-8"} key={post.id}>
                    <PostCard post={post} />
                </div>
            ))}
        </div>
    </div>
</div>

            <div className="searchIconContainer">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                     className="searchIcon" viewBox="0 0 16 16" onClick={handleSearchIconClick}>
                    <path
                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>
            </div>
        </>
    )
}