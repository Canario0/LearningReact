import React, { ReactElement, ReactEventHandler, ReactNode } from "react";
import "./SearchBar.css";

interface Props {
    className: string;
    placeholder: string;
    value: string;
    onChange: ReactEventHandler;
    onClear: ReactEventHandler;
    controlButtons: ReactNode[];
}

export default function SearchBar({
    className,
    placeholder,
    value,
    onChange: handleChange,
    onClear: handleClear,
    controlButtons,
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
                    <button className="searchbar-clear" onClick={handleClear}>
                        X
                    </button>
                )}
            </div>
            {controlButtons && <div className="searchbar-controlbuttons">{controlButtons}</div>}
        </div>
    );
}
