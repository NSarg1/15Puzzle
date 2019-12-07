import React, { Component } from 'react';
import { data } from './RndNumGenerator';
import TileContainer from './components/TileContainer/TileContainer';
import Welcome from './pages/WelcomePage/Welcome';
import GameInit from './components/GameInit/GameInit';
import WinPage from './pages/WinPage/WinPage';

class App extends Component {
    constructor() {
        super();
        this.state = {
            didWin: false,
            Welcome: {
                intructionShow: null,
                start: false,
            },
            table: data,
        };
    }

    componentDidUpdate() {
        if (this.state.didWin === false) {
            this.winCheker();
        }
    }
    
    gameReset = () => {
        let rndNumArr = [];
        const data = [...this.state.table];

        const rndNumGenerator = arr => {
            let rndNum = Math.floor(Math.random() * 16 + 1);
            let doesExist = arr.find(el => el === rndNum);

            if (doesExist === undefined) {
                arr.push(rndNum);
            } else {
                return rndNumGenerator(arr);
            }
            return arr;
        };

        for (let i = 0; i < 16; i++) {
            rndNumGenerator(rndNumArr);
        }

        data.forEach((el, ind) => {
            if (rndNumArr[ind] === 16) {
                rndNumArr[ind] = null;
            }
            el.num = rndNumArr[ind];
        });

        this.setState({ table: data, didWin: false });
    };

    setToNull = () => {
        let table = [...this.state.table];
        table.forEach(el => {
            el.animate = null;
        });
        this.setState({ table: table });
    };

    changeNum = id => {
        let tileIndex = this.state.table.findIndex(el => {
            return el.id === id;
        });
        const table = [...this.state.table];
        const nullIndex = this.state.table.findIndex(el => {
            return el.num === null;
        });

        if (
            (nullIndex - tileIndex === 1 && tileIndex !== 3 && tileIndex !== 7 && tileIndex !== 11) ||
            nullIndex - tileIndex === 4 ||
            (tileIndex - nullIndex === 1 && tileIndex !== 4 && tileIndex !== 8 && tileIndex !== 12) ||
            tileIndex - nullIndex === 4
        ) {
            this.setToNull();
            table[nullIndex].num = table[tileIndex].num;
            if (nullIndex - tileIndex === 1) table[nullIndex].animate = 'slideToLeft';
            if (nullIndex - tileIndex === 4) table[nullIndex].animate = 'slideToBottom';
            if (tileIndex - nullIndex === 1) table[nullIndex].animate = 'slideToRight';
            if (tileIndex - nullIndex === 4) table[nullIndex].animate = 'slideToTop';

            this.setState({ table: table });
            table[tileIndex].num = null;
        }
    };

    toggleInstruction = () => {
        let Welcome = { ...this.state.Welcome };
        Welcome.intructionShow = !this.state.Welcome.intructionShow;
        this.setState({ Welcome: Welcome });
    };

    gameInit = () => {
        let Welcome = { ...this.state.Welcome };
        Welcome.start = true;
        this.setState({ Welcome: Welcome });
    };

    winCheker = () => {
        let data = [...this.state.table];
        let isTrueArr = [];
        data.pop();
        data.forEach(el => {
            isTrueArr.push(el.num - 1 === el.id);
        });

        const didWin = isTrueArr.reduce((acc, cur) => {
            return acc + cur;
        });

        if (didWin === 15) {
            this.setState({ didWin: true });
        }
    };

    render() {
        return (
            <div className="App">
                {this.state.didWin === true ? <WinPage gameReset={this.gameReset} /> : null}
                <GameInit gameReset={this.gameReset} start={this.state.Welcome.start} />
                {this.state.Welcome.start === false ? (
                    <Welcome
                        gameInit={this.gameInit}
                        doesShow={this.state.Welcome.intructionShow}
                        click={this.toggleInstruction}
                    />
                ) : null}
                <TileContainer
                    table={this.state.table}
                    click={this.changeNum}
                    start={this.state.Welcome.start}
                />
            </div>
        );
    }
}

export default App;
