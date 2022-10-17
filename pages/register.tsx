// Dúvidas
/*
1 - quando aperta o botão enviar a segunda vez não aparece o snackbar
2 - configurar o show/hide do password 
*/

import React, { FormEvent, useEffect, useState } from 'react';
import {
  ThemeProvider,
	createTheme,
  Container,
  CssBaseline,
  Box,
  Typography,
  TextField,
  FormControlLabel,
  Button,
  Checkbox,
} from "@mui/material";
import Copyright from '../components/utils/Copyright';
import Snackbar from '../components/utils/Snackbar';

export default function RegisterPage() {

  const [name, setName] = useState<string | undefined | null | FormDataEntryValue>('');
  const [email, setEmail] = useState<string | FormDataEntryValue | undefined>('');
  const [password, setPassword] = useState<string | undefined | null | FormDataEntryValue>('');
  const [confirmPassword, setConfirmPassword] = useState<string | undefined | null | FormDataEntryValue>('');
  const [isValidPassword, setIsValidPassword] = useState<boolean>(true);
  const [open, setOpen] = useState<boolean>(false)
  
  const theme = createTheme();
  
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setName(data.get('name'));
    setEmail(data.get('email'));
    setPassword(data.get('password'));
    setConfirmPassword(data.get('confirmPassword'));
    validPassword(data.get('password'), data.get('confirmPassword'));
  }

  const validPassword = function(value1: FormDataEntryValue | null, value2: FormDataEntryValue | null) {
    const isValidPassword = value1 == value2;
    if (isValidPassword) {
      setIsValidPassword(true)
    } else {
      setIsValidPassword(false)
    }
  }
  
  useEffect(() => {
    if (!isValidPassword) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [password, confirmPassword])

  
  
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <CssBaseline />
        <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography component='h1' variant='h5'>
            Cadastrar
          </Typography>
        </Box>
        <Box component='form' onSubmit={handleSubmit}>
          
          <TextField margin='normal' required fullWidth id='name' label='Digite o seu nome' name='name' autoFocus />

          <TextField margin='normal' required fullWidth id='email' label='Digite o e-mail' name='email' autoComplete='email' autoFocus />

					<TextField margin='normal' required fullWidth id='password' type='password' label='Digite a senha' name='password' autoComplete='current-password' autoFocus />
					
          <TextField margin='normal' required fullWidth id='confirmPassword' type='password' label='Confirme a senha' name='confirmPassword' autoComplete='confirmPassword' autoFocus />
					
          <FormControlLabel control={<Checkbox value='remember' color='primary' />} label='Aceito os termos ...' />
					
          <Button
						type='submit'
						fullWidth 
						variant='contained'
						sx={{mt: 3, mb: 2}}
						>
						Entrar
					</Button>
        </Box>
        <Box>
					<Copyright site='www.avanade.com.br' sx={{ mt: 8, mb: 4}}></Copyright>
        </Box>
        { open && <Snackbar 
          severity='error'
          open={open}
          hide={6}
          message='As senhas não correspondem...'
        />}
      </Container>
    </ThemeProvider>
  )
};
