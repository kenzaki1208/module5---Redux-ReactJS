import { useSelector } from "react-redux";
import "./User.css";

function User() {
    const users = useSelector((state) => state.users);

    return (
        <div className="user-container">
            <div className="user-content">
                <h2 className="user-title">📋 Danh sách người dùng</h2>

                <div className="table-container">
                    <table className="user-table">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>👤 Tên</th>
                            <th>📧 Email</th>
                            <th>🌐 Website</th>
                        </tr>
                        </thead>
                        <tbody>
                        {users.map((u) => (
                            <tr key={u.id}>
                                <td>{u.id}</td>
                                <td>{u.username}</td>
                                <td>{u.email}</td>
                                <td>{u.website}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

                {users.length === 0 && (
                    <div className="no-data">
                        🔍 Chưa có dữ liệu người dùng
                    </div>
                )}
            </div>
        </div>
    );
}

export default User;