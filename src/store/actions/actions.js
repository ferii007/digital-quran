
export const readSurah = (flag) => {
    return (dispatch) => {
        dispatch({
            type: 'read_surah',
            payload: flag
        })
    }
}