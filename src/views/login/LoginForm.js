import React from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import {useAuth} from '../../context/AuthContext';

import './LoginForm.scss';

function LoginForm() {
	const {login} = useAuth();

	const handleSubmit = (e) => {
		e.preventDefault();
		login();
	};

	return (
		<Form className='login-form' onSubmit={handleSubmit}>
			<h3>LOGIN</h3>

			<FormGroup>
				<Label>Email</Label>
				<Input type='text' />
			</FormGroup>

			<FormGroup>
				<Label>Password</Label>
				<Input type='password' />
			</FormGroup>

			<Button type='submit'>Login</Button>
		</Form>
	);
}

export default LoginForm;
