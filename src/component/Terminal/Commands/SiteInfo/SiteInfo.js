import React from 'react';
import { colors } from '../../../../constants';

export const SiteInfo = () => {
    return (
        <div>
            <div>---------------------</div>
            <div style={ styles.container }>
                <a
                    href="https://github.com/tts2k/tts2k.github.io/tree/source"
                    target="_blank"
                    rel="noreferrer"
                    style={ styles.link }
                >
                     Source code
                </a>
                <a
                    href="https://unsplash.com/photos/QKjNKupZj14"
                    target="_blank"
                    rel="noreferrer"
                    style={ styles.link }
                >
                     Wallpaper source
                </a>
                <a
                    href="https://github.com/morhetz/gruvbox"
                    target="_blank"
                    rel="noreferrer"
                    style={ styles.link }
                >
                     Color scheme
                </a>
            </div>
            <div>---------------------</div>
        </div>
    )
}

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
    },
    link: {
        color: colors.aqua
    }
}
