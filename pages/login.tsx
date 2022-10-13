import { Typography } from '@mui/material';
import React from 'react'
import Link from 'next/link';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


type CopyProps = {
    site: string,
    sx?: object,
}

function Copyright(props: CopyProps) {
    return (
        <Typography>
            {'Copyright ©️ '}
            <Link color='inherit' href={props.site}>
                {props.site} 
            </Link> {' '}
            { new Date().getFullYear() }
            { '.' }
        </Typography>
    )
}

const theme = createTheme();

export default function LoginPage() {
  return (
    <ThemeProvider theme={theme}>
        <Container>
            <CssBaseline />
                <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItens: 'center' }}>
                    <Typography component='h1' variant='h5'>
                        Login
                    </Typography>
                </Box>
                <Box component='form' onSubmit={(e) => {console.log('OK! Enviou.')}}>
                    <TextField margin='normal' required fullWidth id='email' label='Digite o e-mail' name='email' autoComplete='email' autoFocus />
                    <TextField margin='normal' required fullWidth id='password' type='password' label='Digite a senha' name='password' autoComplete='current-password' autoFocus />
                </Box>
        </Container>
        <div>Login Page - C6 bank</div>
            
        <Copyright site='www.avanade.com.br'></Copyright>

    </ThemeProvider>
  )
};

