import React from 'react'
import '../components/styles/welcome.css'

function Welcome(props){
    let {
        title, description
    } = props;
    
    return (
        <div className="container">
            <div className="Fitness-User-Info">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Welcome;