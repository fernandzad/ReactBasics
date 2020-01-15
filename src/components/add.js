import React from 'react'
import addImg from '../img/add.png'
import './styles/add.css'

class Add extends React.Component{
    render(){
        return (
            <div>
                <img src={addImg} className="Fitness-Add"/>
            </div>
        );
    }
}

export default Add