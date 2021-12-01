import React from 'react';

class SearchInput extends React.Component{

    //this method will be called whenever the text in the search boxget changed
    onInputChange(event){
        console.log(event.target.value)
    }
    
    render(){
        return(
            <div className="ui segment">
                <form action="" className="ui form">
                    <div className="ui field">
                        <div className="ui massive icon input">
                        <input type="text" placeholder="search" onChange={this.onInputChange}/>
                        <i className="search icon"></i>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchInput;