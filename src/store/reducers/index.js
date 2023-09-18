import { combineReducers } from "redux";
import readSurahReducer from "./readSurahReducer";
import loadingAnimationReducer from "./loadingAnimationReducer";
import waitAnimationReducer from "./waitAnimationReducer";
import dataSurahReducer from "./dataSurahReducer";
import dataPrayTimeReducer from "./dataPrayTimeReducer";
import currentTimeReducer from "./currentTimeReducer";
import readDoaReducer from "./readDoaReducer";
import loadingGetDataSholatReducer from "./loadingGetDataSholatReducer";

export default combineReducers({
    readSurah: readSurahReducer,
    loadingAnimation: loadingAnimationReducer,
    waitAnimation: waitAnimationReducer,
    dataSurah: dataSurahReducer,
    dataPrayTime: dataPrayTimeReducer,
    currentTime: currentTimeReducer,
    readDoa: readDoaReducer,
    loadingGetDataSholat: loadingGetDataSholatReducer,
});