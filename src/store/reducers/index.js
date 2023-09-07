import { combineReducers } from "redux";
import readSurahReducer from "./readSurahReducer";
import loadingAnimationReducer from "./loadingAnimationReducer";

export default combineReducers({
    readSurah: readSurahReducer,
    loadingAnimation: loadingAnimationReducer
});