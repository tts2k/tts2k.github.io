import React, { useState, createContext } from "react";

export const WorkspaceContext = createContext();

export const WorkspaceContextProvider = (props) => {
    const [currWorkspace, setCurrWorkspace] = useState(1)
    const [currWindow, setCurrWindow] = useState("")

    return (
        <WorkspaceContext.Provider
            value={{ currWorkspace, setCurrWorkspace, currWindow, setCurrWindow }}
        >
            { props.children }
        </WorkspaceContext.Provider>
    )
}
