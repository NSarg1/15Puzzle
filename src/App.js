import React, { Component } from 'react';
import { data } from './RndNumGenerator';
import TileContainer from './components/TileContainer/TileContainer';
import Welcome from './components/WelcomePage/Welcome';
import GameInit from './components/GameInit/GameInit';

class App extends Component {
    constructor() {
        super();
        this.state = {
            Welcome: {
                intructionShow: null,
                start: false
            },
            table: data
        };
    }

    componentDidMount() {
    }

    gameReset = () => {
        let rndNum, rndNumArr, doesExist;
        rndNumArr = [];
        const data = [
            { id: 0, num: 1, animate: null },
            { id: 1, num: 2, animate: null },
            { id: 2, num: 3, animate: null },
            { id: 3, num: 4, animate: null },
            { id: 4, num: 5, animate: null },
            { id: 5, num: 6, animate: null },
            { id: 6, num: 7, animate: null },
            { id: 7, num: 8, animate: null },
            { id: 8, num: 9, animate: null },
            { id: 9, num: 10, animate: null },
            { id: 10, num: 11, animate: null },
            { id: 11, num: 12, animate: null },
            { id: 12, num: 13, animate: null },
            { id: 13, num: 14, animate: null },
            { id: 14, num: 15, animate: null },
            { id: 15, num: 16, animate: null }
        ];

        const rndNumGenerator = () => {
            rndNum = Math.floor(Math.random() * 16 + 1);
            doesExist = rndNumArr.find(el => el === rndNum);

            if (doesExist === undefined) {
                rndNumArr.push(rndNum);
            } else {
                return rndNumGenerator();
            }
        };
        for (let i = 0; i < 16; i++) {
            rndNumGenerator();
        }

        data.forEach((el, ind) => {
            if (rndNumArr[ind] === 16) {
                rndNumArr[ind] = null;
            }
            el.num = rndNumArr[ind];
        });

        this.setState({ table: data });
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
            nullIndex - tileIndex === 1 ||
            nullIndex - tileIndex === 4 ||
            tileIndex - nullIndex === 1 ||
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
        console.log(Welcome);
        this.setState({ Welcome: Welcome });
    };

    render() {
        return (
            <div className="App">
                <GameInit gameReset={this.gameReset} start={this.state.Welcome.start}/>
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
