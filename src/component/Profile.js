import React from "react";
import { colors } from "../constants";

export const Profile = () => {
    return (
        <div style={ styles.container }>
            <img 
                style={ styles.pfp }
                src="https://github.com/tts2k.png"
                alt="pfp"
            />
            <div>
                <div>
                    <span style={ styles.hostName }>tts2k</span>
                        @
                    <span style={ styles.hostName }>tts2k.github.io</span></div>
                <div>---------------------</div>
                <div>
                    <span style={styles.attrName}> Full Name:</span>
                    Thai Son Tran
                </div>
                <div>
                    <span style={styles.attrName}> Description:</span>
                    I'm a Vietnamsese software developer
                </div>
                <div>
                    <span style={styles.attrName}> Education:</span>
                    Graduated from Fanshawe College
                </div>
                <div>---------------------</div>
                <div>
                    <span style={styles.attrName}> Github:</span>
                    <a 
                        style={ styles.link }
                        href="https://github.com/tts2k"
                        target="_blank"
                        rel="noreferrer"
                    >
                        https://github.com/tts2k
                    </a>
                </div>
                <div>
                    <span style={styles.attrName}> Email:</span>
                    <a 
                        href="mailto:ttson2607@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        ttson2607@gmail.com
                    </a>
                </div>
                <div>
                    <span style={styles.attrName}> Hobbies:</span>
                    Linux, Tetris, Japanese Pop Culture
                </div>
            </div>
        </div>
    )
}

const styles = {
    container: {
        display: "flex",
        flexDirection: "row"
    },
    pfp: {
        height: 150,
        paddingRight: 15
    },
    hostName: {
        color: colors.aqua
    },
    attrName: {
        color: colors.aqua,
        marginRight: 5
    },
}
