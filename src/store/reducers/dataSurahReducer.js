const dataSurahReducer = (state = [], action) => {
    switch(action.type){
        case 'data_surah':
            return action.payload;
        default: 
            return state;
    }
}

export default dataSurahReducer;