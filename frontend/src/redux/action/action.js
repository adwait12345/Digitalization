import { ActionTypes } from "../Action-Types/action-type";

export const setPlatform = (Platform) => {
    // console.log(Platform)
    return {
        type: ActionTypes.SET_PLATFORM,
        payload: Platform,
    };
};

export const selectedPlatform = (sPlatform) => {
    return {
        type: ActionTypes.SELECTED_PLATFORM,
        payload: sPlatform,
    };
};

export const setType = (type) => {
    // console.log(Platform)
    return {
        type: ActionTypes.SET_TYPE,
        payload: type,
    };
};

export const selectedType = (sType) => {
    return {
        type: ActionTypes.SELECTED_TYPE,
        payload: sType,
    };
};
