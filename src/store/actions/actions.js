import axios from 'axios';
import { saveDetailSurahToIndexedDB, getDetailSurahFromIndexedDB } from '../../components/helper/indexedDB';

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
const readSurahAPI = (noSurah) => async (dispatch) => {
    try {
        const response = await axios.get(`https://equran.id/api/v2/surat/${noSurah}`);
        dispatch(readSurah({
            open: true,
            data: response.data.data,
        }));
        dispatch(loadingAnimation(false));
        saveDetailSurahToIndexedDB(response.data.data)
        console.log('response', response.data.data);
    } catch (error) {
        dispatch(loadingAnimation(false));
    }
}

export const readDetailSurah = (noSurah) => async (dispatch) => {
    dispatch(loadingAnimation(true));

    try {
        getDetailSurahFromIndexedDB(noSurah).then((data) => {
            setTimeout(async () => {
                if (data.result !== undefined) {
                    dispatch(readSurah({
                        open: true,
                        data: data.result,
                    }));
                    dispatch(loadingAnimation(false));
                }else {
                    dispatch(readSurahAPI(noSurah))
                }
            }, 1600);
        });
    } catch (error) {
        dispatch(readSurahAPI(noSurah));
    }

    // setTimeout(async () => {
    //     try {
    //         const response = await axios.get(`https://equran.id/api/v2/surat/${noSurah}`);
    //         dispatch(readSurah({
    //             open: true,
    //             data: response.data.data,
    //         }));
    //         dispatch(loadingAnimation(false));
    //         saveDetailSurahToIndexedDB(response.data.data)
    //         console.log('response', response.data.data);
    //     } catch (error) {
    //         dispatch(loadingAnimation(false));
    //     }
    // }, 1600);
};