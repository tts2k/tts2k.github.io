import React from "react";
import { colors, motd } from "../constants";

export const Motd = () => {
    return (
        <>
            <pre style={ styles.banner }>
                { motd }
            </pre>
            <div> 
                Type
                <span style={ styles.highlighted }> profile </span>
                to see my profile, or
                <span style={ styles.highlighted }> help </span>
                to see list of commands
            </div>
            <br/>
        </>
    )
}

const styles = {
    banner: {
        fontSize: 14,
        fontFamily: "TerminusTTF",
        margin: 0
    },
    highlighted: {
        color: colors.aqua
    }
}
