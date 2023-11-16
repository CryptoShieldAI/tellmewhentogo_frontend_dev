import axios from "axios"
import { SET_ROLE_LIST, SET_USER_LIST } from "../types/user.types";

const getUserList = (emailSearch: string | null, roleSearch: number | undefined): any => {
    return async (dispatch: any) => {

        const url = `${process.env.API_URL}/admin/user?email=${emailSearch ? emailSearch : ''}${roleSearch && roleSearch >= 0 ? `&role=${roleSearch}` : ''}`;

        const data: any = await axios.get(url).then(res => res.data)
        dispatch({
            type: SET_USER_LIST,
            payload: data.users
        })
    }
}

const updateUser = (id: number, role: number, balance: number): any => {
    return async (dispatch: any) => {
        const data: any = await axios.post(`${process.env.API_URL}/admin/user/update`, {
            id,
            role,
            balance
        }).then(res => res.data)
        return data.status
    }

}
const getRoleList = (): any => {
    return async (dispatch: any) => {
        const data: any = await axios.get(`${process.env.API_URL}/admin/user/roles`)
            .then(res => res.data)
        dispatch({
            type: SET_ROLE_LIST,
            payload: data.roles
        })
    }
}

export default {
    getRoleList,
    getUserList,
    updateUser
}