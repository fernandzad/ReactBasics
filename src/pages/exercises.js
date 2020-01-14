import React from 'react'
import Card from '../components/card.js';
import Welcome from '../components/welcome.js';
import exerciseImg from '../img/exercise.png'

class Exercises extends React.Component{
    render(){
        return (
            <div>
                <Welcome title="Hello Ad!"
                    description="Let's workout to get some gains!"/>
                <Card 
                    title="Technique Guides"
                    description="Learn amazing street workouts and calisthenics"
                    img={exerciseImg}
                    leftColor="#A74CF2"
                    rightColor="#617BFB"
                />;
                <Card 
                    title="Technical Headlines"
                    description="Learn amazing street workouts and calisthenics"
                    img={exerciseImg}
                    leftColor="#33FFA8"
                    rightColor="#3377FF"
                />;
                <Card 
                    title="General Modules"
                    description="Learn amazing street workouts and calisthenics"
                    img={exerciseImg}
                    leftColor="#FF5733"
                    rightColor="#FFCA33"
                />;
                
            </div>
        );
    }
}

export default Exercises