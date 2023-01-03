// NORMAL ROUTES (NOT NESTED)

import DASHBOARD from './routes.nested';

export const ROUTE_ACCESS_RULE = {
	public: 'public',
	private: 'private',
};

const LOG_IN = {
	INDEX: '/login',
};

const PASSWORD = {
	INDEX: '/password',
	FORGOT: '/password/forgot',
	RESET: '/password/reset/:token',
};

const SIGN_UP = {
	INDEX: '/register',
	TYPES: '/register',
	USER: '/register/user',
};

export const ROUTE_PATH = {
	HOME: '/',
	// ERROR: '/error/:code(404|403|500|session)',
	ERROR: '/error/:code',
	LOG_OUT: '/logout',
	LOG_IN,
	SIGN_UP,
	PASSWORD,
	DASHBOARD,
};
