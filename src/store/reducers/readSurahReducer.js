const INITIAL_STATE = {
    open: false,
    data: {}
}


const readSurahReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'read_surah':
            return action.payload;
        case 'unread_surah': 
            return INITIAL_STATE
        default: 
            return state;
    }
}

export default readSurahReducer;