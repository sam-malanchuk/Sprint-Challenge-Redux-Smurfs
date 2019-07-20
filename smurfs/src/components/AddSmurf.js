import React from 'react';
import { Link } from 'react-router-dom'

class AddSmurf extends React.Component {    
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            age: '',
            height: '',
        }
    }

    changeHandler = event => {
		event.preventDefault()

		this.setState({
			[event.target.name]: event.target.value,
        })
    }
    
    submitHandler = event => {
        event.preventDefault()
        console.log(this.state)
    }

    render() {
        const { name, age, height } = this.props
        return (
            <section>
                <h2>Add a Smurf</h2>
                <form onSubmit={this.submitHandler}>
                    <input type="text" name="name" value={name} onChange={this.changeHandler} placeholder="Name" /><br /><br />
                    <input type="number" name="age" value={age} onChange={this.changeHandler} placeholder="Age" /><br /><br />
                    <input type="number" name="height" value={height} onChange={this.changeHandler} placeholder="Height" />
                    <br /><br />
                    <input type="submit" value="Submit" />
                </form>
                <br /><br /><br />
                <Link to='/'>Go Back</Link>
            </section>
        );
    }
}

export default AddSmurf;