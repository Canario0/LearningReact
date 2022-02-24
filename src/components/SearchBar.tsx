import React, { ReactElement, ReactEventHandler } from "react";
import "./SearchBar.css";

interface Props {
    className: string;
    placeholder: string;
    value: string;
    onChange: ReactEventHandler;
    onClick: ReactEventHandler;
}

export default function SearchBar({
    className,
    placeholder,
    value,
    onChange: handleChange,
    onClick: handleClick,
}: Props): ReactElement {
    return (
        <div className={"searchbar-container " + className}>
            <div className="searchbar-combo">
                <input
                    type="text"
                    className="searchbar-input"
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                />
                {value && (
                    <button className="searchbar-clear" onClick={handleClick}>
                        X
                    </button>
                )}
            </div>
        </div>
    );
}
