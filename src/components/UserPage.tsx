import React, { ReactElement, useCallback, useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import UserKanban from "./UserKanban";
import User from "../entities/User";
import { getUsers } from "../api/User";
import "./UserPage.css";
import UserTree from "./UserTree";

export default function UserPage(): ReactElement {
    const [filterValue, setFilterValue] = useState("");
    const handleSearchChange = useCallback((e) => setFilterValue(e.target.value), [setFilterValue]);
    const handleClear = useCallback(() => setFilterValue(""), [setFilterValue]);

    const [users, setUsers] = useState([] as User[]);
    useEffect(() => {
        getUsers(filterValue)
            .then((res: Response) => res.json())
            .then((body: User[]) => setUsers(body));
    }, [filterValue]);

    const [viewStyle, setViewStyle] = useState("kanban");
    const handleStyleChange = useCallback((e) => setViewStyle(e.target.name), [setViewStyle]);
    const controlButtons = [
        <button name="kanban" onClick={handleStyleChange}>
            Kanban
        </button>,
        <button name="tree" onClick={handleStyleChange}>
            Tree
        </button>,
    ];
    return (
        <div className="users-container">
            <SearchBar
                className="users-searchbar"
                placeholder="Filter User..."
                value={filterValue}
                onChange={handleSearchChange}
                onClear={handleClear}
                controlButtons={controlButtons}
            />
            <div className="users-content">
                {viewStyle === "kanban" && <UserKanban users={users} />}
                {viewStyle === "tree" && <UserTree users={users} />}
            </div>
        </div>
    );
}
