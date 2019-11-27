import React from 'react';

const WinPage = () => {
    return (
        <div className="WinPage">
        <div className="WinPage_title">Congrats! <br/> You have won.</div>
            <figure className="WinPage_image">
                <img src={require('../../sass/assets/win.png')} alt="Congrutulation" />
                <figcaption className="fig">Play Again</figcaption>
            </figure>
        </div>
    );
};

export default WinPage;
