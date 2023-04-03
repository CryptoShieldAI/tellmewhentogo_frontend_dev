// ** React Imports
import { useState, ChangeEvent, MouseEvent, ReactNode } from 'react'

// ** Next Imports
import Link from 'next/link'

// ** MUI Components
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import { styled } from '@mui/material/styles'
import MuiCard, { CardProps } from '@mui/material/Card'
import InputAdornment from '@mui/material/InputAdornment'

import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Demo Imports
import FooterIllustrationsV1 from 'src/views/pages/auth/FooterIllustration'

import { useDispatch } from 'react-redux';
import actions from 'src/@core/store/actions'
import useFormValidation from 'src/@core/hooks/useFormValidation'
import validateRegister from '../../@core/validator/validateRegister'

interface State {
    email: string
    password: string
    showPassword: boolean
    passwordConfirm: string
    showPasswordConfirm: boolean
}

// ** Styled Components
const Card = styled(MuiCard)<CardProps>(({ theme }) => ({
    [theme.breakpoints.up('sm')]: { width: '28rem' }
}))

const LinkStyled = styled('a')(({ theme }) => ({
    fontSize: '0.875rem',
    textDecoration: 'none',
    color: theme.palette.primary.main
}))

const RegisterPage = () => {
    const [values, setValues] = useState<State>({
        email: '',
        password: '',
        showPassword: false,
        passwordConfirm: '',
        showPasswordConfirm: false
    })

    const dispatch = useDispatch();

    const handleChange = (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value })
    }
    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword })
    }
    const handleClickShowPasswordConfirm = () => {
        setValues({ ...values, showPasswordConfirm: !values.showPasswordConfirm })
    }
    const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
    }


    const registerFunction = () => {
        dispatch(actions.registerUser({
            email: values.email,
            password: values.password,
            passwordConfirm: values.passwordConfirm
        }))
    }

    const { errors, handleSubmit } = useFormValidation(values, validateRegister, registerFunction)

    return (
        <Box className='content-center'>
            <Card sx={{ zIndex: 1 }}>
                <CardContent sx={{ padding: theme => `${theme.spacing(12, 9, 7)} !important` }}>
                    <Box sx={{ mb: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography
                            variant='h6'
                            sx={{
                                ml: 3,
                                lineHeight: 1,
                                fontWeight: 600,
                                textTransform: 'uppercase',
                                fontSize: '1.5rem !important'
                            }}
                        >
                            {themeConfig.templateName}
                        </Typography>
                    </Box>
                    <Box sx={{ mb: 6 }}>
                        <Typography variant='h5' sx={{ fontWeight: 600, marginBottom: 1.5 }}>
                            Adventure starts here 🚀
                        </Typography>
                    </Box>
                    <form noValidate autoComplete='off' onSubmit={e => e.preventDefault()}>
                        <TextField fullWidth type='email' label='Email' sx={{ marginBottom: 4 }}
                            onChange={handleChange('email')}
                            error={Boolean(errors.email)}
                        />
                        <FormControl fullWidth>
                            <InputLabel htmlFor='auth-register-password'>Password</InputLabel>
                            <OutlinedInput
                                label='Password'
                                value={values.password}
                                id='auth-register-password'
                                onChange={handleChange('password')}
                                type={values.showPassword ? 'text' : 'password'}
                                error={Boolean(errors.password)}
                                endAdornment={
                                    <InputAdornment position='end'>
                                        <IconButton
                                            edge='end'
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            aria-label='toggle password visibility'
                                        >
                                            {values.showPassword ? <EyeOutline fontSize='small' /> : <EyeOffOutline fontSize='small' />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />

                        </FormControl>
                        <Divider />
                        <FormControl fullWidth>
                            <InputLabel htmlFor='auth-register-password'>Confirm</InputLabel>
                            <OutlinedInput
                                label='Password'
                                value={values.passwordConfirm}
                                id='auth-register-password-confirm'
                                onChange={handleChange('passwordConfirm')}
                                type={values.showPassword ? 'text' : 'password'}
                                error={Boolean(errors.passwordConfirm)}
                                endAdornment={
                                    <InputAdornment position='end'>
                                        <IconButton
                                            edge='end'
                                            onClick={handleClickShowPasswordConfirm}
                                            onMouseDown={handleMouseDownPassword}
                                            aria-label='toggle password visibility'
                                        >
                                            {values.showPasswordConfirm ? <EyeOutline fontSize='small' /> : <EyeOffOutline fontSize='small' />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <Divider />
                        <Button fullWidth size='large' type='submit' variant='contained' sx={{ marginBottom: 7 }}
                            onClick={handleSubmit}
                        >
                            Sign up
                        </Button>
                        <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
                            <Typography variant='body2' sx={{ marginRight: 2 }}>
                                Already have an account?
                            </Typography>
                            <Typography variant='body2'>
                                <Link passHref href='/pages/login'>
                                    <LinkStyled>Sign in instead</LinkStyled>
                                </Link>
                            </Typography>
                        </Box>
                    </form>
                </CardContent>
            </Card>
            <FooterIllustrationsV1 />
        </Box>
    )
}

RegisterPage.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

export default RegisterPage
