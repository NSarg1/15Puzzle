import React, { Component } from 'react';
import TileContainer from './components/TileContainer/TileContainer';
import data from './RndNumGenerator';

class App extends Component {
    constructor() {
        super();
        this.state = {
            table: data
        };
    }

    componentDidMount() {
        let table = [...this.state.table];
        table.findIndex(el => {
            return el.num === null;
        });
    }

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

    render() {
        return (
            <div className="App">
                <TileContainer table={this.state.table} click={this.changeNum} />
            </div>
        );
    }
}

export default App;
