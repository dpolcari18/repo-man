const repoReducer = ( state = {
    repos: [],
    checkedRepos: []
}, action) => {
    switch(action.type) {
        case 'ADD_REPOS':
            return {
                ...state,
                repos: action.repos
            }
        case 'ADD_CHECKED_REPO':
            return {
                ...state,
                checkedRepos: [...state.checkedRepos, action.checkedRepo]
            }
        case 'REMOVE_CHECKED_REPO':
            return {
                ...state,
                checkedRepos: state.checkedRepos.filter(repo => repo !== action.checkedRepo)
            }
        default: 
            return state
    }
}

export default repoReducer