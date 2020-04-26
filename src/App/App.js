import React, { Component } from "react";
import TileContainer from "../components/TileContainer/TileContainer";
import Welcome from "../pages/WelcomePage/Welcome";
import GameInit from "../components/GameInit/GameInit";
import WinPage from "../pages/WinPage/WinPage";

// REDUX TOOLS
import { connect } from "react-redux";
import { updateTable } from "../redux/table/table.actions.js";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            didWin: false,
            Welcome: {
                intructionShow: null,
                start: false,
            },
        };
    }

    componentDidUpdate() {
        if (this.state.didWin === false) {
            this.winCheker();
        }
    }

    gameReset = () => {
        let rndNumArr = [];
        const data = [...this.props.table];

        const rndNumGenerator = (arr) => {
            let rndNum = Math.floor(Math.random() * 16 + 1);
            let doesExist = arr.find((el) => el === rndNum);

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
        this.props.updateTable(data);
        this.setState({ didWin: false });
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
        let data = [...this.props.table];
        let isTrueArr = [];
        data.pop();
        data.forEach((el) => {
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
        const {
            Welcome: { intructionShow, start },
            didWin,
        } = this.state;

        console.log(this.props);

        return (
            <div className="App">
                {didWin === true ? <WinPage gameReset={this.gameReset} /> : null}
                <GameInit gameReset={this.gameReset} start={start} />
                {start === false ? (
                    <Welcome
                        gameInit={this.gameInit}
                        doesShow={intructionShow}
                        click={() => this.toggleInstruction}
                    />
                ) : null}
                <TileContainer start={start} />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    table: state.table.tableData,
});

const mapDispatchToProps = (dispatch) => ({
    updateTable: (newTable) => dispatch(updateTable(newTable)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
