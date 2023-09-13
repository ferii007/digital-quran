const INITIAL_STATE = {
    open: false,
    data: {}
}


const readDoaReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'read_doa':
            return action.payload;
        case 'unread_doa': 
            return INITIAL_STATE
        default: 
            return state;
    }
}

export default readDoaReducer;