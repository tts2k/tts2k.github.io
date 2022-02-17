import React, { useState }from 'react';
import { Rnd } from 'react-rnd'
import { colors, motd } from "../constants";
import { ReactTerminal } from '@tts2k/react-terminal'
import { Profile } from './Profile';

export const TerminalWindow = () => {
    const borderColor = {
        active: `2px solid ${ colors.primary }`,
        inactive: `2px solid ${ colors.background2 }`
    }

    const [border, setBorder] = useState(borderColor.inactive);
    const commands = {
        profile: () => ( <Profile/> )
    };

    const onTerminalFocusChange = () => {
        (border === borderColor.inactive)
            ? setBorder(borderColor.active)
            : setBorder(borderColor.inactive)
    }

    return (
        <div style={ styles.container }>
            <Rnd 
                default={{
                    x:10,
                    y:30,
                    width: 600,
                    height: 500
                }}
                bounds="parent"
                style={{ ...styles.window, border: border }}
            >
                <ReactTerminal 
                    welcomeMessage={(<pre style={{fontFamily: "TerminusTTF" }}>{ motd }</pre>)}
                    commands={ commands }
                    themes={{ gruvbox }}
                    theme="gruvbox"
                    prompt="~ $"
                    showControlBar="false"
                    showControlButtons="false"
                    onFocusChange={ onTerminalFocusChange }
                />
            </Rnd>
        </div>
    )
}

const styles = {
    window: {
        backgroundColor: colors.background,
        padding: "1em",
    },
    container: {
        width: "100%",
        height: "100%",
    }
}

const gruvbox = {
    background: colors.background,
    color: colors.forground,
    promptColor: colors.green,
    fontFamily: "TerminusTTF",
    fontSize: "12px",
    padding: 0
}
