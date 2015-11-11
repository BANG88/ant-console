import request from './Resource';
import cookie from 'js-cookie';


export function loggedIn() {
	return cookie.getJSON('token')
}

export function login(data) {
	return request({
		url: '/login.login',
		data: data
	})
}

export function redirectToLogin(nextState, replaceState) {
	if (!loggedIn()) {
		replaceState({
			nextPathname: nextState.location.pathname
		}, '/login')
	}
}

export function redirectToDashboard(nextState, replaceState) {
	if (loggedIn()) {
		replaceState(null, '/')
	}
}
