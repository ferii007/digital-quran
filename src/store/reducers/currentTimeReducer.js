const currentTimeReducer = (state = new Date(), action) => {
    switch(action.type){
        case 'current_time':
            return action.payload;
        default: 
            return state;
    }
}

export default currentTimeReducer;