import { ChangeEvent, MouseEvent, ReactNode, useState } from 'react'
import Link from 'next/link'
import { useDispatch } from 'react-redux'

import {
  Box,
  Button,
  TextField,
  InputLabel,
  Typography,
  IconButton,
  CardContent,
  FormControl,
  OutlinedInput,
  InputAdornment,
  Divider
} from '@mui/material'
import { styled } from '@mui/material/styles'
import MuiCard, { CardProps } from '@mui/material/Card'
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'
import FooterIllustrationsV1 from 'src/views/pages/auth/FooterIllustration'

import actions from 'src/@core/store/actions'
import useFormValidation from 'src/@core/hooks/useFormValidation'
import validateLogin from '../../@core/validator/validateLogin'

interface State {
  email: string
  password: string
  showPassword: boolean
}

const LinkStyled = styled('a')(({ theme }) => ({
  fontSize: '0.875rem',
  textDecoration: 'none',
  color: theme.palette.primary.main
}))

const Card = styled(MuiCard)<CardProps>(({ theme }) => ({
  [theme.breakpoints.up('sm')]: { width: '28rem' }
}))

const LoginPage = () => {
  const [loginFormValues, setLoginFormValues] = useState<State>({
    email: '',
    password: '',
    showPassword: false
  })

  const dispatch = useDispatch()

  const handleChange = (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
    setLoginFormValues({ ...loginFormValues, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setLoginFormValues({ ...loginFormValues, showPassword: !loginFormValues.showPassword })
  }

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  const loginFunction = () => {
    dispatch(
      actions.loginUser({
        email: loginFormValues.email,
        password: loginFormValues.password
      })
    )
  }

  const { errors, handleSubmit } = useFormValidation(loginFormValues, validateLogin, loginFunction)

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
              Welcome to {themeConfig.templateName}!
            </Typography>
          </Box>

          <form noValidate autoComplete='off' onSubmit={e => e.preventDefault()}>
            <TextField
              autoFocus
              fullWidth
              id='email'
              label='Email'
              sx={{ marginBottom: 4 }}
              onChange={handleChange('email')}
              error={Boolean(errors.email)}
            />

            <FormControl fullWidth>
              <InputLabel htmlFor='auth-login-password'>Password</InputLabel>

              <OutlinedInput
                label='Password'
                value={loginFormValues.password}
                id='auth-login-password'
                onChange={handleChange('password')}
                type={loginFormValues.showPassword ? 'text' : 'password'}
                error={Boolean(errors.password)}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      edge='end'
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      aria-label='toggle password visibility'
                    >
                      {loginFormValues.showPassword ? <EyeOutline /> : <EyeOffOutline />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>

            <Divider />

            <Button fullWidth size='large' variant='contained' sx={{ marginBottom: 7 }} onClick={handleSubmit}>
              Login
            </Button>

            <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Typography variant='body2' sx={{ marginRight: 2 }}>
                New on our platform?
              </Typography>

              <Typography variant='body2'>
                <Link passHref href='/register'>
                  <LinkStyled>Create an account</LinkStyled>
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

LoginPage.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

export default LoginPage
