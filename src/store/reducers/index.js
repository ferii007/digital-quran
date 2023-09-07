import { combineReducers } from "redux";
import readSurahReducer from "./readSurahReducer";
import loadingAnimationReducer from "./loadingAnimationReducer";
import waitAnimationReducer from "./waitAnimationReducer";
import dataSurahReducer from "./dataSurahReducer";

export default combineReducers({
    readSurah: readSurahReducer,
    loadingAnimation: loadingAnimationReducer,
    waitAnimation: waitAnimationReducer,
    dataSurah: dataSurahReducer,
});