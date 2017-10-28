import React from 'react';
import ReactDOM from 'react-dom';
import '../css/style.css';
import '../less/style.less';
import '../scss/style.scss';
class ReactComponents extends React.Component{
    render(){
        return(
            <div>
                <h1 className="heading-1">Hello World from : css-loader</h1>
                <h1 className="heading-2">Hello World from : less-loader</h1>
                <h1 className="heading-3">Hello World from : scss-loader</h1>
            </div>
        );
    }
}

ReactDOM.render(<ReactComponents />,document.getElementById('app'));
