import React from "react";
import "./Header.css";

interface Props {
    className: string;
}

export default function Header({ className }: Props) {
    return (
        <header className={className}>
            <div className="header-item">
                <span>Just a fancy Header</span>
            </div>
        </header>
    );
}
