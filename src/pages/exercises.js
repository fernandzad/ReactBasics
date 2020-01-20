import React from 'react'
import ExerciseList from '../components/exerciseList'
import Welcome from '../components/welcome'
import Add from '../components/add'

class Exercises extends React.Component{

    state = {
        data: []
    };

    async componentDidMount(){
        await this.fetchExercises();
    }

    fetchExercises = async () => {
        let response = await fetch('http://localhost:8000/api/exercises');
        let data = await response.json();

        console.log(data);
        this.setState({
            data
        });
    }

    render(){
        return (
            <div>
                <div>
                    <Welcome title="Hello Ad!"
                        description="Let's workout to get some gains!"/>
                </div>
                <div>
                    <ExerciseList data={this.state.data}/>
                </div>
                <br />
                <div>
                    <Add />
                </div>
            </div>
        );
    }
}

export default Exercises