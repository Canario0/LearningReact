import React, { ReactElement, ReactNode } from "react";
import Header from "./Header";
import "./Layout.css";

interface Props {
    children: ReactNode;
}

export default function Layout({ children }: Props): ReactElement {
    return (
        <div className="layout-container">
            <Header className="layout-header" />
            <div className="layout-content">{children}</div>
        </div>
    );
}
