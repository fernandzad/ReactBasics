import React from 'react'
import ExerciseList from '../components/exerciseList'
import Title from '../components/title'
import Add from '../components/add'
import Loader from '../components/loader'
import InternalServerError from '../pages/500'

class Exercises extends React.Component{

    state = {
        data: [],
        loading: true,
        error: null
    };

    async componentDidMount(){
        await this.fetchExercises();
        
    }

    fetchExercises = async () => {
        try {
            let response = await fetch('http://localhost:8000/api/exercises');
            let data = await response.json();
            //This fragment of code only shows that the component Loader works fine
            await new Promise((resolve, reject) => setTimeout(resolve, 1000));

            this.setState({
                data,
                loading: false
            }); 
        } catch (error) {
            this.setState({
                loading: false,
                error
            }); 
            
        }
        
    }

    render(){
        if(this.state.loading)
            return <Loader />
        if(this.state.error)
            return <InternalServerError error={this.state.error.toString()}/>
        return (
            <div>
                <div>
                    <Title title="Hello Ad!"
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