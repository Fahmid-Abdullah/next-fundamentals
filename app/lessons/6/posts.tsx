"use client";
import { useContext, useEffect, useState } from "react";
import { PostContext } from "./page";

type postProp = {
    id: number;
    title: string;
};

const Posts = () => {
    const { count, incrementCount } = useContext(PostContext);
    const [post, setPost] = useState<postProp | null>(null);

    useEffect(() => { // UseEffect
        const fetchUser = async () => {
            console.log("useEffect Initiated!");
            try {
                const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${count}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                    },
                    cache: "no-cache",
                });

                const data = await res.json();
                if (data && data.id) {
                    setPost(data);
                } else {
                    setPost(null);
                }
            } catch (err) {
                console.error("Fetch failed:", err);
                setPost(null);
            }
        };

        fetchUser();

        return () => console.log("useEffect Ended!");
    }, [count]);

    return (
        <div className="mt-8">
            {post ? (
                <div className="text-lg mb-4">
                    <h2>The title of the post is {post.title}, and the id is {post.id}</h2>
                </div>
            ) : (
                <div className="text-lg mb-4">No Post Found</div>
            )}
            <button
                className="bg-white text-black px-4 py-2 rounded-md"
                onClick={incrementCount}
            >
                Next Post
            </button>
        </div>
    );
};

export default Posts;
