import React from 'react'
import '../components/styles/Errors.css'
import NotFoundImg from '../img/404.png'

class NotFound extends React.Component{
    render(){
        return (
            <div className="text-center">
                <h1 className="Error_Text">Error: 404 Not Found</h1>
                <img src={NotFoundImg} alt="404 Not Found" className="Error_Image"/>
            </div>
        )
    }
}

export default NotFound