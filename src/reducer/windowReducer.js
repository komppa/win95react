/**
 * create windowkjcfxgoiuifdgfdshg.dfkslgdkjgirzh
 * move window
 * remove window
 * bring window front
 */

/**

{
    id,
    title,
    content,
    x,
    y,
    z,

}

 */



export const windowReducer = (state = [], action) => {
    switch (action.type) {
        case 'INIT_WINDOW':
            return action.data
        case 'CREATE_WINDOW':
            // Check how many windows there are, do not create all windows to the same place
            // (Plus one that top left has some spacing)
            const x = action.data.x ? action.data.x : (state.length + 1) * 40
            const y = action.data.y ? action.data.y : (state.length + 1) * 30
            const z = state.length + 1  // Z-index increment. The most recently created has highest z-index

            return [
                ...state, 
                { 
                    ...action.data,             // Keep other props in place
                    x,
                    y,
                    z
                }
            ]
        case 'DESTROY_WINDOW':
            return state.map(window => 
                window.id !== action.data.id && window
            )
        case 'MOVE_WINDOW':
            const id = action.data.id
            const windowToMove = state.find(w => w.id === id)
            const changedWindow = {
                ...windowToMove,
                x: action.data.x,
                y: action.data.y
            }
            
            return state.map(window => 
                window.id !== id ? window : changedWindow
            )
        case 'BRING_WINDOW':
            const wid = action.data.id
            const windowToBringForward = state.find(w => w.id === wid)
            const topZIndex = () => {
                let currentMax = 0
                for (let i = 0; i < state.length; i++) {
                    if (state[i].z > currentMax) {
                        currentMax = state[i].z
                    }
                }
                return currentMax
            }
            const bringedWindow = {
                ...windowToBringForward,
                z: topZIndex() + 1
            }
            return state.map(window => 
                window.id !== wid ? window : bringedWindow
            )
        default:
            return state
    }
}

export const initWindow = (windows_data) => {
    return {
        type: 'INIT_WINDOW',
        data: windows_data
    }
}

export const createWindow = (window_data) => {
    return {
        type: 'CREATE_WINDOW',
        data: window_data
    }
}

export const moveWindow = (window_id, x_pos, y_pos) => {
    return {
        type: 'MOVE_WINDOW',
        data: {
            id: window_id,
            x: x_pos,
            y: y_pos
        }
    }
}

export const bringWindowFront = (window_id) => {
    return {
        type: 'BRING_WINDOW',
        data: {
            id: window_id
        }
    }
}

export const destroyWindow = (window_id) => {
    return {
        type: 'DESTROY_WINDOW',
        data: {
            id: window_id
        }
    }
}