import React from 'react';

const GameInit = ({ gameReset, start }) => {
    let style = ['GameInit'];
    if (start) {
        style.push('slideFromTop');
    }
    style = style.join(' ');

    console.log(`This is GamInit style ${style}`);

    return (
        <div className={style}>
            <div className="GameInit_btn" onClick={() => gameReset()}>
                Start again
            </div>
        </div>
    );
};

export default GameInit;
