import React from 'react'
import { Plus } from 'react-feather';

import "./style.scss"

function index() {
    return (
        <button className="contact-button">
            <span>Contact Us</span>
            <Plus />
        </button>
    )
}

export default index
