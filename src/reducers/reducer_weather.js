import { FETCH_WEATHER } from "../actions";

export default function (state = [], action) {
    console.log('Action received', action);
    switch (action.type) {
        case FETCH_WEATHER:
            // return state.concat([action.payload.data]);
            return [action.payload.data, ...state]; // we have not mutated our state instead we have returned new object
    }
    return state;
}