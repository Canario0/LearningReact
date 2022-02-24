import React, { ReactElement } from "react";
import "./App.css";
import Layout from "./components/Layout";
import UserPage from "./components/UserPage";

function App(): ReactElement {
    return (
        <div className="App">
            <Layout>
                <UserPage />
            </Layout>
        </div>
    );
}

export default App;
