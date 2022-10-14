import React, { useEffect, useState, FormEvent } from 'react'
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
import Link from 'next/link';


type CopyProps = {
    site: string,
    sx?: object,
}

function Copyright(props: CopyProps) {
    return (
        <Typography>
            {'Copyright ©️ - '}
            <Link color='inherit' href={props.site}>
                {props.site} 
            </Link> {' - '}
            { new Date().getFullYear() }
            { '.' }
        </Typography>
    )
}

const theme = createTheme();

export default function LoginPage() {

	const [contador, setContador] = useState(5);
	const [name, setName] = useState('');
	const [error, setError] = useState<boolean>('');
	const [errorMessage, setErrorMessage] = useState('');
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState('');


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
		event.preventDefault(); // previne o formulario enviar o form (recarregar a página)
		const data = new FormData(event.currentTarget); // captura todos os campos da tag Form
		console.log(data.get('email'));
		setName(data.get('email'));
		setPassword(data.get('value'));
	};
	
	useEffect(() => {
		if (!password || password.length < 6) {
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
			</Container>
					

	</ThemeProvider>
  )
};

