import tableActionTypes from "./table.types.js";




export const updateTable = (tableData) => ({
    type: tableActionTypes.UPDATE_TABLE,
    payload: tableData,
});
