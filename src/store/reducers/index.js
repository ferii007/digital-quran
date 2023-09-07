import { combineReducers } from "redux";
import readSurahReducer from "./readSurahReducer";
import loadingAnimationReducer from "./loadingAnimationReducer";
import waitAnimationReducer from "./waitAnimationReducer";

export default combineReducers({
    readSurah: readSurahReducer,
    loadingAnimation: loadingAnimationReducer,
    waitAnimation: waitAnimationReducer,
});