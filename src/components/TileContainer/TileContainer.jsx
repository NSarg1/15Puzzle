import React from "react";
import Tile from "./Tile/Tile";

import { connect } from "react-redux";
import { updateTable } from "../../redux/table/table.actions.js";

const TileContainer = (props) => {
    const { table, start } = props;
    let initStyle = ["TileContainer"];
    if (start) {
        initStyle.push("zoomInCenter");
    }
    initStyle = initStyle.join(" ");

    return (
        <div className={initStyle}>
            <div className="TileContainer_box">
                {table.map((tile) => {
                    return <Tile key={tile.id} id={tile.id} num={tile.num} animate={tile.animate} />;
                })}
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

export default connect(mapStateToProps, mapDispatchToProps)(TileContainer);
