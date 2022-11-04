import React, { useEffect, useState, FormEvent } from 'react'
import Copyright from '../components/utils/Copyright';
import {
	Typography,
	ThemeProvider,
	createTheme,
	Container,
	CssBaseline,
	Box,
	TextField,
	FormControlLabel,
	Checkbox,
	Button,
	Snackbar,
} from '@mui/material';
import axios from 'axios';


const theme = createTheme();

export default function LoginPage() {

	const [contador, setContador] = useState(5);
	const [name, setName] = useState('');
	const [error, setError] = useState<boolean>(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [email, setEmail] = useState<string | FormDataEntryValue | undefined | null>('');
	const [password, setPassword] = useState<string | undefined | null | FormDataEntryValue>('');
	const [open, setOpen] = useState<boolean>(false)


	useEffect(()=>{
		if (contador == 0) {
			document.title = `Executando useEffect a primeira vez = ${contador}`;
		} else {
			document.title = `Executando useEffect a cada alteração = ${contador}`;	
		}
		console.log(`a cada chamada ${contador}`);
	}, [])

	// useEffect(() => {
	// 	setName(name);
	// 	console.log(name);
	// }, [name]);

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		// event.preventDefault(); // previne o formulario enviar o form (recarregar a página)
		const data = new FormData(event.currentTarget); // captura todos os campos da tag Form
		console.log(data.get('email'));
		setName(data.get('email'));
		setPassword(data.get('value'));
		axios.post('http://localhost:3000/auth/login', {
				email,
				password
			}).then((response) => {
				console.log(response)
				if (response.status == 200) {
					setOpen(true);

				}
			}).catch((error) => {
				console.log(error)
			})
	};
	
	useEffect(() => {
		if (password && password.length < 6) {
			setError(true);
			setErrorMessage('senha precisa ter no mínimo 6 digitos')
		} else {
			setError(false);
			

		}
	}, [password]);

	useEffect(() => {
		if (!error) {
			setErrorMessage('')
		}
	}, [error])
	
	return (
	<ThemeProvider theme={theme}>
			<Container>
				<CssBaseline />

				<Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
					<Typography component='h1' variant='h5'>
							Login
					</Typography>
				</Box>

					{`O state contador vale ${contador}`}
					<button onClick={() => setContador(contador + 1)}>Muda o Contador</button>

				<Box component='form' onSubmit={handleSubmit}>
					<TextField margin='normal' required fullWidth id='email' label='Digite o e-mail' name='email' autoComplete='email' autoFocus />
					<TextField margin='normal' required fullWidth id='password' type='password' label='Digite a senha' name='password' autoComplete='current-password' autoFocus />
					<FormControlLabel control={<Checkbox value='remember' color='primary' />} label='lembrar de mim' />
					<Button
						type='submit'
						fullWidth 
						variant='contained'
						sx={{mt: 3, mb: 2}}
						>
						Entrar
					</Button>
				</Box>
				<Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
					<div>Login Page - C6 bank</div>
					<Copyright site='www.avanade.com.br' sx={{ mt: 8, mb: 4}}></Copyright>
				</Box>
				{error && errorMessage}
				{open && <Snackbar
					open={open}
					hide={6}
					message='Usuário autenticado com sucesso!'
					/>}
			</Container>
					

	</ThemeProvider>
  )
};

