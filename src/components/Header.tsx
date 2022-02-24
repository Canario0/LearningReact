import React, { ReactElement } from "react";
import "./Header.css";

interface Props {
    className: string;
}

export default function Header({ className }: Props): ReactElement {
    return (
        <header className={className}>
            <div className="header-item">
                <span>Just a fancy Header</span>
            </div>
        </header>
    );
}
