import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ResList from './ResList';
import Sort from './Sort';
import Filter from './Filter'

class App extends Component {
    state = {
        searchFiled: "",
        resources: [
            {id:2,name: "second course", provider: "quiklabs"},
            {id:1,name: "first course"},
            {id:3,name: "third course"},
            {id:4,name: "Fourth course"},
            {id:5,name: "fifth course"},
            {id:6,name: "sixth course"},
            {id:7,name: "seventh course"},
            {id:8,name: "eighth course"},
        ]
    }



    render() {
        const filterResources = this.state.resources.filter(r => r.name.toLowerCase().includes(this.state.searchFiled.toLowerCase()));
        return (
            <div>
                <SearchBar handleChange={e => this.setState({searchFiled: e.target.value})} placeholder="Search cool stuff..."/>
                <Sort sortby="name" sortid="byname" handleSort={
                    e => {
                    const val = e.options[e.selectedIndex].value;
                    if (val === "ASC") {
                        const sortedRes = filterResources.sort((a, b) => (a.name > b.name) ? 1 : -1)
                        this.setState({resources : sortedRes})
                    } else {
                        const sortedRes = filterResources.sort((a, b) => (a.name < b.name) ? 1 : -1)
                        this.setState({resources : sortedRes})
                    }
                }}/>
                <Filter />
                <ResList res={filterResources}/>
            </div>
        )
    }
}

export default App;