import React from 'react';
import ReactDOM from 'react-dom';

class ReactComponents extends React.Component{
    render(){
        return(
            <h1>Hello World</h1>
        );
    }
}

ReactDOM.render(<ReactComponents />,document.getElementById('app'));