import React from 'react'
import defaultImg from '../img/empty.png'
import './styles/card.css' 
import circlesImg from '../img/circles.png'

const Card = (props) => {

    const {
        img, title, description, leftColor, rightColor
    } = props;

    return (
        <div className="card mx-auto Fitness-Card"
            style={{
                backgroundImage: `url(${circlesImg}), 
                linear-gradient(to right, ${leftColor || '#EFD'}, 
                ${rightColor || '#2F80ED'})`
            }}
        >
            <div className="card-body">
                <div className="row center">
                    <div className="col-6">
                        <img alt="" src={img || defaultImg} className="float-right"/>
                    </div>
                    <div className="col-6 Fitness-Card-Info">
                        <h1>{title}</h1>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;