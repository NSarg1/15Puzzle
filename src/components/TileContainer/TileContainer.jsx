import React from 'react';
import Tile from './Tile/Tile';

const TileContainer = ({ table, click, start }) => {
    let initStyle = ['TileContainer'];
    if (start) {
        initStyle.push('zoomInCenter');
    }
    initStyle = initStyle.join(' ');
    return (
        <div className={initStyle}>
            <div className="TileContainer_box">
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
        </div>
    );
};

export default TileContainer;
