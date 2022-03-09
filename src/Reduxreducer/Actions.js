import {actions} from './ActionTypes'

export const additem = (todoItem) => {
    return {
        type: actions.ADD_TODO_ITEM,
        value: todoItem,
        newid : new Date().valueOf()
    }
}

export const removeitem = (todoItemId) => {
    return {
        type: actions.REMOVE_TODO_ITEM,
        value: todoItemId
    }
}

export const completed = (todoItemId) => {
    return {
        type: actions.TOGGLE_COMPLETED,
        value: todoItemId
    }
}