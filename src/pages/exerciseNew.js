import React from 'react'
import ExerciseForm from '../components/exerciseForm'
import Card from '../components/card'
import Title from '../components/title'
import InternalServerError from '../pages/500'

class ExerciseNew extends React.Component{
    
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
        return (            
            <div>
                <Title title="Nuevo Ejercicio" 
                        description="Ingresa los valores para agregar un nuevo ejercicio"/>
                <div className="ExerciseNew_Lateral_Spaces row">
                    <div className="col-sm ExerciseNew_Card_Space">
                        <Card 
                            {...this.state.form}
                        />
                    </div>
                    <div className="col-sm ExerciseNew_Card_Space">
                        <ExerciseForm 
                            onChange={this.handleChange}
                            onSubmit={this.handleSubmit}
                            form={this.state.form}
                        />
                    </div>
                </div>
            </div>
            
                
        );
    }
}

export default ExerciseNew