import { Object } from 'core-js';
import {
    CHANGE_SEARCH_FIELD,
    GET_ROBOTS_FAIL,
    GET_ROBOTS_PENDING,
    GET_ROBOTS_SUCCESS
} from './constants'


const initStateSearchRobots =  {
    searchField: ''
}
export const searchRobotsReducer = (state=initStateSearchRobots, action={}) => {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, { searchField: action.payload })
        default:
            return state;
    }
}

const initStateGetRobots = {
    isPending: false,
    robots: [],
    error: ''
}
export const getRobotsReducer = (state=initStateGetRobots, action={}) => {
    switch(action.type) {
        case GET_ROBOTS_PENDING:
            return Object.assign({}, state, { isPending: true })
        case GET_ROBOTS_SUCCESS:
            return Object.assign({}, state, {
                robots: action.payload,
                isPending: false
            })
        case GET_ROBOTS_FAIL:
            return Object.assign({}, state, {
                error: action.payload,
                isPending: false
            })
        default:
            return state;
    }
}
