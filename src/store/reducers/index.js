import { combineReducers } from "redux";
import readSurahReducer from "./readSurahReducer";

export default combineReducers({
    readSurah: readSurahReducer
});