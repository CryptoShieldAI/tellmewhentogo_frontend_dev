import { SET_ROLE_LIST, SET_USER_LIST, UserActionTypes, UserState } from "../types/user.types";

const initialState: UserState = {
    users: [],
    roles: []
}

export default function userReducer(
    state = initialState,
    action: UserActionTypes
) {
    switch (action.type) {
        case SET_ROLE_LIST:
            return {
                ...state,
                roles: action.payload
            }
        case SET_USER_LIST:
            return {
                ...state,
                users: action.payload
            }
        default:
            return state
    }
}