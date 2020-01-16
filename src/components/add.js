import React from 'react'
import addImg from '../img/add.png'
import './styles/add.css'
import { Link } from 'react-router-dom'

class Add extends React.Component{
    render(){
        return (
            <Link to="/exercise/new">
                <img src={addImg} className="Fitness-Add"/>
            </Link>
        );
    }
}

export default Add