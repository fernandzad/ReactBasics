import React from 'react'
import defaultImg from '../img/empty.png'
import './styles/card.css' 
import circlesImg from '../img/circles.png'

class Card extends React.Component {
    
    state = {
        image: defaultImg,
        date: new Date()
    }

    componentDidMount(){
        // this.timerID = setInterval(
        //     () => this.tick(),
        //     1000
        // );
    }

    tick(){
        this.setState({
            date: new Date()
        });
    }

    componentWillUnmount(){
        //clearInterval(this.timerID);
    }

    render(){
    /* background: url('../../img/circles.png') no-repeat, linear-gradient(to right, #A74CF2, #617BFB); */
        const {
            img, title, description, leftColor, rightColor
        } = this.props;

        return (
            <div className="card mx-auto Fitness-Card"
                style={{
                    backgroundImage: `url(${circlesImg}), 
                    linear-gradient(to right, ${leftColor || '#56CCF2'}, 
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
}

export default Card;