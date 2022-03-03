import React, { FormEvent, useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./Auth";

export default function Login() {
    const navigate = useNavigate();
    const auth = useAuth();
    const handleSubmit = useCallback(
        (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const username = formData.get("username") as string;
            auth.login(username).then(() => navigate("/", { replace: true }));
        },
        [auth.login]
    );
    return (
        <form style={{ fontSize: "16px" }} onSubmit={handleSubmit}>
            <label style={{ marginRight: "5px" }}>
                Username <input type="text" name="username" />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}
