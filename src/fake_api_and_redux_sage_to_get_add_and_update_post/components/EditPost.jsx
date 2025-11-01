import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostById, updatePost } from "../redux/actions";
import { useNavigate, useParams } from "react-router-dom";

export default function EditPost() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { post } = useSelector(state => state);

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    useEffect(() => {
        dispatch(fetchPostById(id));
    }, [dispatch, id]);

    useEffect(() => {
        if (post) {
            setTitle(post.title || "");
            setContent(post.body || "");
        }
    }, [post]);

    const handleSave = () => {
        dispatch(updatePost(id, { title, body: content }));
        navigate("/");
    };

    return (
        <div style={{ padding: "30px" }}>
            <h2>Edit Post</h2>
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
                    onClick={handleSave}
                >
                    Save
                </button>
            </div>
        </div>
    );
}