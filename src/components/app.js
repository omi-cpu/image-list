import React from "react";
import axios from "axios";
import SearchInput from './searchInput';


class App extends React.Component{

    async onSearchSubmit(entry){
        const response = await axios.get(`https://pixabay.com/api/?key=24632924-feb67c34b16f046333ef4e22d&q=${entry}&image_type=photo&pretty=true`)
        console.log(response)
    }

    render(){
        return(
                <div className='ui container' style={{marginTop:'30px'}}>
                    <SearchInput onSearchSubmit={this.onSearchSubmit} />
                </div>
        )
    }
}


export default App;