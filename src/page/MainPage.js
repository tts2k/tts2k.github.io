import React, { useContext } from 'react'
import { StatusBar } from '../component/StatusBar'
import { TerminalWindow } from '../component/TerminalWindow'
import { WorkspaceContext } from '../context/WorkspaceContext'

export const MainPage = () => {
    const context = useContext(WorkspaceContext);
    let wsVisibility = {
        ws1: context.store === 1 ? 'visible': 'hidden',
        ws2: context.store === 1 ? 'hidden': 'visible',
    }
    return (
        <>
            <StatusBar/>
            <div style={{ visibility:wsVisibility.ws1 }}>
                <TerminalWindow/>
            </div>
        </>
    )
}
