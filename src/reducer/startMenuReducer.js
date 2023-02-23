export const startMenuReducer = (state = false, action) => {
    switch (action.type) {
        case 'CLOSE_MENU' || 'OPEN_MENU' :
            return action.data
        case 'TOGGLE_MENU':
            return state ? false : true
        default:
            return state
    }
}

export const openStartMenu = () => {
    return {
        type: 'OPEN_MENU',
        data: true
    }
}

export const closeStartMenu = () => {
    return {
        type: 'CLOSE_MENU',
        data: false
    }
}

export const toggleStartMenu = () => {
    return {
        type: 'TOGGLE_MENU',
        data: null
    }
}
