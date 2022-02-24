import React, { ReactElement } from "react";
import User from "../entities/User";
import UserCard from "./UserCard";
import "./UserKanban.css";

interface Props {
    users: User[];
}

export default function UserKanban({ users }: Props): ReactElement {
    const userCards = users.map((user) => <UserCard key={user.id} user={user} />);
    return <div className="userkanban-container">{userCards}</div>;
}
