import React from 'react'
import exerciseImg from '../img/exercise.png'
import './styles/card.css' 
import circlesImg from '../img/circles.png'

class Card extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            image: exerciseImg,
            date: new Date()
        }
    }

    componentDidMount(){
        // setTimeout( () => {
        //     this.setState({
        //         image: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-256.png'
        //     });
        // }, 5000);

        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    tick(){
        this.setState({
            date: new Date()
        });
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    render(){
    /* background: url('../../img/circles.png') no-repeat, linear-gradient(to right, #A74CF2, #617BFB); */
        const props = this.props ;
        const {
            img, title, description, leftColor, rightColor
        } = props;

        return (
            <div className="card mx-auto Fitness-Card"
                style={{
                    backgroundImage: `url(${circlesImg}), 
                    linear-gradient(to right, ${leftColor}, 
                    ${rightColor})`
                }}
            >
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={this.state.image} className="float-right"/>
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1>{title}</h1>
                            <p>{description}</p>
                            <p>{this.state.date.toLocaleTimeString()}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;