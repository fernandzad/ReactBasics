import React from 'react'
import imgExample from '../img/exercise.png'
import './styles/card.css' 

class Card extends React.Component{
    render(){
        return (
            <div className="card mx-auto Fitness-Card">
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={imgExample}/>
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h4>Technique Guides</h4>
                            <p>Learn amazing street workouts and calisthenics</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;