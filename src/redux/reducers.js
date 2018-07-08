import {VisibilityFilters, ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER} from './actionTypes';
import {combineReducers} from 'redux';
const {SHOW_ALL} = VisibilityFilters;

// the syntax state = [] is defining a default value for state if it is absent or undefined
function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state
    }
};

function todos(state = [], action){
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if(index === action.index){
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    });
                };
                return todo;
            });
        default:
            return state
    }
};

// Basic boilerplate logic for the main reducer
    // It is a function that calls the reducers managing parts of the state and combines them into a single object
    //It doesn't need to know the complete initial state because the child reducers return their initial state with default values
// function todoApp(state = {}, action){
//     return {
//         visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//         todos: todos(state.todos, action)
//     };
// };

// We can use combineReducers utility from redux that does the above 
const todoApp = combineReducers({
    visibilityFilter,
    todos
});

export default todoApp;