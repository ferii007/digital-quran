const loadingAnimationReducer = (state = false, action) => {
    switch(action.type){
        case 'loading_animation':
            return action.payload;
        default: 
            return state;
    }
}

export default loadingAnimationReducer;