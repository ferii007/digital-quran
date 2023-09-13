const INITIAL_STATE = {
    lokasi: null,
    date: null,
    semuaJadwal: [],
    jadwalSholat: [],
}


const dataPrayTimeReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'data_pray_time':
            return action.payload;
        default: 
            return state;
    }
}

export default dataPrayTimeReducer;