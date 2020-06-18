import axios from 'axios'


export const getShortCut = () => async dispatch => {
    try {
        const result = await axios.get('https://api-qa.goopter.com/api/v7/hs?city=1&lan=en', {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        dispatch({
            type: 'GET_SHORTCUT_SUCCESS',
            payload: result.data.records
        })
    } catch (error) {
        dispatch({
            type: 'GET_SHORTCUT_ERROR',
        })
    }
}
export const getBanners = () => async dispatch => {
    try {
        const result = await axios.get('https://api-qa.goopter.com/api/v7/hlst?latlon=49.213366,-122.988651&lan=ch&page=1&limit=20&city=1&c_id=1', {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        dispatch({
            type: 'GET_BANNERS_SUCCESS',
            payload: result.data.records
        })
    } catch (error) {
        dispatch({
            type: 'GET_BANNERS_ERROR',
        })
    }
}
export const getLocation = () => async dispatch => {
    try {
        const result = await axios.get('https://api-qa.goopter.com/api/v7/city?lan=en&cntry=1', {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        dispatch({
            type: 'GET_LOCATION_SUCCESS',
            payload: result.data.records[0]
        })
    } catch (error) {
        dispatch({
            type: 'GET_LOCATION_ERROR',
        })
    }
}