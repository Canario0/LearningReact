import React, { ReactElement, ReactNode } from "react";
import "./Header.css";

interface Props {
    avatar?: string;
    className: string;
}

export default function Header({ avatar, className }: Props): ReactElement {
    return (
        <header className={className}>
            {avatar && (
                <div className="header-avatar">
                    <span>Wellcome {avatar}</span>
                </div>
            )}
            <div className="header-title">
                <span>Just a fancy Header</span>
            </div>
        </header>
    );
}
