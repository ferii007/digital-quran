import axios from 'axios';

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

export const dataSurah = (flag = null) => {
    return (dispatch) => {
        dispatch({
            type: 'data_surah',
            payload: flag
        })
    }
}


// Global Function
export const readDetailSurah = (noSurah) => async (dispatch) => {
    dispatch(loadingAnimation(true));

    setTimeout(async () => {
        try {
            const response = await axios.get(`https://equran.id/api/v2/surat/${noSurah}`);
            dispatch(readSurah({
                open: true,
                data: response.data.data,
            }));
            dispatch(loadingAnimation(false));
            console.log('response', response.data.data);
        } catch (error) {
            dispatch(loadingAnimation(false));
        }
    }, 1600);
  };