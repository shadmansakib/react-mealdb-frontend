
import React, { useState } from 'react';

import ToggleButton from './ToggleButton';
import Logo from './Logo';
import ToolbarMenu from './ToolbarMenu';
import DropShadow from './DropShadow';

import './style.css';


export default function Toolbar() {
    const [drawerOpen, toggleDrawerState] = useState(false);
    const dropShadow = drawerOpen ? <DropShadow onClick={() => toggleDrawerState(!drawerOpen)} /> : null;

    return (
        <nav className="toolbar__nav">
            <ToggleButton onClick={() => toggleDrawerState(!drawerOpen)} />
            <Logo />
            <div className="toolbar__spacer" />
            <ToolbarMenu displayState={drawerOpen} onClickItem={() => toggleDrawerState(!drawerOpen)} />
            {dropShadow}
        </nav>
    )
}
