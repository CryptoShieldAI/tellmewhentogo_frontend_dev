import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Stack } from '@mui/material'
import { useSelector } from 'react-redux';
import { RootState } from 'src/@core/store/types/global.types';

//eslint-diable
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: '10px',
    height: 300
};

const titleStyle = {
    color: 'black',
    fontSize: '20px'
}

export default function UserDataChangeModal(props: any) {
    const { modalState, setModalState, selectUpdateUser, updateUserFunc } = props
    const [selectedRole, setSelectedRole] = useState<number>()
    const [balance, setBalance] = useState<number>()

    useEffect(() => {
        setSelectedRole(selectUpdateUser?.role_id)
        setBalance(selectUpdateUser?.balance)
    }, [selectUpdateUser])


    const handleClose = () => setModalState(false);
    const roleList = useSelector((status: RootState) => status.user.roles)

    const handleRoleChange = (event: any) => {
        setSelectedRole(event.target.value)
    }
    const handleBalance = (event: any) => {
        setBalance(event.target.value)
    }
    const onUpdateUser = async () => {
        updateUserFunc(selectUpdateUser.id, selectedRole, balance)
    }

    return (
        <div>
            <Modal
                open={modalState}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className='modal-wrapper' sx={style}>
                    <Typography pb={5} id="modal-modal-title" variant="h6" component="h2">
                        Please change user information.
                    </Typography>
                    {/* <Stack pb={3} direction={'row'} justifyContent={"space-between"} alignItems={'center'}>
                        <Typography sx={titleStyle}>Id</Typography>
                        <input value={selectUpdateUser?.id} disabled />
                    </Stack> */}
                    <Stack pb={3} direction={'row'} justifyContent={"space-between"} alignItems={'center'}>
                        <Typography sx={titleStyle}>email</Typography>
                        <input value={selectUpdateUser?.email} disabled />
                    </Stack>
                    <Stack pb={3} direction={'row'} justifyContent={"space-between"} alignItems={'center'}>
                        <Typography sx={titleStyle}>Role</Typography>
                        <select id="role" value={selectedRole} onChange={handleRoleChange}>
                            {roleList.map((role: any) =>
                                <option value={role.id} key={role.id}>{role.role}</option>
                            )}
                        </select>
                    </Stack>
                    <Stack pb={3} direction={'row'} justifyContent={"space-between"} alignItems={'center'}>
                        <Typography sx={titleStyle}>balance</Typography>
                        <input value={balance} onChange={handleBalance} />
                    </Stack>
                    <Button sx={{ color: 'white', backgroundColor: '#9155FD', float: 'right' }} variant='contained' onClick={onUpdateUser}>Update</Button>
                </Box>
            </Modal>
        </div>
    );
}
