
const initialState = {
    records: [],
    banners: []
};

export default function(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case 'GET_LOCATION_SUCCESS': 
            return {
                ...state,
                location: payload.name || ''
            }
        case 'GET_BANNERS_SUCCESS':
            return {
                ...state,
                banners: payload
            }
        case 'GET_SHORTCUT_SUCCESS': 
            return {
                ...state,
                records: payload
            }
        default:
            return state;
    }
}