const initialState = {
    todos: [],
    showLoader: true
};

const Reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'HIDE_LOADER':
            return {
                ...state,
                showLoader: false
            };
        case 'GET_TODOS':
            return {
                ...state,
                todos: action.todos,
            };
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, action.todo]
            };
            case 'EDIT_TODO':
                let editId = state.todos.findIndex(el => el._id === action.data._id);
                let pushData = [...state.todos];
                pushData[editId] = action.data
                return {
                    ...state,
                    todos: pushData
                };    
        case 'DELETE_TODO':
            let filtered = state.todos.filter(el => el._id !== action.id);
            return {
                ...state,
                todos: filtered
            };
        case 'CLEAR_TODOS':
            return {
                ...state,
                todos: []
            };

        default:
            return state
    }
};

export default Reducer
