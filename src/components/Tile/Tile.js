import React from 'react';

const Tile = ({ num, id, click, animate }) => {
    let classes;
    if (num === null) {
        classes = `item-${id} animated ${animate}`;
    } else {
        classes = `item item-${id} ${animate}`;
    }

    return (
        <div className="Tile" onClick={() => click(id)}>
            <div className={classes}>{num}</div>
        </div>
    );
};

export default Tile;
