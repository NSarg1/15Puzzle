import { data } from "./table.data.js";
import tableActionTypes from "./table.types.js";

const INITIAL_STATE = {
    isLoading: false,
    tableData: data,
    name: "Narek",
};

const tableReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case tableActionTypes.UPDATE_TABLE:
            return {
                ...state,
                tableData: action.payload,
            };

        default:
            return state;
    }
};

export default tableReducer;

// action dispatch reducer ui
