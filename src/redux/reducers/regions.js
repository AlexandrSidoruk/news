const initialState = {
    region: " "
}

const regions =  (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_REGION':
            return{
                ...state,
                region: action.payload
            }
        default:
            return state;
    }
}

export default regions;