import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
    const [user, setUser] = useState({ username: "", password: "" });
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userlogined = useSelector((state) => state.userlogined);
    const loginError = useSelector((state) => state.loginError);

    const setValueForUser = (key, value) => {
        // Xóa thông báo lỗi khi người dùng bắt đầu nhập lại
        if (loginError) {
            dispatch({ type: "CLEAR_LOGIN_ERROR" });
        }
        setUser({ ...user, [key]: value });
    };

    const login = () => {
        dispatch({ type: "LOGIN", payload: user });
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

                {loginError && (
                    <div className="error-message">
                        ❌ {loginError}
                    </div>
                )}

                <div className="form-group">
                    <label>Tên đăng nhập</label>
                    <input
                        type="text"
                        placeholder="Nhập tên đăng nhập"
                        onChange={(e) => setValueForUser("username", e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Mật khẩu</label>
                    <input
                        type="password"
                        placeholder="Nhập mật khẩu"
                        onChange={(e) => setValueForUser("password", e.target.value)}
                    />
                </div>

                <button className="login-button" onClick={login}>
                    Đăng nhập
                </button>

                <div className="demo-info">
                    💡 Sử dụng: admin / letmein
                </div>
            </div>
        </div>
    );
}

export default Login;