import React from 'react'
import addImg from '../img/add.png'
import './styles/add.css'
import { Link } from 'react-router-dom'

const Add = () => {
    return (
        <Link to="/exercise/new">
            <img alt="" src={addImg} className="Fitness-Add"/>
        </Link>
    );
}

export default Add