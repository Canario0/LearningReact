import React, { createContext, ReactNode, useState, useCallback, useContext, ReactElement } from "react";
import { Navigate } from "react-router-dom";

interface AuthProps {
    children: ReactNode;
}
interface AuthContextType {
    user?: string; // This is just a simple demo
    login: (user: string) => Promise<void>;
    logout: () => Promise<void>;
    isLogged: () => boolean;
}

const AuthContext = createContext<AuthContextType>({
    login: async (user: string) => {},
    logout: async () => {},
    isLogged: () => false,
});

export function useAuth() {
    return useContext(AuthContext);
}

export default function AuthProvider({ children }: AuthProps) {
    const [user, setUser] = useState("");
    const login = useCallback(async (loggedUser: string) => setUser(loggedUser), [setUser]);
    const logout = useCallback(async () => setUser(""), [setUser]);
    const isLogged = useCallback(() => Boolean(user), [user]);
    return <AuthContext.Provider value={{ user, login, logout, isLogged }}>{children}</AuthContext.Provider>;
}

interface RequireLoginProps {
    children: JSX.Element;
}

export function RequireLogin({ children }: RequireLoginProps) {
    const auth = useAuth();
    if (!auth.isLogged()) {
        return <Navigate to="/login" replace={true} />;
    }

    return children;
}
