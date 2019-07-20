/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  GET_SMURFS_START,
  GET_SMURFS_SUCCESS,
  GET_SMURFS_FAILED,
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILED,
} from '../actions/index'


//  Your initial/default state for this project could *Although does not have to* look a lot like this
const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   error: null,
 }

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export default function(state = initialState, action) {
	switch (action.type) {
      //  insert reducer cases here
      case GET_SMURFS_START: {
        return {
          ...state,
          fetchingSmurfs: true,
        }
      }
      case GET_SMURFS_SUCCESS: {
        const myData = action.payload
        return {
          ...state,
          fetchingSmurfs: false,
          error: null,
          smurfs: myData,
        }
      }
      case GET_SMURFS_FAILED: {
        return {
          ...state,
          fetchingSmurfs: false,
          error: action.payload.message,
        }
      }
      case ADD_SMURF_START: {
        return {
          ...state,
          addingSmurfs: true,
        }
      }
      case ADD_SMURF_SUCCESS: {
        const myData = action.payload
        return {
          ...state,
          addingSmurfs: false,
          error: null,
          smurfs: myData,
        }
      }
      case ADD_SMURF_FAILED: {
        return {
          ...state,
          addingSmurfs: false,
          error: action.payload.message,
        }
      }
      default:
          return state
    }
}