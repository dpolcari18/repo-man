const repoReducer = ( state = {
    repos: []
}, action) => {
    switch(action.type) {
        case 'ADD_REPOS':
            return {
                ...state,
                repos: action.repos
            }
        default: 
            return state
    }
}

export default repoReducer