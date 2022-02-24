import React from "react";
import User from "../entities/User";
import "./UserCard.css";

interface Props {
    user: User;
}

export default function UserCard({ user }: Props) {
    return (
        <div className="usercard-container">
            <div className="usercard-title">
                <h3>{user.name}</h3>
            </div>
            <div className="usercard-body">
                <div className="status-indicator" data-status={user.status}>
                    Status:
                </div>
                <div>
                    Email: <span>{user.email}</span>
                </div>
            </div>
        </div>
    );
}
