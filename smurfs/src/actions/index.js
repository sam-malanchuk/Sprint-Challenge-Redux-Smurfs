// import axios for api requests
import axios from 'axios'

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const GET_SMURFS_START = 'GET_SMURFS_START'
export const GET_SMURFS_SUCCESS = 'GET_SMURFS_SUCCESS'
export const GET_SMURFS_FAILED = 'GET_SMURFS_FAILED'

export const ADD_SMURF_START = 'ADD_SMURF_START'
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS'
export const ADD_SMURF_FAILED = 'ADD_SMURF_FAILED'

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export function getSmurfs() {
  return (dispatch) => {
    dispatch({ type: GET_SMURFS_START })

    axios.get('http://localhost:3333/smurfs')
        .then((res) => {
          dispatch({ type: GET_SMURFS_SUCCESS, payload: res.data })
        })
        .catch((err) => {
          dispatch({ type: GET_SMURFS_FAILED, payload: err.response.data })
        })
  }
}

export function addSmurf(name, age, height) {
  return (dispatch) => {
    dispatch({ type: ADD_SMURF_START })

    const payload = { name, age, height}

    axios.post('http://localhost:3333/smurfs', payload)
        .then((res) => {
          dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data })
        })
        .catch((err) => {
          dispatch({ type: ADD_SMURF_FAILED, payload: err.response.data })
        })
  }
}
