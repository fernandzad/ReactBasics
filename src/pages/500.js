import React from 'react'
import '../components/styles/Errors.css'
import ServerErrorImg from '../img/500.png'

class InternalServerError extends React.Component{
    render(){
        return (
            <div className="text-center">
                <h1 className="Error_Text">Error: 500 Internal Server Error</h1>
                <img src={ServerErrorImg} alt="500 Internal Server" className="Error_Image"/>
            </div>
        )
    }
}

export default InternalServerError