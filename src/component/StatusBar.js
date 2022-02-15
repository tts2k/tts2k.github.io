import React from "react";
import { colors } from "../constants";

export const StatusBar = () => {
    return (
        <div style={ styles.bar }>
            <div style={ styles.left }>
                <div style={ styles.workspace }> 1 </div>
                <div style={{ ...styles.workspace, ...styles.workspaceInactive }}> 2 </div>
                <div style={ styles.windowName }> tts2k@tts2k.github.io: ~</div>
            </div>
            <div style={ styles.center }>
            </div>
            <div style={ styles.right }></div>
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
        borderBottom: `3px solid ${ colors.background }`
    },
    windowName: {
        marginLeft: 10,
        paddingBottom: 2
    }
}
