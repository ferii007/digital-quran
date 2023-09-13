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

export const readDoa = (flag = null) => {
    return (dispatch) => {
        if (flag == null) {
            dispatch({
                type: 'unread_doa',
                payload: flag
            })
        }else {
            dispatch({
                type: 'read_doa',
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
export const getJadwalSholatAPI = (dateSlashFormat, cityId = 1219) => async (dispatch) => {
    try {
        const response = await axios.get(`https://api.myquran.com/v1/sholat/jadwal/${cityId}/${dateSlashFormat}`)
        console.log('response2', response)
        
        const dataResponse = response.data.data;

        const dataJadwal = {
            imsak: dataResponse.jadwal.imsak,
            subuh: dataResponse.jadwal.subuh,
            terbit: dataResponse.jadwal.terbit,
            dhuha: dataResponse.jadwal.dhuha,
            dzuhur: dataResponse.jadwal.dzuhur,
            ashar: dataResponse.jadwal.ashar,
            maghrib: dataResponse.jadwal.maghrib,
            isya: dataResponse.jadwal.isya,
        }

        const dataSholat = {
            subuh: dataResponse.jadwal.subuh,
            dzuhur: dataResponse.jadwal.dzuhur,
            ashar: dataResponse.jadwal.ashar,
            maghrib: dataResponse.jadwal.maghrib,
            isya: dataResponse.jadwal.isya,
        }

        const data = {
            lokasi: dataResponse.lokasi,
            date: dataResponse.jadwal.date,
            semuaJadwal: Object.entries(dataJadwal),
            jadwalSholat: Object.entries(dataSholat)
        }

        dispatch({
            type: 'data_pray_time',
            payload: data
        });
    } catch (error) {
        
    }
}

export const currentTime = () => async (dispatch) => {
    const intervalId = setInterval(() => {
        dispatch({
            type: 'current_time',
            payload: new Date()
        });
    }, 10000);
    
    return () => {
        clearInterval(intervalId);
    };
}

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
};