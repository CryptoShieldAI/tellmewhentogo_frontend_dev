export const SET_USER_LIST = 'SET_USER_LIST'
export const SET_ROLE_LIST = 'SET_ROLE_LIST'

export interface User {
    id: number,
    email: string,
    role_id: number,
    balance: number
}

export interface Role {
    id: number,
    role: string,
}

export interface UserState {
    users: User[],
    roles: Role[],
}

interface SetUserAction {
    type: typeof SET_USER_LIST,
    payload: User[]
}

interface SetRoleAction {
    type: typeof SET_ROLE_LIST,
    payload: Role[]
}

export type UserActionTypes =
    | SetUserAction
    | SetRoleAction