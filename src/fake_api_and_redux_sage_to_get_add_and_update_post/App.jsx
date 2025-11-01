import { Routes, Route } from "react-router-dom";
import PostList from "./components/PostList";
import AddPost from "./components/AddPost";
import EditPost from "./components/EditPost";

function App() {
    return (
        <Routes>
            <Route path="/" element={<PostList />} />
            <Route path="/add" element={<AddPost />} />
            <Route path="/edit/:id" element={<EditPost />} />
        </Routes>
    );
}

export default App;