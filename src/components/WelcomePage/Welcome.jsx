import React from 'react';

const Welcome = ({ doesShow, click, gameInit }) => {
    let instructionStyle = ['Welcome_instructions'];

    if (doesShow === true) {
        instructionStyle.push('slideIn');
    } else if (doesShow === false) {
        instructionStyle.push('slideOut');
    }

    instructionStyle = instructionStyle.join(' ');
    console.log(instructionStyle);
    return (
        <div className="Welcome">
            <div className="Welcome_title">
                <div className="btn btn-white" onClick={() => gameInit()}>
                    <h1 >Start</h1>
                </div>
                <div className="btn btn-white" onClick={() => click()}>
                    <h1 >Instructions</h1>
                </div>
            </div>
            <div className={instructionStyle}>
                <p>
                    Game rules are very simple. You must order all numbers in sequence. So the final
                    result must be 1-15, starting from top left corner.
                </p>
            </div>
        </div>
    );
};

export default Welcome;
