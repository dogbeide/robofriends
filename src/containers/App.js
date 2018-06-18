import React, { Component } from 'react';
import CardList from '../components/CardList';
import ErrorBoundary from '../components/ErrorBoundary';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                this.setState({ robots: users })
            })
    }

    onSearchChange = (e) => {
        this.setState({ searchfield: e.target.value })
    }
    
    render() {
        const { robots, searchfield } = this.state
        const filteredRobots = robots.filter(robot => (
            robot.name.toLowerCase().includes(searchfield.toLowerCase())
        ))

        return !robots.length ? (
            <img src="loading.gif" alt="Loading..."/>
        ) : (
            <div className="tc">
                <h1 className="f2">Robo Friends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundary>
                </Scroll>
            </div>
        )
    }
}

export default App;