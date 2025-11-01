import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import User from "./components/User";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/users" element={<User />} />
                </Routes>
            </Router>
        </Provider>
    );
}

export default App;