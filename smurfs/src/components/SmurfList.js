import React from 'react';
import { connect } from 'react-redux'
import { getSmurfs } from '../actions/index'
import { Link } from 'react-router-dom'


class SmurfList extends React.Component {
    componentDidMount() {
        // call our action
        this.props.getSmurfs()
    }
    
    render() {
        const {
            fetchingSmurfs,
            error,
            smurfs,
        } = this.props
    
        if (fetchingSmurfs) {
            return <p>Loading Smurfs...</p>
        }

        return (
            <section>
                <h2>My Smurf Village</h2>
                {error && <p>{error}</p>}

                {smurfs.map((smurf) => {
                    return <div className="smurf" key={smurf.id}>Name: {smurf.name}<br />Age: {smurf.age}<br />Height: {smurf.height}</div>
                })}
                    <Link to='/add'><div className="smurf"><br />Add a Smurf<br /><br /></div></Link>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
	return {
		fetchingSmurfs: state.fetchingSmurfs,
        error: state.error,
        smurfs: state.smurfs,
	}
}

export default connect(mapStateToProps, { getSmurfs })(SmurfList);