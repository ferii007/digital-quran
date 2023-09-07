const waitAnimationReducer = (state = false, action) => {
    switch(action.type){
        case 'wait_animation':
            return action.payload;
        default: 
            return state;
    }
}

export default waitAnimationReducer;