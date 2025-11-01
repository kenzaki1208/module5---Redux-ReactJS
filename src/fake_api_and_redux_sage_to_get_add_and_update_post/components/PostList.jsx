import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/actions";
import { useNavigate } from "react-router-dom";

export default function PostList() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { posts, loading } = useSelector(state => state);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;

    return (
        <div style={{ padding: "30px" }}>
            <h2>Post</h2>
            <button
                style={{
                    background: "green",
                    color: "#fff",
                    padding: "8px 15px",
                    borderRadius: "6px",
                    cursor: "pointer",
                    float: "right",
                }}
                onClick={() => navigate("/add")}
            >
                Add new Post
            </button>

            {posts.slice(0, 5).map(post => (
                <div
                    key={post.id}
                    style={{
                        border: "1px solid #ddd",
                        borderRadius: "10px",
                        padding: "15px",
                        marginTop: "20px",
                        boxShadow: "0 0 6px rgba(0,0,0,0.1)",
                    }}
                >
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                    <button
                        style={{
                            background: "#007bff",
                            color: "white",
                            border: "none",
                            padding: "8px 12px",
                            borderRadius: "5px",
                        }}
                        onClick={() => navigate(`/edit/${post.id}`)}
                    >
                        Edit
                    </button>
                </div>
            ))}
        </div>
    );
}