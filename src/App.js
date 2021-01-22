import React from 'react'
import './App.scss';
import Card from './components/Card/index';
import {API_URL, API_KEY} from './api.js'
import Counter from './components/Counter'

console.log(API_URL, API_KEY);

class App extends React.Component {

    // constructor
    constructor() {
        super();

        this.state = {
            apiData: [],
            canals: [],
            // status: 0,
        };

        this.deleteItem = this.deleteItem.bind(this)

        // console.log('constructor')
    }

    componentDidMount() {
        // console.log('componentDidMount')
        // 4298cee904c2bf07d4c1a191530ce2bc
        fetch(`${API_URL}/discover/tv?api_key=${API_KEY}`)
            .then((response) => {
                this.setState({
                    status: response.status
                })
                return response.json()
            })
            .then((data) => {
                this.setState({
                    apiData: data.results,
                })
                this.setState({
                    canals: this.state.apiData.slice(0, 10),
                })
                // console.log(this.state);
            });
    }


    deleteItem = (item, stateKey) => {
        if (!this.state[stateKey]) {
            console.error('invalid stateKey');
            return;
        }
        const updateCanals = this.state[stateKey].filter(itm => itm.id !== item.id);
        this.setState({
            [stateKey]: updateCanals
        });
    }

    render() {
        // console.log('render')
        // console.log(this.state.error)
        return (
            <div className="App">
                <div className='cards'>
                    {
                        this.state.canals.map((canal) => {
                            return <Card key={canal.id} text={canal} deleteItem={this.deleteItem} itemArr={this.state.canals} stateKey='canals'/>
                        })
                    }
                </div>
                <Counter />
            </div>
        );
    }
}

export default App;
