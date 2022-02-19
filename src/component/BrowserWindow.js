import React from "react";
import { colors } from "../constants";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md"
import { BsThreeDots } from "react-icons/bs"
import { BrowserContent } from "./BrowserContent"

export const BrowserWindow = () => {
    return (
        <div style={ styles.wrapper }>
            <div style={ styles.container }>
                <div style={ styles.toolbar }>
                    <div style={ styles.navBtns }>
                        <MdArrowBackIos/>
                        <MdArrowForwardIos/>
                    </div>
                    <div style={ styles.addrBar }>
                        <span>~/projects.html</span>
                    </div>
                    <div style={ styles.menu }>
                        <BsThreeDots/>
                    </div>
                </div>
                <BrowserContent/>
            </div>
        </div>
    )
}

const styles = {
    wrapper: {
        height: "100%",
        width: "100%",
    },
    container: {
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        width: "98%",
        height: "95%",
        backgroundColor: colors.background,
        color: colors.forground,
        fontFamily: "Roboto",
    },
    toolbar: {
        paddingTop: 20,
        height: 40,
        width: "100%",
        backgroundColor: colors.background2,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        fontSize: 15
    },
    navBtns: {
        display: "flex",
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        fontSize: 15,
        marginLeft: 15
    },
    addrBar: {
        display: "flex",
        flex: 1,
        justifyContent: "center",
        width: "60%"
    },
    menu: {
        display: "flex",
        flex: 1,
        justifyContent: "flex-end",
        marginRight: 15,
        fontSize: 15
    }
}
