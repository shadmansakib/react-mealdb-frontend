
import React, { useState } from 'react';

import ToggleButton from './ToggleButton';
import Logo from './Logo';
import ToolbarMenu from './ToolbarMenu';
import DropShadow from './DropShadow';

import './style.css';


export default function Toolbar() {
    const [drawerOpen, setDrawerState] = useState(false);
    const dropShadow = drawerOpen ? <DropShadow onClick={() => setDrawerState(false)} /> : null;


    return (
        <nav className="toolbar__nav">
            <ToggleButton onClick={() => setDrawerState(true)} />
            <div className="toolbar_padding">
                <Logo />
                <div className="toolbar__spacer" />
                <ToolbarMenu displayState={drawerOpen} onClickItem={() => setDrawerState(false)} />
            </div>
            {dropShadow}
        </nav>
    )
}
