import React, { ReactElement } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import AuthProvider, { RequireLogin } from "./components/Auth";
import Layout from "./components/Layout";
import Login from "./components/Login";
import UserPage from "./components/UserPage";

function App(): ReactElement {
    const location = useLocation();
    return (
        <AuthProvider>
            <Routes>
                <Route element={<Layout />}>
                    <Route
                        path="/users"
                        element={
                            <RequireLogin>
                                <UserPage />
                            </RequireLogin>
                        }
                    />
                    <Route path="/login" element={<Login />} />
                    {/* Not kown pages redirects to home page */}
                    <Route path="*" element={<Navigate to={"/users" + location.search} replace />} />
                </Route>
            </Routes>
        </AuthProvider>
    );
}

export default App;
