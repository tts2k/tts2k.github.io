import React, { useState, createContext } from "react";

export const WorkspaceContext = createContext();

export const WorkspaceContextProvider = (props) => {
    const [store, setStore] = useState(1)

    return (
        <WorkspaceContext.Provider
            value={{ store, setStore }}
        >
            { props.children }
        </WorkspaceContext.Provider>
    )
}
