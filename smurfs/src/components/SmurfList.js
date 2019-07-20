import React from 'react';
import { connect } from 'react-redux'

class SmurfList extends React.Component {
    componentDidMount() {
        // call our action
        // this.props.getSmurfs()
    }
    
    render() {
        const {
            fetchingSmurfs,
            error,
            // smurfs,
        } = this.props
    
        if (fetchingSmurfs) {
            return <p>Loading Smurfs...</p>
        }

        return (
            <section>
                <h2>My Smurf Village</h2>
                {error && <p>{error}</p>}

                {/* {smurfs.map((smurf) => {
                    return <div>Smurf</div>
                })} */}
            </section>
        );
    }
}

const mapStateToProps = (state) => {
	return {
		fetchingSmurfs: state.fetchingSmurfs,
        error: state.error,
        friends: state.smurfs,
	}
}

export default connect(mapStateToProps)(SmurfList);