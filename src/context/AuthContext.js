import React, {createContext, useContext, useState} from 'react';
import {Spinner} from 'reactstrap';

const AuthContext = createContext({});

function AuthContextProvider(props) {
	const {children} = props;

	const [isLoading, setIsLoading] = useState(false);
	const [isAuth, setIsAuth] = useState(false);

	function signup(formData) {}

	async function login(formData) {
		try {
			setIsLoading(true);
			setIsAuth(true);
		} catch (error) {
			console.log(error);
		}
		setIsLoading(false);
	}

	function logout() {
		setIsAuth(false);
	}

	const authContext = {
		isLoading,
		isAuth,
		signup,
		login,
		logout,
	};

	return (
		<AuthContext.Provider value={authContext}>
			{isAuth ? isLoading ? <Spinner></Spinner> : children : children}
		</AuthContext.Provider>
	);
}

// HOOK
const useAuth = () => useContext(AuthContext);

// HOC
export function withAuth(Component) {
	return (componentProps) => {
		const auth = useContext(AuthContext);

		return <Component auth={auth} {...componentProps} />;
	};
}

export {AuthContext, AuthContextProvider, useAuth};
