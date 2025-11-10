import React from "react";

import { connect } from "react-redux";
import { updateTable } from "../../../redux/table//table.actions.js";

const Tile = (props) => {
    const { num, id, animate } = props;

    let classes;
    if (num === null) {
        classes = `item-${num}`;
    } else {
        classes = `item item-${num} ${animate}`;
    }

    const setToNull = (tableData) => {
        let table = [...tableData];
        table.forEach((el) => {
            el.animate = null;
        });
        return table;
    };

    const changeNum = (id) => {
        // Vibrate on any tile touch for immediate feedback
        if (navigator.vibrate) {
            navigator.vibrate(30); // Light vibration on touch
        }

        const table = [...props.table];
        let tileIndex = table.findIndex((el) => {
            return el.id === id;
        });
        const nullIndex = table.findIndex((el) => {
            return el.num === null;
        });

        if (
            (nullIndex - tileIndex === 1 && tileIndex !== 3 && tileIndex !== 7 && tileIndex !== 11) ||
            nullIndex - tileIndex === 4 ||
            (tileIndex - nullIndex === 1 && tileIndex !== 4 && tileIndex !== 8 && tileIndex !== 12) ||
            tileIndex - nullIndex === 4
        ) {
            // Add stronger haptic feedback for valid tile move
            if (navigator.vibrate) {
                navigator.vibrate(50); // Stronger vibration for successful move
            }

            const newTable = setToNull(table);
            newTable[nullIndex].num = newTable[tileIndex].num;
            if (nullIndex - tileIndex === 1) newTable[nullIndex].animate = "slideToLeft";
            if (nullIndex - tileIndex === 4) newTable[nullIndex].animate = "slideToBottom";
            if (tileIndex - nullIndex === 1) newTable[nullIndex].animate = "slideToRight";
            if (tileIndex - nullIndex === 4) newTable[nullIndex].animate = "slideToTop";

            newTable[tileIndex].num = null;
            props.updateTable(newTable);
        }
    };

    return (
        <div className="Tile" onClick={changeNum.bind(this, id)}>
            <div className={classes}>
                <div className="Tile_num">{num}</div>
            </div>
        </div>
    );
};
const mapStateToProps = (state) => ({
    table: state.table.tableData,
});

const mapDispatchToProps = (dispatch) => ({
    updateTable: (newTable) => dispatch(updateTable(newTable)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tile);
