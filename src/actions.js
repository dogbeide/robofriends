import { CHANGE_SEARCH_FIELD } from './constants'

export const changeSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})
