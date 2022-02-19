import React, { useContext } from 'react'
import { StatusBar } from '../component/StatusBar'
import { TerminalWindow } from '../component/TerminalWindow'
import { BrowserWindow } from '../component/BrowserWindow'
import { WorkspaceContext } from '../context/WorkspaceContext'
import './MainPage.css'

export const MainPage = () => {
    const context = useContext(WorkspaceContext);
    let wsVisibility = {
        ws1: context.currWorkspace === 1 ? 'block': 'none',
        ws2: context.currWorkspace === 2 ? 'block': 'none',
    }
    return (
        <>
            <StatusBar/>
            <div className="container" style={{ display: wsVisibility.ws1 }}>
                <TerminalWindow/>
            </div>
            <div className="container" style={{ display: wsVisibility.ws2 }}>
                <BrowserWindow/>
            </div>
        </>
    )
}
