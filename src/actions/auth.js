import axios from 'axios'
import OAuth from 'oauth-1.0a'
import crypto from 'crypto'

const oauth = OAuth({
    consumer: {
        key: '8fb7ec71f8b4e1f2ec28d2f8c3f7785a',
        secret: 'af035f0f340e090d5b51870f9a168acd',
    },
    signature_method: 'HMAC-SHA1',
    hash_function(base_string, key) {
        return crypto
            .createHmac('sha1', key)
            .update(base_string)
            .digest('base64')
    },
})

// get email and password -> call login endpoint and get token + key
export const login = ({ email, password }) => async dispatch => {
    try {
        const result = await axios.post('https://api-qa.goopter.com/api/rest/v8/login', {
            data: {
                email,
                password
            }
        }, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        // If the RC is not equal to 200, we will treat it as fail
        if (result.data.RC !== 200) {
            dispatch({
                type: 'LOGIN_FAIL',
            })
        } else {
            dispatch({
                type: 'LOGIN_SUCCESS',
                payload: result.data.records
            })
        }
    } catch (error) {
        dispatch({
            type: 'LOGIN_FAIL',
        })
    }
}

export const getUserInfo = (badCall = false) => async dispatch => {
    // const header = oauth.toHeader(oauth.authorize(request_data, token)),

    const key = window.localStorage.getItem('token')
    const secret = window.localStorage.getItem('secret')


    // if (!key || !secret) {
    //     alert('You need to login first!')
    //     return
    // }

    const token = {
        key,
        secret: secret + (badCall ? "1231231231231" : '')
    }

    const request_data = {
        url: 'https://api-qa.goopter.com/api/rest/v7/customerinfo',
        method: 'GET',
        data: {},
    }
    const headers = oauth.toHeader(oauth.authorize(request_data, token))
    axios.get('https://api-qa.goopter.com/api/rest/v7/customerinfo', {
        headers
    }).then(result => {
        if (result.data.RC !== 200) {
            dispatch({
                type: 'GET_USER_INFO_FAIL',
            })

        } else {
            dispatch({
                type: 'GET_USER_INFO_SUCCESS',
                payload: result.data.records
            })
        }

    }).catch(err => {
        console.log(err)
        dispatch({
            type: 'GET_USER_INFO_FAIL',
        })
    })

}

export const updateUserInfo = ({
    first_name,
    nick_name
}) => dispatch => {


    const key = window.localStorage.getItem('token')
    const secret = window.localStorage.getItem('secret')


    // if (!key || !secret) {
    //     alert('You need to login first!')
    //     return
    // }

    const token = {
        key,
        secret
    }


    const request_data = {
        url: 'https://api-qa.goopter.com/api/rest/v7/customerinfo',
        method: 'POST',
        data: {},
    }

    axios.post('https://api-qa.goopter.com/api/rest/v7/customerinfo', {
        nick_name,
        first_name
    }, {
        headers: oauth.toHeader(oauth.authorize(request_data, token))
    }).then(res => {
        if (res.data.RC !== 200) {
            dispatch({
                type: 'UPDATE_USER_INFO_FAIL',
            })
        } else {
            dispatch({
                type: 'UPDATE_USER_INFO_SUCCESS',
                payload: {
                    nick_name,
                    first_name
                }
            })
        }
    }).catch(err => { })
}