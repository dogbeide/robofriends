import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import CardList from '../components/CardList';
import ErrorBoundary from '../components/ErrorBoundary';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import { changeSearchField, getRobots } from '../actions';


class App extends Component {

    componentDidMount() {
        this.props.onGetRobots()
    }
    
    render() {
        const {
            isPending,
            onSearchChange,
            robots,
            searchField
        } = this.props

        const filteredRobots = robots.filter(robot => (
            robot.name.toLowerCase().includes(searchField.toLowerCase())
        ))

        return isPending? (
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
        searchField: state.searchRobots.searchField,
        robots: state.getRobots.robots,
        isPending: state.getRobots.isPending,
        error: state.getRobots.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearchChange: (event) => dispatch(changeSearchField(event.target.value)),
        onGetRobots: () => dispatch(getRobots())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
