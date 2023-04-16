import { combineReducers } from "redux";
import {
    PlatformReducer,
    selectedPlatformReducer,
    selectedTypeReducer,
    TypeReducer
 
} from "./Reducer";

const reducer = combineReducers({
    allPlatforms: PlatformReducer,
    platform: selectedPlatformReducer,
    allTypes:TypeReducer,
    types:selectedTypeReducer,

});
export default reducer;
