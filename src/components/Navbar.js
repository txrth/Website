import React, { useState } from 'react';
import Style from './Navbar.module.scss';
import Toggler from "./home/Toggler";
import { useLocation } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import { Box } from "@mui/material";
import { info } from "../info/Info";
import { singlePage } from '../info/Info';

const links = [
    {
        name: 'Home',
        to: '',
        active: 'home'
    },
    {
        name: 'About Me',
        to: 'about',
        active: 'about'
    },
    {
        name: info.initials,
        type: 'Initials',
        to: '/',
        active: 'home'
    },
    {
        name: 'Portfolio',
        to: 'portfolio',
        active: 'portfolio'
    },{
        name: 'Contact',
        to: '/contact',
        active: 'contact'
    }
]

export default function Navbar({darkMode, handleClick}) {
    const location = useLocation()
    const [active, setActive] = useState(location.pathname === '/' ? 'home' : location.pathname.slice(1, location.pathname.length));

    return (
        <Box component={'nav'} width={'100%'} >
            <Box component={'ul'} display={'flex'} justifyContent={'center'} alignItems={'center'}
                 gap={{xs: '2rem', md: '8rem'}}
                  fontSize={'1.25rem'}>
                {links.map((link, index) => (
                    <Box key={index} component={'li'} className={(link.active === active && !link.type) && Style.active}
                        sx={{ borderImageSource: info.gradient }}>
                        <Link to={singlePage ? `#${link.to}` : `/${link.to}`}
                        scroll={el => scrollWidthOffset(el)}
                            smooth
                            onClick={() => setActive(link.active)} className={Style.link}>
                            {!link.type && <p style={{ padding: '0.5rem 0' }}>{link.name}</p>}
                            {link.type && <h1>{link.name}</h1>}
                        </Link>
                    </Box>
                ))}
              {/* <li>
                   } <Toggler darkMode={darkMode} handleClick={handleClick}/> 
                </li>*/}
            </Box>
        </Box>
    )
}