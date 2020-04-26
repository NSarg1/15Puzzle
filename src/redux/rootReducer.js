import { combineReducers } from "redux";

import tableReducer from "./table/table.reducer.js";

const rootReducer = combineReducers({
    table: tableReducer,
});

export default rootReducer;
