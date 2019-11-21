import React from 'react';
import './TileContainer.scss';

const TileContainer = ({ table, click }) => {
    
    return (
        <div className="TileContainer">
            {table.map(tile => {
                return (
                    <div className="item item--1" key={tile.id} onClick={() => click(tile.id)}>
                        {tile.num}
                    </div>
                );
            })}
        </div>
    );
};

export default TileContainer;
