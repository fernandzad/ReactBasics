import React from 'react'
import Loader from '../components/loader'
import InternalServerError from '../pages/500'
import Exercises from '../pages/exercises'

class ExercisesContainer extends React.Component{

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
        return <Exercises data={this.state.data}/>;
    }
}

export default ExercisesContainer