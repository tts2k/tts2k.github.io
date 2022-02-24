import React, { useEffect, useState } from "react";

export const Clock = () => {

    const [date, setDate] = useState(new Date())

    const refreshDate = () => {
        setDate(new Date())
    }

    useEffect(() => {
        const timeId = setInterval(refreshDate, 1000)
        return () => {
            clearInterval(timeId);
        }
    },[]);

    return (
        <div style={ styles.container }>
            <div style={ styles.innerContainer }>
                <span style={ styles.icon }> </span>
                { date.toLocaleDateString() }
            </div>
            <div style={ styles.innerContainer }>
                <span style={ styles.icon }> </span>
                { date.toLocaleTimeString() }
            </div>
        </div>
    )
}

const styles = {
    container: {
        display: "flex",
        flexDirection: "row",
    },
    innerContainer: {
        margin: 5
    },
    icon: {
        fontFamily: "sijiTTF",
    }
}
