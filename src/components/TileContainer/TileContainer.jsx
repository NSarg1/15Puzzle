import './TileContainer.scss';
import React from 'react';
import Tile from '../Tile/Tile';

const TileContainer = ({ table, click }) => {
    return (
        <div className="TileContainer">
            {table.map(tile => {
                return (
                    <Tile
                        key={tile.id}
                        click={click}
                        id={tile.id}
                        num={tile.num}
                        animate={tile.animate}
                    />
                );
            })}
        </div>
    );
};

export default TileContainer;
