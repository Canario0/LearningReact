import React, { ChangeEvent, ReactElement, useCallback, useEffect, useReducer, useState } from "react";
import SearchBar from "../components/SearchBar";
import UserKanban from "./UserKanban";
import User from "../entities/User";
import { getUsers } from "../api/User";
import "./UserPage.css";

interface Props {}

interface SearchAction {
    type: string;
    value: string;
}

function searchReducer(state: string, { type, value }: SearchAction) {
    switch (type) {
        case "change":
            return value;
        case "clear":
            return "";
        default:
            return state;
    }
}

export default function UserPage(props: Props): ReactElement {
    const [filterValue, dispach] = useReducer(searchReducer, "");
    const handleSearchChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => dispach({ type: "change", value: e.target.value }),
        [dispach]
    );
    const handleClick = useCallback(() => dispach({ type: "clear", value: "" }), [dispach]);
    const [users, setUsers] = useState([] as User[]);
    useEffect(() => {
        let users = getUsers();
        if (filterValue) {
            users = users.filter((user) => user.name.toLowerCase().includes(filterValue.toLowerCase()));
        }
        setUsers(users);
    }, [filterValue]);
    return (
        <div className="users-container">
            <SearchBar
                className="users-searchbar"
                placeholder="Filter User..."
                value={filterValue}
                onChange={handleSearchChange}
                onClick={handleClick}
            />
            <div className="users-content">
                <UserKanban users={users} />
            </div>
        </div>
    );
}
