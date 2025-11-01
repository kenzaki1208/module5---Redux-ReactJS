import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, deleteUser } from "../redux/action";

export default function UserList() {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);

    return (
        <div style={{ padding: "20px" }}>
            <h1>User list</h1>
            <button onClick={() => dispatch(getUsers())}>Get users</button>

            <table border="0" cellPadding="10" style={{ marginTop: "20px" }}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Website</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((u) => (
                        <tr key={u.id}>
                            <td>{u.id}</td>
                            <td>{u.name}</td>
                            <td>{u.email}</td>
                            <td>{u.website}</td>
                            <td>
                                <button onClick={() => dispatch(deleteUser(u.id))}>
                                    Delete user
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}