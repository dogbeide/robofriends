import { SET_SEARCH_FIELD } from './constants'

export const setSearchField = (text) => ({
    type: SET_SEARCH_FIELD,
    payload: text
})
