
export const readSurah = (flag = null) => {
    return (dispatch) => {
        if (flag == null) {
            dispatch({
                type: 'unread_surah',
                payload: flag
            })
        }else {
            dispatch({
                type: 'read_surah',
                payload: flag
            })
        }
    }
}

export const loadingAnimation = (flag = null) => {
    return (dispatch) => {
        dispatch({
            type: 'loading_animation',
            payload: flag
        })
    }
}

export const waitAnimation = (flag = null) => {
    return (dispatch) => {
        dispatch({
            type: 'wait_animation',
            payload: flag
        })
    }
}