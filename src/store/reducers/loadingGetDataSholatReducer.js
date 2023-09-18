const loadingGetDataSholatReducer = (state = false, action) => {
    switch(action.type){
        case 'loading_get_data_sholat':
            return action.payload;
        default: 
            return state;
    }
}

export default loadingGetDataSholatReducer;