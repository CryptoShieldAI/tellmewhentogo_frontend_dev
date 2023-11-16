import React, { useCallback, useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { AppContext } from 'next/app'
import { Button } from '@mui/material'
import ChangeModal from './changeModal'
import actions from 'src/@core/store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/@core/store/types/global.types';
import { wrapper } from 'src/@core/store';
import { initializeUser } from 'src/@core/serverSideProps';
import { User } from 'src/@core/interfaces';

const btnStyle = {
    backgroundColor: '#9155FD',
    color: 'white !important'
}





const User = () => {
    const [emailSearchValue, setEmailSearchValue] = useState<string>("")
    const [roleSearchValue, setRoleSearchValue] = useState<number | undefined>(undefined)
    const [modalState, setModalState] = useState<boolean>(false)
    const [selectUpdateUser, setSelectUpdateUser] = useState<User>()

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actions.getRoleList())

    }, [dispatch])

    useEffect(() => {
        dispatch(actions.getUserList(emailSearchValue, roleSearchValue))
    }, [emailSearchValue, roleSearchValue, dispatch])

    const roleList = useSelector((state: RootState) => state.user.roles)
    const userList = useSelector((state: RootState) => state.user.users)

    const handleEmailSearch = (event: any) => {
        // setTempSearchValue([{ id: 0, username: '', role: '', balance: 0 }])
        setEmailSearchValue(event.target.value)
    }

    const handleRoleSearch = (event: any) => {

        setRoleSearchValue(event.target.value)
    }

    const handleUpdate = useCallback(async (idx: number) => {
        const selectedUser = userList[idx]
        if (selectedUser) {
            setSelectUpdateUser(selectedUser)
        }
        setModalState(true)
    }, [userList])

    const updateUserFunc = async (id: number, role_id: number, balance: number) => {
        const result = await dispatch(actions.updateUser(id, role_id, balance))
        if (result === 'success') {
            await dispatch(actions.getUserList(emailSearchValue, roleSearchValue))
            setModalState(false)
        }
    }

    return (
        <TableContainer component={Paper} sx={{ padding: '20px' }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ fontSize: '20px !important' }} align='right'>Email</TableCell>
                        <TableCell><input id="email" placeholder='email' value={emailSearchValue} onChange={handleEmailSearch}></input></TableCell>
                        <TableCell sx={{ fontSize: '20px !important' }} align='right'>Role</TableCell>
                        <TableCell>
                            <select id="role" value={roleSearchValue} onChange={handleRoleSearch}>
                                <option value={-1}>all</option>
                                {roleList.map((role: any) =>
                                    <option value={role.id} key={role.id}>{role.role}</option>
                                )}
                            </select>
                        </TableCell>

                    </TableRow>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell align="right">UserName</TableCell>
                        <TableCell align="right">Role</TableCell>
                        <TableCell align="right">Balance</TableCell>
                        <TableCell align="right">Change</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {userList.map((user, index) => {
                        const role = roleList.filter((role) => role.id === user.role_id)[0]

                        return (<TableRow
                            key={user.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell >{index + 1}</TableCell>
                            <TableCell align='right' component="th" scope="row">
                                {user.email}
                            </TableCell>
                            <TableCell align="right">{role?.role}</TableCell>
                            <TableCell align="right">{user.balance.toFixed(2)}</TableCell>
                            <TableCell align='right'><Button sx={btnStyle} variant='contained' onClick={() => handleUpdate(index)}>Change</Button></TableCell>
                        </TableRow>)
                    })}
                </TableBody>
            </Table>
            <ChangeModal modalState={modalState} setModalState={setModalState} selectUpdateUser={selectUpdateUser} updateUserFunc={updateUserFunc} />
        </TableContainer>
    );
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async (ctx: AppContext) => {
    await initializeUser(ctx, store)
})

export default User