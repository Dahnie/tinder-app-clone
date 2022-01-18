import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';
import tinderLogo from "./assets/image/tinder-logo.png"
import "./assets/styles/Header.css";

function Header() {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon fontSize="large" className="header__icon" />
            </IconButton>
            <img src={tinderLogo} alt="tinder-logo" className="header__logo" />
            <IconButton>
                < ForumIcon fontSize="large" className='header__icon' />
            </IconButton>
        </div>
    )
}

export default Header;
