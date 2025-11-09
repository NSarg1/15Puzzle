import React from 'react';
import winImage from '../../sass/assets/win.png';

const WinPage = ({gameReset}) => {
    return (
        <div className="WinPage">
        <div className="WinPage_title">Congrats! <br/> You have won.</div>
            <figure className="WinPage_image">
                <img src={winImage} alt="Congrutulation" />
                <figcaption className="fig" onClick={gameReset}>Play Again</figcaption>
            </figure>
        </div>
    );
};

export default WinPage;
