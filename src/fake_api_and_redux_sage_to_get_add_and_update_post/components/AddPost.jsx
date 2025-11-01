import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../redux/actions";
import { useNavigate } from "react-router-dom";

export default function AddPost() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAdd = () => {
        dispatch(addPost({ title, body: content }));
        navigate("/");
    };

    return (
        <div style={{ padding: "30px" }}>
            <h2>New Post</h2>
            <div style={{ marginTop: "20px" }}>
                <label>Title</label>
                <input
                    style={{ width: "100%", padding: "8px", marginTop: "8px" }}
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <label style={{ marginTop: "15px", display: "block" }}>Content</label>
                <textarea
                    rows="5"
                    style={{ width: "100%", padding: "8px", marginTop: "8px" }}
                    value={content}
                    onChange={e => setContent(e.target.value)}
                ></textarea>
                <button
                    style={{
                        marginTop: "20px",
                        background: "green",
                        color: "white",
                        padding: "10px 20px",
                        borderRadius: "6px",
                    }}
                    onClick={handleAdd}
                >
                    Add
                </button>
            </div>
        </div>
    );
}