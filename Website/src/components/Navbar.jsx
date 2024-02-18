import React, { useState } from 'react'
import { Link, Route } from 'react-router-dom'
import logo from '../assets/LOGO.jpg'
import './Navbar.css'

function Navbar() {



    return (
        <>
            <div id="navbarArea">


                <Link to="/">
                    <img id="Logo" src={logo} alt="Logo" />
                </Link>
                <Link to="/north-america" className='region'>Kuzey Amerika</Link>
                <Link to="/south-america" className='region'>Güney Amerika</Link>
                <Link to="/Europe" className='region'>Avrupa</Link>
                <Link to="/Africa" className='region'>Afrika</Link>
                <Link to="/Asia" className='region'>Asya</Link>
                <Link to="/Oceania" className='region'>Okyanusya</Link>

            </div>
        </>
    )
}

export default Navbar