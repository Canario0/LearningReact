import React, { ReactElement } from "react";
import User from "../entities/User";
import "./UserTree.css";

interface Props {
    users: User[];
}

export default function UserTree({ users }: Props): ReactElement {
    return (
        <table className="usertable-container">
            <tr className="usertable-header">
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
            </tr>
            {users.map((user) => (
                <tr key={user.id} className="usertable-row">
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.status}</td>
                </tr>
            ))}
        </table>
    );
}
