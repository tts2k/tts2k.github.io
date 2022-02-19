import React, { useContext } from "react";
import { colors } from "../constants";
import { Clock } from "./Clock";
import { WorkspaceContext } from "../context/WorkspaceContext";

export const StatusBar = () => {
    const context = useContext(WorkspaceContext)
    let ws1Style = styles.workspace;
    let ws2Style = styles.workspaceInactive;

    if (context.currWorkspace === 1) {
        ws1Style = styles.workspace;
        ws2Style = styles.workspaceInactive;
    } else {
        ws1Style = styles.workspaceInactive;
        ws2Style = styles.workspace;
    }


    const changeWorkspace = (e) => {
        let ws = parseInt(e.target.innerText)
        context.setCurrWorkspace(parseInt(ws));
        // Change window name to HTML Viewer if switching to second workspace
        if (ws === 2) {
            context.setCurrWindow("HTML Viewer");
        }
        else {
            context.setCurrWindow("");
        }
    }

    return (
        <div style={ styles.bar }>
            <div style={ styles.left }>
                <div
                    style={ ws1Style }
                    onClick={ changeWorkspace }
                >
                    1
                </div>
                <div
                    style={ ws2Style }
                    onClick={ changeWorkspace }
                >
                    2
                </div>
                <div style={ styles.windowName }> { context.currWindow } </div>
            </div>
            <div style={ styles.center }>
            </div>
            <div style={ styles.right }>
                <Clock/>
            </div>
        </div>
    )
}

const styles = {
    title: {
        margin: 0
    },
    bar: {
        display: "flex",
        flexDirection: "row",
        color: colors.forground,
        backgroundColor: colors.background,
        height: 18
    },
    left: {
        flex: 1,
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    center: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    right: {
        flex: 1,
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    workspace: {
        paddingLeft: 10,
        paddingTop: 1,
        paddingRight: 10,
        borderBottom: `3px solid ${ colors.primary }`
    },
    workspaceInactive: {
        paddingLeft: 10,
        paddingTop: 1,
        paddingRight: 10,
        borderBottom: `3px solid ${ colors.background }`
    },
    windowName: {
        marginLeft: 10,
        paddingBottom: 2
    }
}
