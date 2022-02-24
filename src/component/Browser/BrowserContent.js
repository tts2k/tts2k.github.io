import React from 'react';
import tw1 from '../../assets/images/2w1.png'
import tw2 from '../../assets/images/2w2.png'
import tw3 from '../../assets/images/2w3.png'
import tw4 from '../../assets/images/2w4.png'
import cityComic from '../../assets/images/citycomic.png'
import { colors } from '../../constants';
import './BrowserContent.css';

export const BrowserContent = () => {

    return (
        <div style={ styles.container }>
            <div style={ styles.project }>
                <img style={ styles.appImage } src={ tw1 } alt="2w screenshot 1"/>
                <img style={ styles.appImage } src={ tw2 } alt="2w screenshot 2"/>
                <img style={ styles.appImage } src={ tw3 } alt="2w screenshot 3"/>
                <img style={ styles.appImage } src={ tw4 } alt="2w screenshot 4"/>
                <a
                    href="https://github.com/tts2k/2-Wacht"
                    target="_blank"
                    rel="noreferrer"
                    style={ styles.link }
                >
                    <h1> 2-Wacht </h1>
                </a>
                <p> An app to help manage movie backlog</p>
            </div>

            <div style={ styles.project }>
                <img style={ styles.img } src={ cityComic } alt="2w screenshot 4"/>

                <a 
                    href="https://github.com/tts2k/city-comic"
                    target="_blank"
                    rel="noreferrer"
                >
                    <h1> City Comic </h1>
                </a>
                <p> A simple web app to read xkcd comics </p>
            </div>
        </div>
    )
}

const styles = {
    container: {
        width: "100%",
        height: "inherit",
        overflowY: "scroll",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        paddingTop: 30,
        height: '100%'
    },
    project: {
        backgroundColor: colors.background2,
        marginBottom: 30,
        padding: 5,
        width: "80%",
    },
    appImage: {
        width: "15%",
        margin: "1%"
    },
    appImageContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    },
    img: {
        width: "80%"
    },
    link: {

    }
}
