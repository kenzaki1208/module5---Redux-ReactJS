import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fakeLogin } from "../redux/action";
import "../styles/Login.css";

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userlogined = useSelector((state) => state.userlogined);
    const [user, setUser] = useState({ username: "", password: "" });

    const setValueForUser = (key, value) => {
        setUser({ ...user, [key]: value });
    };

    const login = () => {
        dispatch(fakeLogin(user));
    };

    useEffect(() => {
        if (userlogined.username) {
            navigate("/users");
        }
    }, [userlogined, navigate]);

    return (
        <div className="login-container">
            <div className="login-form">
                <h2>🔐 Đăng nhập</h2>
                <div className="form-group">
                    <label>Tên đăng nhập</label>
                    <input
                        type="text"
                        onChange={(e) => setValueForUser("username", e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Mật khẩu</label>
                    <input
                        type="password"
                        onChange={(e) => setValueForUser("password", e.target.value)}
                    />
                </div>
                <button className="login-button" onClick={login}>Login</button>
            </div>
        </div>
    );
}

export default Login;