import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import CardList from '../components/CardList';
import ErrorBoundary from '../components/ErrorBoundary';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import { changeSearchField } from '../actions';


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: []
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                this.setState({ robots: users })
            });
    }
    
    render() {
        const { robots } = this.state
        const { searchField, onSearchChange } = this.props

        const filteredRobots = robots.filter(robot => (
            robot.name.toLowerCase().includes(searchField.toLowerCase())
        ))

        return !robots.length ? (
            <img src="loading.gif" alt="Loading..."/>
        ) : (
            <div className="tc">
                <h1 className="f2">Robo Friends</h1>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundary>
                </Scroll>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        searchField: state.searchField
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearchChange: (event) => dispatch(changeSearchField(event.target.value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
