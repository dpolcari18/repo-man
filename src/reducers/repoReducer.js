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
        case 'REMOVE_REPOS': 
            return {
                ...state, 
                repos: state.repos.filter(repo => !state.checkedRepos.includes(repo.name))
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
        case 'CLEAR_CHECKED_REPOS':
            return {
                ...state,
                checkedRepos: []
            }
        default: 
            return state
    }
}

export default repoReducer