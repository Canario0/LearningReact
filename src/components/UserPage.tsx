import React, { ChangeEvent, ReactElement, useCallback, useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import UserKanban from "./UserKanban";
import User from "../entities/User";
import { getUsers } from "../api/User";
import "./UserPage.css";

export default function UserPage(): ReactElement {
    const [filterValue, setFilterValue] = useState("");
    const handleSearchChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => setFilterValue(e.target.value),
        [setFilterValue]
    );
    const handleClick = useCallback(() => setFilterValue(""), [setFilterValue]);
    const [users, setUsers] = useState([] as User[]);
    useEffect(() => setUsers(getUsers(filterValue)), [filterValue]);
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
