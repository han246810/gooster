
const initialState = {
    auth: false,
    user: {
        first_name: '',
        nick_name: ''
    },
    login: false
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case 'GET_USER_INFO_SUCCESS':
            return {
                ...state,
                auth: true,
                authFail: false,
                user: {
                    first_name: payload.first_name,
                    nick_name: payload.nick_name
                }
            }
        case 'LOGIN_SUCCESS':
            // once login is completed, we will store the secret and token to browser and use it later
            window.localStorage.setItem('secret', payload.secret)
            window.localStorage.setItem('token', payload.token)
            return {
                ...state,
                authFail: false,
                auth: true,
            }
            
        case 'LOGIN_FAIL':
            return {
                ...state,
                login: true,
                auth: false,
                authFail: true,
                user: {
                    first_name: '',
                    nickname: ''
                }
            }
        case 'UPDATE_USER_INFO_SUCCESS':
            return {
                ...state,
                auth: true,
                user: payload
            }
        case 'GET_USER_INFO_FAIL':
        case 'UPDATE_USER_INFO_FAIL':
            // wipe all token if token is invalid
            window.localStorage.removeItem('token')
            window.localStorage.removeItem('secret')
            return {
                ...state,
                auth: false,
                authFail: true,
                user: {
                    first_name: '',
                    nickname: ''
                }
            }
        default:
            return state;
    }
}