import React from 'react'
import InternalServerError from './500'
import ExerciseNew from './exerciseNew'

class ExerciseNewContainer extends React.Component{
    
    state = {
        form: {
            title: '',
            description: '',
            img: '',
            leftColor: '',
            rightColor: '',
        },
        loading: false,
        error: null
    }

    handleChange = (e) => {
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }

    handleSubmit = async (e) => {
        this.setState({
            loading: true
        });
        e.preventDefault();
        try {
            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(this.state.form)
            }
            let response = await fetch('http://localhost:8000/api/exercises', config);
            let json = await response.json();

            this.setState({
                loading: false
            });
            
            //Gracias a React Router
            this.props.history.push('/exercise');

        } catch (error) {
            this.setState({
                loading: false,
                error
            });

        }
    }

    render(){
        if(this.state.error)
            return <InternalServerError error={this.state.error.toString()}/>
        return <ExerciseNew onChange={this.handleChange} 
                            onSubmit={this.handleSubmit}
                            form={this.state.form}/>;
    }
}

export default ExerciseNewContainer