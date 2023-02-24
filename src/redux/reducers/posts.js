

const initialState = {
    items: [],
}

const posts =(state = initialState, action) => {
    switch (action.type) {
        case 'SET_POSTS' :
            return {
                ...state,
                items: action.payload,
            };
        case 'REMOVE_POSTS' :
            return {
                ...state,
            };
        default:
            return state;

    }
}

export default posts;