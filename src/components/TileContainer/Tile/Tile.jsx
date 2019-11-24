import React from 'react';

const Tile = ({ num, id, click, animate }) => {
    let classes;
    if (num === null) {
        classes = `item-${num} ${animate}`;
    } else {
        classes = `item item-${num} ${animate}`;
    }

    return (
        <div className="Tile" onClick={() => click(id)}>
            <div className={classes}>
                <div className="Tile_num">{num}</div>
            </div>
        </div>
    );
};

export default Tile;
