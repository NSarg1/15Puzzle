import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TileContainer from "../components/TileContainer/TileContainer";
import Welcome from "../pages/WelcomePage/Welcome";
import GameInit from "../components/GameInit/GameInit";
import WinPage from "../pages/WinPage/WinPage";
import { updateTable } from "../redux/table/table.actions.js";
import { generateSolvablePuzzle } from "../redux/table/table.data.js";

const App = () => {
    const [didWin, setDidWin] = useState(false);
    const [instructionShow, setInstructionShow] = useState(null);
    const [start, setStart] = useState(false);

    const table = useSelector((state) => state.table.tableData);
    const dispatch = useDispatch();

    const winChecker = () => {
        const data = [...table];
        const isTrueArr = [];
        data.pop();
        data.forEach((el) => {
            isTrueArr.push(el.num - 1 === el.id);
        });

        const won = isTrueArr.reduce((acc, cur) => {
            return acc + cur;
        });

        if (won === 15) {
            // Add haptic feedback for winning
            if (navigator.vibrate) {
                navigator.vibrate([200, 100, 200, 100, 300]); // Celebratory vibration pattern
            }
            setDidWin(true);
        }
    };

    useEffect(() => {
        if (!didWin) {
            winChecker();
        }
    }, [table, didWin]);

    const gameReset = () => {
        const data = [...table];

        // Generate a new solvable puzzle
        const newPuzzle = generateSolvablePuzzle();

        // Update the data array with the new solvable puzzle
        data.forEach((el, ind) => {
            el.num = newPuzzle[ind];
        });

        dispatch(updateTable(data));
        setDidWin(false);
    };

    const toggleInstruction = () => {
        setInstructionShow(!instructionShow);
    };

    const gameInit = () => {
        setStart(true);
    };

    console.log({ table });

    return (
        <div className="App">
            {didWin === true ? <WinPage gameReset={gameReset} /> : null}
            <GameInit gameReset={gameReset} start={start} />
            {start === false ? (
                <Welcome
                    gameInit={gameInit}
                    doesShow={instructionShow}
                    click={toggleInstruction}
                />
            ) : null}
            <TileContainer start={start} />
        </div>
    );
};

export default App;
