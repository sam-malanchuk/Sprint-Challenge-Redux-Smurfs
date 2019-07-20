import React from 'react';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { addSmurf } from '../actions/index'
import { connect } from 'react-redux'

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
        const { name, age, height } = this.state
        event.preventDefault()
        this.props.addSmurf(name, age, height)
        this.props.history.push("/")
    }

    render() {
        const { name, age, height } = this.props
        return (
            <section>
                <h2>Add a Smurf</h2>
                <form onSubmit={this.submitHandler}>
                    <input type="text" name="name" value={name} onChange={this.changeHandler} placeholder="Name" required/><br /><br />
                    <input type="number" name="age" value={age} onChange={this.changeHandler} placeholder="Age" required/><br /><br />
                    <input type="number" name="height" value={height} onChange={this.changeHandler} placeholder="Height" required/>
                    <br /><br />
                    <input type="submit" value="Submit" />
                </form>
                <br /><br /><br />
                <Link to='/'>Go Back</Link>
            </section>
        );
    }
}

export default withRouter(connect(null, { addSmurf })(AddSmurf));